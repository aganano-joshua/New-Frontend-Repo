// // TourTooltip.js
// import React, { useEffect, useState } from 'react';

// function TourTooltip({ content, targetElement, onNext, onEnd }) {
//     const [position, setPosition] = useState({ top: 0, left: 0 });

//     useEffect(() => {
//         const element = document.querySelector(targetElement);
//         if (element) {
//             const rect = element.getBoundingClientRect();
//             setPosition({
//                 top: rect.top + window.scrollY + rect.height + 10,  // Position below the element
//                 left: rect.left + window.scrollX,
//             });
//         }
//     }, [targetElement]);

//     return (
//         <div className='absolute top-0 w-full h-full bg-black z-20'>

//         <div style={{
//             position: 'absolute',
//             top: `${position.top}px`,
//             left: `${position.left}px`,
//             background: 'white',
//             padding: '10px',
//             border: '1px solid black',
//             borderRadius: '5px',
//             zIndex: 1000,
//             maxWidth: '200px',
//         }}>
//             <p>{content}</p>
//             <button onClick={onNext}>Next</button>
//             <button onClick={onEnd}>End Tour</button>
//             </div>
//         </div>
//     );
// }

// export default TourTooltip;

// TourTooltip.js
import React, { useEffect, useState } from 'react';
// import './TourTooltip.css'; // CSS file for tooltip styling

function TourTooltip({ content, targetElement, onNext, onEnd }) {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const element = document.querySelector(targetElement);
        if (element) {
            const rect = element.getBoundingClientRect();
            setPosition({
                top: rect.top + window.scrollY + rect.height + 10, // Adjust for positioning
                left: rect.left + window.scrollX,
            });
        }
    }, [targetElement]);

    return (
        <div style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            background: 'white',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            zIndex: 1000,
            maxWidth: '200px',
        }} className="tooltip-container">
            <p>{content}</p>
            <button onClick={onNext}>Next</button>
            <button onClick={onEnd}>End Tour</button>
        </div>
    );
}

export default TourTooltip;
