import React from 'react';

interface BackgroundShapesProps {
  extraShapes?: React.ReactNode;
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ extraShapes }) => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="background-shape w-64 h-64 top-[10%] left-[5%]"></div>
        <div className="background-shape w-48 h-48 top-[50%] right-[10%]" style={{ animationDelay: '7s' }}></div>
        <div className="background-shape w-80 h-80 bottom-[-20%] left-[25%]" style={{ animationDelay: '14s' }}></div>
        <div className="background-shape w-40 h-40 bottom-[20%] right-[25%]" style={{ animationDelay: '21s' }}></div>
        {extraShapes}
    </div>
);

export default BackgroundShapes;