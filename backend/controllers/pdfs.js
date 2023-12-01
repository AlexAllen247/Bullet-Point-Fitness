const express = require("express");
const router = express.Router();
const generateBasicPDF = require("../services/pdfGenerator");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.post("", (req, res) => {
  const uniqueFileName = uuidv4() + ".pdf";
  const filePath = path.join(__dirname, "../downloads", uniqueFileName);

  generateBasicPDF(filePath, req.body);

  res.status(200).json({ fileName: uniqueFileName });
});

router.get("/:file", (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, "../downloads", file);
  res.download(filePath, (err) => {
    if (err) {
      return res.status(404).send("File not found");
    } else {
      // Optionally, delete the file after sending to client
      // fs.unlinkSync(filePath);
    }
  });
});

module.exports = router;
