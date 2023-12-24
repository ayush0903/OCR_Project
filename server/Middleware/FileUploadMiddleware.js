const fileUpload = require('express-fileupload');

module.exports = (req, res, next) => {
    // Check if the file input exists and has the expected name
    if (!req.files || !req.files.image) {
      return res.status(400).send('No image file uploaded');
    }
  
    next();
  };