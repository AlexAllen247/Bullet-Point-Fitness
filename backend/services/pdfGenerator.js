const PDFDocument = require("pdfkit");
const fs = require("fs");

const generateBasicPDF = (filePath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(12).text("This is a basic PDF document.", 100, 100);
  doc.end();
};

module.exports = generateBasicPDF;
