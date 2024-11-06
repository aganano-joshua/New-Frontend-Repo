/* eslint-disable react/display-name */
import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const Canvas = forwardRef(({ selectedTool }, ref) => {
  const canvasRef = useRef(null);
  const historyRef = useRef([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [text, setText] = useState('');
  const [textPosition, setTextPosition] = useState({ x: 100, y: 100 });
  const [isTextEditable, setIsTextEditable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [textSize, setTextSize] = useState(20);
  const [textInput, setTextInput] = useState('');
//   const [textPosition, setTextPosition] = useState(null);
  const [isTextInputVisible, setIsTextInputVisible] = useState(false);

   // Save text on Enter key press or outside click
   useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isTextInputVisible && !canvasRef.current.contains(e.target)) {
        renderText();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isTextInputVisible, textInput]);

  // Expose the undo function and other necessary methods
//   useImperativeHandle(ref, () => ({
//     undoLastStroke: () => {
    //   if (historyRef.current.length > 0) {
    //     historyRef.current.pop();
    //     redrawCanvas();
    //   }
    // },
//   }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineWidth = brushSize;
    context.strokeStyle = selectedColor;
    let currentStroke = []; // Temporary array for current stroke
    // console.log(currentStroke)

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

    if (selectedTool === 'text') {
        // alert("text")
      canvas.addEventListener('click', handleTextToolClick);
    }
    return () => {
        canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };

    // Add text tool click event listener

    // return () => {
    //   if (selectedTool === 'text') {
    //     canvas.removeEventListener('click', handleTextToolClick);
    //   }
    // };
  }, [isDrawing, selectedTool, selectedColor, brushSize]);

  // Render the text on the canvas
  const renderText = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear canvas
    context.font = `${textSize}px Arial`;
    context.fillStyle = selectedColor;
    context.fillText(text, textPosition.x, textPosition.y);
  };

  // Handle clicking on the canvas to enter text mode
  const handleCanvasClick = (e) => {
    if (selectedTool === 'text' && !isTextEditable) {
      setTextPosition({ x: e.clientX, y: e.clientY });
      setIsTextEditable(true);
    }
  };

  // Handle drag to move text position
  const handleMouseDownDrag = (e) => {
    const offsetX = e.clientX - textPosition.x;
    const offsetY = e.clientY - textPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleMouseMoveDrag = (e) => {
    if (isDragging) {
      setTextPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
      renderText();
    }
  };

  const handleMouseUpDrag = () => setIsDragging(false);

  // Handle resizing of text by dragging
  const handleMouseDownResize = () => setIsResizing(true);

  const handleMouseMoveResize = (e) => {
    if (isResizing) {
      const newSize = Math.max(10, textSize + (e.movementY || e.movementX));
      setTextSize(newSize);
      renderText();
    }
  };

  const handleMouseUpResize = () => setIsResizing(false);

  // Add mouse event listeners for dragging and resizing
  useEffect(() => {
    document.addEventListener('mousemove', isDragging ? handleMouseMoveDrag : handleMouseMoveResize);
    document.addEventListener('mouseup', isDragging ? handleMouseUpDrag : handleMouseUpResize);
    return () => {
      document.removeEventListener('mousemove', isDragging ? handleMouseMoveDrag : handleMouseMoveResize);
      document.removeEventListener('mouseup', isDragging ? handleMouseUpDrag : handleMouseUpResize);
    };
  }, [isDragging, isResizing]);

  return (
    <div
      className="canvas-container flex h-full w-full justify-center items-center"
      style={{ borderRadius: "1px solid black", position: 'relative' }}
      onClick={handleCanvasClick}
    >
      <canvas ref={canvasRef} className="w-full h-[95vh]" width={1650} height={750} id="drawingCanvas" />

      {isTextEditable && (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => { setIsTextEditable(false); renderText(); }}
          style={{
            position: 'absolute',
            top: textPosition.y,
            left: textPosition.x,
            fontSize: `${textSize}px`,
            border: '1px solid #000',
            backgroundColor: 'transparent',
            outline: 'none',
            color: selectedColor,
          }}
          autoFocus
        />
      )}

      {!isTextEditable && text && (
        <div
          style={{
            position: 'absolute',
            top: textPosition.y - textSize,
            left: textPosition.x,
            fontSize: `${textSize}px`,
            color: selectedColor,
            cursor: 'move',
          }}
          onMouseDown={handleMouseDownDrag}
          onDoubleClick={() => setIsTextEditable(true)}
        >
          {text}
          <div
            style={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              width: '10px',
              height: '10px',
              backgroundColor: 'gray',
              cursor: 'nwse-resize',
            }}
            onMouseDown={handleMouseDownResize}
          />
        </div>
      )}
    </div>
  );
});

export default Canvas;
