import React, { useState } from "react";
import { UploadImage } from "../Apicalls/ocr";
import FormData from 'form-data'
import toast from "react-hot-toast";

function ImageUploader() {
  const [image = "", setImage] = useState("");

  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    console.log(file.size);
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
      //dispatch(ShowLoader());
      let data = new FormData();
      data.set('image', image);
      const response = await UploadImage(data);
      //dispatch(HideLoader());
      if (response.success) {
        toast.success("Profile Pic Updated");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      //dispatch(HideLoader());
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="text-xl font-semibold uppercase text-gray-500 flex flex-col gap-2 flex-col p-2 shadow-md border w-max border-gray-300 rounded">
        <div className="flex items-center">
          <div className={`border-gray-50 ${!image && "dotted-border"}`}>
            {image ? (
              <img src={image} alt="profile pic" className="w-32 h-32" />
            ) : (
              <div className="border-black-100 outline-dashed w-32 h-32"></div>
            )}
          </div>
          <label htmlFor="file-input" className="cursor-pointer ml-6">
            Upload Image of ID (size limit of 2MB)
          </label>
        </div>

        <div className="flex gap-2 p-6">
          <input
            type="file"
            onChange={onFileSelect}
            className="file-input border-0"
            id="file-input"
          />
          <button className="contained-btn" onClick={uploadIdImage}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
