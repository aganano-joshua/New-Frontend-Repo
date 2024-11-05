// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import { ColorPicker, useColor } from "react-color-palette";
// import "react-color-palette/css";

// const DrawingControls = ({ onColorChange, onBrushSizeChange }) => {
//   const [color, setColor] = useColor('#000000');
//   const [brushSize, setBrushSize] = useState(5);

//   // Handle color change
//   const handleColorChange = (value) => {
//     setColor(value.hex);
//     onColorChange(value.hex);
//   };

//   // Handle brush size change
//   const handleBrushSizeChange = (value) => {
//     setBrushSize(value);
//     onBrushSizeChange(value);
//   };

//   return (
//     <div>
//           <h4 className='font-bold'>Brush Color:</h4>
//           {/* <ColorPicker value={color} className='w-[10px]' onChange={handleColorChange} /> */}
//           <h4 className='font-bold'>Brush Size:</h4>
//           {/* <Slider
//             min={1}
//             max={30}
//             value={brushSize}
//             onChange={handleBrushSizeChange}
//           /> */}
//           <ColorPicker color={color} onChange={handleColorChange} />;
//     </div>
//   );
// };

// export default DrawingControls;

/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const DrawingControls = ({ onColorChange, onBrushSizeChange }) => {
  // Initialize color with `useColor`
  const [color, setColor] = useColor("hex", "#000000");
  const [brushSize, setBrushSize] = useState(5);

  // Handle color change
  const handleColorChange = (value) => {
    setColor(value); // Set the full color object, not just the hex value
    onColorChange(value.hex); // Pass only the hex value to the parent
  };

  // Handle brush size change
  const handleBrushSizeChange = (value) => {
    setBrushSize(value);
    onBrushSizeChange(value);
  };

  return (
    <div className='absolute right-0 h-full flex items-center'>
      {/* <h4 className="font-bold">Brush Color:</h4> */}
      <div className='w-[20rem]'>
      <ColorPicker color={color} onChange={handleColorChange} />
      </div>
      
      {/* <h4 className="font-bold">Brush Size:</h4> */}
      {/* Add your slider here */}
      {/* Example of a simple range input for brush size */}
      {/* <input
        type="range"
        min="1"
        max="30"
        value={brushSize}
        onChange={(e) => handleBrushSizeChange(parseInt(e.target.value))}
      /> */}
    </div>
  );
};

export default DrawingControls;
