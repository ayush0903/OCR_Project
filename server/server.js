const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const dbConfig = require('./dbconfig');
const ocrRoutes = require('./Routes/ocr_routes');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    express.json({
      limit: "50mb",
    })
  );


app.use('/api/ocr',ocrRoutes);

app.listen(port , () => {
    console.log(`listning on port ${port}`);
});


