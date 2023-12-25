import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageProcessor from "./Components/ImageProcessor";
import OCR_Filter from "./Components/OCR_Filter";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="bg-indigo-900 h-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ImageProcessor />} />
          <Route path="/filter" element={<OCR_Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
