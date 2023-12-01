const PDFDocument = require("pdfkit");
const fs = require("fs");

const generateBasicPDF = (filePath, userData) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(12);
  // Add a title
  doc.text("Personalized Fitness Program", 100, 50);

  // Conditional content based on fitness goal
  if (userData.fitnessGoal === "fatLoss") {
    doc.text("Fat Loss Program", 100, 80);
    // Add specific content for fat loss program
  } else if (userData.fitnessGoal === "muscleGain") {
    doc.text("Muscle Gain Program", 100, 80);
    // Add specific content for muscle gain program
  }
  // ... other conditions
  doc.text(`Email: ${userData.email}`, 100, 100);
  doc.text(`Message: ${userData.message}`, 100, 130);
  // Add more customization based on userData here
  doc.end();
};

module.exports = generateBasicPDF;
