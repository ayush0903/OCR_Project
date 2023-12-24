const Image = require('../Models/ImageModel');
const cloudinary = require('../cloudinary');
const vision = require('@google-cloud/vision');
const router = require('express').Router();
const fileUploadMiddleware = require('../Middleware/FileUploadMiddleware');
const ID = require('../Models/IdModel');
const axios = require('axios');
const InformationExtracter = require('../helper/InformationExtractor');


router.post('/upload-id-image',  async (req, res) => {
    try {
      const image = req.body.image;

      // Upload the image to Cloudinary
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'OCR App',
      });
  
      // Create a new OCR document with the Cloudinary URL
      const newOCR = await Image.create({ url: uploadedImage.secure_url });
  
      return res.send({
        success: true,
        message: 'Image uploaded successfully',
      });
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  });

  //to perform OCR on image
  router.post('/process-image',async (req,res) => {
    
    try {
        const { imageUrl } = req.body;

        const imageExist = await ID.findOne({imageURL : imageUrl});
        if(imageExist){
          return res.json({
            success : 'true',
            data : imageExist
          });
        }
        // Make the API request to Eden AI OCR
        const options = {
          method: 'POST',
          url: 'https://api.edenai.run/v2/ocr/ocr',
          headers: {
            Authorization: `Bearer ${process.env.apiKey}`,
          },
          data: {
            providers: 'google',
            language: 'th',
            file_url: imageUrl,
            fallback_providers: '',
          },
        };
    
        const response = await axios.request(options);
        const ocrResults = response.data;

        //processing result after OCR
        let {information , success_percentage} = InformationExtracter(ocrResults.google.text);
        
        information.imageURL = imageUrl;
        
        //storing in Database
        const newID = await ID.create(information);
        
        let newStatus = 'Partial';

        if(success_percentage===100) newStatus = 'Success';
        else if(success_percentage===0) newStatus = 'Fail';

        //updating status of image
        const image_ocr = await Image.findOneAndUpdate({url : imageUrl} , {status : newStatus});
        
        return res.json({ success: true, data: newID });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
    });
    

module.exports = router;
