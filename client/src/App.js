import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUploader from "./Components/ImageUploader";
import OCR_Filter from "./Components/OCR_Filter";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/filter" element={<OCR_Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
