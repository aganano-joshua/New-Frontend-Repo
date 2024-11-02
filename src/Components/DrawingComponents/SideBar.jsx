import React, { useState } from 'react'
import { assets } from '../../../Images/asset';
import { Button } from '../ui/button'
import Delete from './Delete';


const tools = [
    { name: 'pen', url: assets.pen },
    { name: 'brush', url: assets.brush },
    { name: 'eraser', url: assets.eraser },
    { name: 'color', url: assets.colorpal },
    { name: 'text', url: assets.text },
  ]

const SideBar = ({ selectTool, selectedTool}) => {
    // const [loading, setLoading] = useState(false);

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {
      setIsPopupVisible(true);
    };

    const hidePopup = () => {
      setIsPopupVisible(false);
    };
  return (
    <div>
        <div style={{borderTop: "5px solid white"}} className="pl-[1rem] flex h-[6rem] absolute left-0 flex-col h-[100%] justify-center gap-[1rem] items-center bg-[#096566]">
      {tools.map((tool) => (
        <Button
          key={tool.name}
          style={{ height: "3rem", width: "3rem", borderRadius: "15px" , backgroundColor: selectedTool === tool.name ? '#b9b9b9' : '#ffffff' }}
          className={`mr-[1rem] flex items-center  ${selectedTool === tool.name ? '' : ''
            }`}
          onClick={() => selectTool(tool.name)}
        >
          <img className='w-[3rem] h-[3rem]' src={tool.url} alt={tool.name} id={tool.name} />
        </Button>
      ))}
        <Button
        style={{ height: "3rem", width: "3rem", borderRadius: "15px"}}
        className='mr-[1rem] flex items-center bg-[white]'
        onClick={showPopup}
      >
        <img className='w-[2rem] h-[2rem]' src={assets.trashCan} />
      </Button>
      <Delete isVisible={isPopupVisible} onClose={hidePopup}/>
    </div>
    </div>
  )
}

export default SideBar