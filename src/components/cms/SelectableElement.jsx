import React from 'react';

const SelectableElement = ({ id, type, isSelected, onClick, children }) => {
  return (
    <div
      onClickCapture={(e) => {
        // Prevents links and motion events from firing so the editor can work
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      // 'inline-block' allows the ring to wrap images and buttons perfectly
      className={`relative group cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'ring-4 ring-[#7c7adb] ring-offset-2 z-[999]' 
          : 'hover:outline hover:outline-2 hover:outline-[#7c7adb]/40 z-10'
      } ${type.includes('img') ? 'inline-block' : 'block'}`}
    >
      {isSelected && (
        <div className="absolute -top-8 left-0 bg-[#7c7adb] text-white text-[10px] px-2 py-1 rounded-t-md font-bold uppercase z-[1000] shadow-lg whitespace-nowrap">
          Editing: {type.replace('motion.', '')}
        </div>
      )}
      {children}
    </div>
  );
};

export default SelectableElement;