import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import ImageResult from './ImageResults'
import { PerformOCR } from '../../Apicalls/ocr';
import FormData from 'form-data';

const ImageProcessor = () => {

    const [imageUrl,setImageUrl] = useState('');
    const [result , setResult] = useState('');

    

    const processingHandler = async () => {
        if(!imageUrl){
           alert('No image uploaded');
            return;
        }
        try {
            let data = new FormData();
            data.set('imageUrl', imageUrl);
            const response = await PerformOCR(data);
           
            if(response.success){
                alert('Processing Completed');
                setResult(response.data);
            }

            else {
                alert('something went wrong');
            }
        } catch (error) {
                alert(error);
        }
    }
  return (
    <div className="flex-col flex items-center justify-space h-[80vh] p-20">
      <ImageUploader setImageUrl={setImageUrl}/>
      <button className='contained-btn my-10 pbtn' onClick={processingHandler}>Process</button>
      <ImageResult resultData={result} imageUrl={imageUrl}/>
    </div>
  )
}

export default ImageProcessor