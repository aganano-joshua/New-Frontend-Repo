import React, { useEffect, useRef, useState } from 'react'
import CanvaComponents from '../../Components/DrawingComponents/CanvaComponents'
import SideBar from '../../Components/DrawingComponents/SideBar'
import { HeaderComponents } from '../../Components/DrawingComponents/HeaderComponents'
import { useNavigate } from 'react-router-dom'
import Canvas from '../../Components/test/Canvas'
import TextCanva from '../../Components/test/TextCanva'
import Greet from '@/Components/DrawingComponents/tutorial/Greet'
import TourTooltip from '@/Components/DrawingComponents/tutorial/Greet'
import WelcomeText from '@/Components/DrawingComponents/tutorial/WelcomeText'
import { assets } from '../../../Images/asset'

const Dashboard = () => {
    const [audio] = useState(new Audio(assets.backgroundMusic))
    const [isPlaying, setIsPlaying] = useState(true);
    const [isAutoplayed, setIsAutoplayed] = useState(false);
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
    const [isTourToolActive, setIsTourToolActive] = useState(false); // Toggle the tour on/off


    const playAudio = () => {
        audio.muted = false; // Ensure audio is unmuted
        audio.loop = true;
        audio.play()
            .then(() => {
                setIsAutoplayed(true);
            })
            .catch((error) => {
                console.log("Autoplay failed:", error);
            });
    };
  
      const clickBtn = () => {
        playAudio()
      }
  
      useEffect(() => {
        // Handle when audio should play or pause
        if (isPlaying) {
            // If the audio is not already playing, try to play it
            if (!isAutoplayed) {
                playAudio(); // Play audio
            }
        } else {
            audio.pause(); // Pause the audio if not playing
            audio.currentTime = 0; // Reset audio to the beginning
        }
  
        // Cleanup on unmount
        return () => {
            audio.pause(); // Stop audio on component unmount
            audio.currentTime = 0; // Reset audio time
        };
    }, [isPlaying, audio]);

    const steps = [
        {
            element: '#sidebar-option2',
            content: 'Click Here if you want to undo what you drew',
        },
        {
            element: '#header-title',
            content: 'Click this button if you want to Share your drawing with friends',
        },
        {
            element: '#sidebar-option1',
            content: 'Click this button if you want to save your drawing',
        },
    ];

    const stepsTool = [
        {
            element: '#pencil',
            content: 'Click The Pencil Tool to Draw',
        },
        {
            element: '#brush',
            content: 'Click The Brush tool to draw',
        },
        {
            element: '#eraser',
            content: 'Click the eraser tool to erase',
        },
        {
            element: '#color',
            content: 'Click this to pick color',
        },
        {
            element: '#text',
            content: 'Click this button to add text',
        },
    ];
    
    const justReg = () => {
        setGreet(true)
    }

    const startTour = () => {
        setIsTourActive(true);
        setTourStep(0);
        highlightTarget(steps[0].element);
    };

    const startToolTour = () => {
        clickBtn();
        setGreet(false)
        setIsTourToolActive(true);
        setTourStep(0);
        highlightToolTarget(stepsTool[0].element);
    };

    const highlightToolTarget = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('highlighted-tour-target');
        }
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

    const nextToolStep = () => {
        removeHighlight(stepsTool[tourStep].element);  // Remove highlight from the current element
        if (tourStep < stepsTool.length - 1) {
            setTourStep(tourStep + 1);
            highlightTarget(stepsTool[tourStep + 1].element);  // Highlight the next element
        } else {
            endToolTour();
            startTour();
        }
    };

    const endTour = () => {
        setIsTourActive(false)
        removeHighlight(steps[tourStep].element);  // Remove highlight when the tour ends
        setTourStep(0);
    };

    const endToolTour = () => {
        setIsTourToolActive(false)
        removeHighlight(stepsTool[tourStep].element);  // Remove highlight when the tour ends
        setTourStep(0);
    };

    useEffect(() => {
        justReg();  // Automatically start the tour when the page loads
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
            {isTourToolActive && (
                <TourTooltip
                    content={stepsTool[tourStep].content}
                    targetElement={stepsTool[tourStep].element}
                    onNext={nextToolStep}
                    onEnd={endToolTour}
                />
            )}
            {greet &&<WelcomeText onClick={startToolTour} />}
        </div>
    )
}

export default Dashboard