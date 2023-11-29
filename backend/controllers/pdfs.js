// routes/pdfRoutes.js

const express = require("express");
const router = express.Router();
const generateBasicPDF = require("../services/pdfGenerator");
const path = require("path");

router.get("", async (req, res) => {
  const filePath = path.join(__dirname, "../downloads/generatedPDF.pdf");
  generateBasicPDF(filePath);

  res.download(filePath, (err) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Error in downloading the file");
    } else {
      // Optionally, delete the file after sending to client
      // fs.unlinkSync(filePath);
    }
  });
});

module.exports = router;
