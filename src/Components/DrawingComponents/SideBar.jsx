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

const SideBar = ({ selectTool, selectedTool }) => {
    // const [loading, setLoading] = useState(false);

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const hidePopup = () => {
        setIsPopupVisible(false);
    };
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
                        <img className='w-[4rem] h-[2.5rem]' src={tool.url} alt={tool.name} id={tool.name} />
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default SideBar