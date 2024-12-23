import React, { useEffect, useState } from 'react'
import { assets } from '../../../Images/asset';
import { Button } from '../ui/button'
import Delete from './Delete';


const tools = [
    { name: 'pen', url: assets.pen, id: 'pencil' },
    { name: 'brush', url: assets.brush, id: 'brush' },
    { name: 'eraser', url: assets.eraser, id: 'eraser' },
    { name: 'color', url: assets.colorpal, id: 'color' },
    { name: 'text', url: assets.text, id: 'text' },
]

const SideBar = ({ selectTool, selectedTool }) => {
    // const [loading, setLoading] = useState(false);

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [audio] = useState(new Audio(assets.touchUi))
    const [isPlaying, setIsPlaying] = useState(true);
    const [isAutoplayed, setIsAutoplayed] = useState(false);

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    const playAudio = () => {
      audio.muted = false; // Ensure audio is unmuted
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
    return (
        <div className='z-5'>
            <div className='absolute bg-[#096566] pl-[12px] w-[6rem] h-[100%] top-0 flex justify-center items-center flex-col gap-2'>
                {tools.map((tool) => (
                    <Button
                        key={tool.name}
                        style={{ height: "4rem", width: "4.5rem", borderRadius: "15px", backgroundColor: selectedTool === tool.name ? '#b9b9b9' : '#ffffff' }}
                        className={`mr-[1rem] flex items-center  ${selectedTool === tool.name ? '' : ''
                            }`}
                        onClick={() => selectTool(tool.name)}
                    >
                        <img className='w-[4rem] h-[2.5rem]' src={tool.url} alt={tool.name} id={tool.name} onClick={clickBtn} />
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default SideBar