/* eslint-disable react/display-name */
// src/components/DrawingBoard.js

import { useRef, useEffect, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// import the rest of your imports

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const Canvas = forwardRef(({ selectedTool, selectTool, onSaveClick }, ref) => {
  const canvasRef = useRef(null);
  const colorPaletteRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const historyRef = useRef([]); // History for each stroke
  const [format, setFormat] = useState('image/png');
  const [imageId, setImageId] = useState(null); // Track image ID for updates
  const [loading, setLoading] = useState(false);

  // Other state variables and refs...
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  // Expose the undo function
  useImperativeHandle(ref, () => ({
    undoLastStroke: () => {
      if (historyRef.current.length > 0) {
        historyRef.current.pop(); // Remove last stroke from history
        redrawCanvas(); // Redraw canvas from history
      }
    },
    // Other functions like clearCanvas, printCanvas, shareCanvas
  }));

  // Function to redraw the canvas based on the history
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    historyRef.current.forEach(stroke => {
      context.beginPath();
      stroke.forEach(point => {
        context.lineTo(point.x, point.y);
      });
      context.stroke();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineWidth = brushSize;
    context.strokeStyle = selectedColor;

    let currentStroke = []; // Temporary array for current stroke
    console.log(currentStroke)

    const startDrawing = (event) => {
      setIsDrawing(true);
      const { x, y } = getPos(canvas, event);
      currentStroke = [{ x, y }]; // Start new stroke
      context.beginPath();
      context.moveTo(x, y);
    };

    const draw = (event) => {
      if (!isDrawing) return;
      const { x, y } = getPos(canvas, event);
      context.lineTo(x, y);
      context.stroke();
      currentStroke.push({ x, y }); // Add point to current stroke
    };

    const getPos = (canvas, event) => {
        const rect = canvas.getBoundingClientRect();
        const touch = event.touches ? event.touches[0] : event;
        return {
          x: (touch.clientX - rect.left) * (canvas.width / rect.width),
          y: (touch.clientY - rect.top) * (canvas.height / rect.height),
        };
      };

    const stopDrawing = () => {
      setIsDrawing(false);
      historyRef.current.push([...currentStroke]); // Save stroke to history
      currentStroke = []; // Reset current stroke
      context.closePath();
    };

    // Event listeners for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [isDrawing]);


//   To Make All Tool Functional From the Sidebar

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the color palette, switch to 'pen'
      if (colorPaletteRef.current && !colorPaletteRef.current.contains(event.target)) {
        selectTool('pen');
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectTool]);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    switch (selectedTool) {
      case 'pen':
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        break;
      case 'brush':
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = 'blue';
        context.lineWidth = 5;
        break;
      case 'eraser':
        context.globalCompositeOperation = 'destination-out';
        context.lineWidth = 10;
        break;
      case 'text':
        break;
      case 'trash':
        break;
      default:
        break;
    }
  }, [selectedTool]);

  // To Save And Update Image In Database
  const saveDrawing = useCallback(() => {
    setLoading(true);
    const canvas = canvasRef.current;
    const getToken = localStorage.getItem('jwttoken');
    const headers = {
      Authorization: `Bearer ${getToken}`,
    };
  
    const decodedToken = jwtDecode(getToken);
    const email = decodedToken.sub;
  
    const dataURL = canvas.toDataURL(format); // Convert drawing to base64
    const dateCreated = new Date(); // Get the current date
  
    const requestData = {
      email: email,
      drawingBase64: dataURL,
      datecreated: dateCreated,
    };
  
    const apiUrl = imageId
      ? `${API_BASE_URL}/api/v2/image/update/${imageId}`
      : `${API_BASE_URL}/api/v2/saveDrawing`;
  
    axios({
      method: imageId ? 'patch' : 'post',
      url: apiUrl,
      data: requestData,
      headers,
    })
      .then((response) => {
        if (!imageId) {
          setImageId(response.data); // Save new imageId
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error saving/updating drawing', error);
        setLoading(false);
      });
  }, [imageId, format]); // Add relevant dependencies here

  useEffect(() => {
    if (onSaveClick) {
      onSaveClick(saveDrawing, imageId, loading);
    }
  }, [onSaveClick, saveDrawing, imageId, loading]);

  return (
    <>
      {/* Other JSX code */}
      <div className="canvas-container flex h-full w-full justify-center items-center" style={{ borderRadius: "1px solid blac" }}>
        <canvas ref={canvasRef} className='w-full h-[95vh]' width={1650} height={750} id="drawingCanvas" />
      </div>
    </>
  );
});

export default Canvas;
