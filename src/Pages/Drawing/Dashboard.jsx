import React, { useRef, useState } from 'react'
import CanvaComponents from '../../Components/DrawingComponents/CanvaComponents'
import SideBar from '../../Components/DrawingComponents/SideBar'
import { HeaderComponents } from '../../Components/DrawingComponents/HeaderComponents'
import { useNavigate } from 'react-router-dom'
import Canvas from '../../Components/test/Canvas'
import TextCanva from '../../Components/test/TextCanva'

const Dashboard = () => {
    const [selectedTool, setSelectedTool] = useState('pen')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [saveDrawingFn, setSaveDrawingFn] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [drawItem, setDrawItem] = useState([]);

//   const drawingBoardRef = useRef();

  const handleUndoClick = () => {
    if (drawingBoardRef.current) {
      drawingBoardRef.current.undoLastStroke();
      alert("Drawing will be undo")
    }
  };

  const handleSaveClick = (saveFn, imgId, isLoading) => {
    setSaveDrawingFn(() => saveFn);
    setImageId(imgId);
    setLoading(isLoading);
  };
  const navigate = useNavigate();

//   const { token } = useAuth();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const drawingBoardRef = useRef(null)

  const handlePrint = () => {
    if (drawingBoardRef.current) {
      drawingBoardRef.current.printCanvas()
    }
  }

  const handleClear = () => {
    if (drawingBoardRef.current) {
      drawingBoardRef.current.clearCanvas()
    }
  }

  const handleShare = () => {
    if (drawingBoardRef.current) {
      drawingBoardRef.current.shareCanvas()
    }
  }

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  const handleBrushSizeChange = (newSize) => {
    setBrushSize(newSize);
  };

  const handleDraw = (newItem) => {
    setDrawItem(prev => [...prev, newItem]); // Keep track of drawn items
};

// const handleTextToolClick = () => {
//     if (drawingBoardRef.current) {
//       drawingBoardRef.current.toggleTextMode();
//       alert("clicked")
//     }
//   };

const handleUndo = () => {
    if (drawItem.length > 0) {
        setDrawItem(prev => prev.slice(0, -1)); // Remove the last item
    }
}
    return (
        <>
            <HeaderComponents saveDrawing={saveDrawingFn} imageId={imageId} loading={loading} onUndo={handleUndoClick}/>
            <SideBar selectTool={setSelectedTool}
        selectedTool={selectedTool}
        handleBrushSizeChange={handleBrushSizeChange}
        handleColorChange={handleColorChange}/>
            <TextCanva selectTool={setSelectedTool} onDraw={handleDraw} onSaveClick={handleSaveClick} ref={drawingBoardRef} selectedTool={selectedTool}/>
        </>
    )
}

export default Dashboard