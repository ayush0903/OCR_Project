const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
    {
        url: {
          type: String,
          required: true,
        },
        result: {
          type: String,
        },
    
        message: {
          type: String,
        },

        status : {
          type : String,
          default : "pending",
        },
      },
      {
        timestamps: true,
      }
    );

const Image_Model = mongoose.model("Image", ImageSchema);

module.exports = Image_Model;