import React, { useState } from "react";
import { UploadImage } from "../../Apicalls/ocr";
import FormData from 'form-data'




function ImageUploader({setImageUrl}) {

  const [image = "", setImage] = useState("");

  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file.size <= 2 * 1024 * 1024) {
      const reader = new FileReader(file);
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        setImage(reader.result);
      };
    } else {
      alert("File size exceeds the limit of 2MB");
      e.target.value = '';
    }
  };

  const uploadIdImage = async () => {
    try {
      let data = new FormData();
      data.set('image', image);
      const response = await UploadImage(data);
      setImageUrl(response.imageUrl);
      if (response.success) {
        alert("Profile Pic Updated");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div>
      <div className="h-[22rem] text-xl font-bold uppercase text-black- flex flex-col gap-2 flex-col p-2 shadow-md border w-max border-black-300 rounded bg-lime-200">
        <div className="flex-col justify-items-center">
          <div className={`border-gray-50 justify-center px-40 ${!image && "dotted-border"}`}>
            {image ? (
              <img src={image} alt="profile pic" className="w-56 h-56" />
            ) : (
              <div className="flex border-black-100 outline-dashed items-center w-56 h-56"></div>
            )}
          </div>
          <label htmlFor="file-input" className="cursor-pointer ml-6 px-10 ">
            Upload Image of ID (size limit of 2MB)
          </label>
        </div>

        <div className="flex gap-2 p-6 mt-5 py-2">
          <input
            type="file"
            onChange={onFileSelect}
            className="file-input border-0"
            id="file-input"
          />
          <button className="contained-btn" onClick={uploadIdImage}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;