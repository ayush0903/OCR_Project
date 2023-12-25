import React from 'react';

const Header = () => {
  return (
    <div className="h-16 w-screen bg-gray-100 p-2 mx-auto">
      {/* header */}
      <div className="flex-row justify-between p-5 bg-primary rounded text-center">
        <div className="flex items-center gap-1 text-center">
          <i className="ri-message-3-line text-2xl text-white"></i>
          <h1
            className="text-black text-2xl uppercase font-bold cursor-pointer flex items-center mx-auto"
            onClick={() => {
              // Your click event handler logic
            }}
          >
            Thai ID card OCR App
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
