// ToolSelector.js
import React from 'react';
import { assets } from '../../../Images/asset'; // Adjust the import path as necessary
import { Button } from '../ui/button';

const tools = [
    { name: 'pen', url: assets.pen },
    { name: 'brush', url: assets.brush },
    { name: 'eraser', url: assets.eraser },
    { name: 'color', url: assets.colorpal },
    { name: 'text', url: assets.text },
];

const ToolSelector = ({ selectTool, selectedTool }) => {
    return (
        <div className='tool-selector'>
            {tools.map((tool) => (
                <Button
                    key={tool.name}
                    style={{ backgroundColor: selectedTool === tool.name ? '#b9b9b9' : '#ffffff' }}
                    onClick={() => selectTool(tool.name)}
                >
                    <img src={tool.url} alt={tool.name} />
                </Button>
            ))}
        </div>
    );
};

export default ToolSelector;