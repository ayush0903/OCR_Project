const mongoose = require('mongoose');

const IDSchema = new mongoose.Schema(
    {
        name: {
          type: String,
        },
        lastName: {
          type: String,
        },
        imageURL: {
            type: String,
            require : true
          },
        idNumber : {
          type: String,
        },

        dateOfIssue : {
          type : String,
        },

        dateOfExpiry : {
            type : String,
          },
          
        dateOfBirth : {
            type : String,
        },
      },
      {
        timestamps: true,
      }
    );

const ID_Model = mongoose.model("ID", IDSchema);

module.exports = ID_Model;