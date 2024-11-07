import React, { useEffect, useRef, useState } from 'react'
import CanvaComponents from '../../Components/DrawingComponents/CanvaComponents'
import SideBar from '../../Components/DrawingComponents/SideBar'
import { HeaderComponents } from '../../Components/DrawingComponents/HeaderComponents'
import { useNavigate } from 'react-router-dom'
import Canvas from '../../Components/test/Canvas'
import TextCanva from '../../Components/test/TextCanva'
import Greet from '@/Components/DrawingComponents/tutorial/Greet'
import TourTooltip from '@/Components/DrawingComponents/tutorial/Greet'

const Dashboard = () => {
    const [selectedTool, setSelectedTool] = useState('pen')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [saveDrawingFn, setSaveDrawingFn] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [drawItem, setDrawItem] = useState([]);
  const [greet, setGreet] = useState(false)
  const [tourStep, setTourStep] = useState(0); // Track the current step
    const [isTourActive, setIsTourActive] = useState(false); // Toggle the tour on/off

    const steps = [
        {
            element: '#header-title',
            content: 'This is the header where you can see your navigation options.',
        },
        {
            element: '#sidebar-option1',
            content: 'Here’s Option 1 in the sidebar. You can click here for more features.',
        },
        {
            element: '#sidebar-option2',
            content: 'Option 2 in the sidebar. More exciting tools here!',
        },
    ];

    const startTour = () => {
        setIsTourActive(true);
        setTourStep(0);
        highlightTarget(steps[0].element);
    };

    const highlightTarget = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('highlighted-tour-target');
        }
    };

    const removeHighlight = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.remove('highlighted-tour-target');
        }
    };

    const nextStep = () => {
        removeHighlight(steps[tourStep].element);  // Remove highlight from the current element
        if (tourStep < steps.length - 1) {
            setTourStep(tourStep + 1);
            highlightTarget(steps[tourStep + 1].element);  // Highlight the next element
        } else {
            endTour();
        }
    };

    const endTour = () => {
        setIsTourActive(false);
        removeHighlight(steps[tourStep].element);  // Remove highlight when the tour ends
        setTourStep(0);
    };

    useEffect(() => {
        startTour();  // Automatically start the tour when the page loads
    }, []);
//   const drawingBoardRef = useRef();

  const handleUndoClick = () => {
    if (drawingBoardRef.current) {
      drawingBoardRef.current.undoLastStroke();
      alert("Undo Drawing")
    }
  };

  const handleSaveClick = (saveFn, imgId, isLoading) => {
    setSaveDrawingFn(() => saveFn);
    setImageId(imgId);
    setLoading(isLoading);
  };

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


// if user just registered
const justReg = () => {
    const user = true;
    if(user === true){
        setGreet(true)
    }
}

const handleUndo = () => {
    if (drawItem.length > 0) {
        setDrawItem(prev => prev.slice(0, -1)); // Remove the last item
    }
}
    return (
        <div className='overflow-x-hidden overflow-y-hidden overflow-hidden'>
            <HeaderComponents saveDrawing={saveDrawingFn} imageId={imageId} loading={loading} onUndo={handleUndoClick}/>
            <SideBar selectTool={setSelectedTool}
        selectedTool={selectedTool}
        handleBrushSizeChange={handleBrushSizeChange}
        handleColorChange={handleColorChange}/>
            <TextCanva selectTool={setSelectedTool} onDraw={handleDraw} onSaveClick={handleSaveClick} ref={drawingBoardRef} selectedTool={selectedTool}/>
            {isTourActive && (
                <TourTooltip
                    content={steps[tourStep].content}
                    targetElement={steps[tourStep].element}
                    onNext={nextStep}
                    onEnd={endTour}
                />
            )}
        </div>
    )
}

export default Dashboard