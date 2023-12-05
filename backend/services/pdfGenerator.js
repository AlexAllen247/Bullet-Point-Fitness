const PDFDocument = require("pdfkit");
const fs = require("fs");
//const path = require("path");

const generateBasicPDF = (filePath, userData) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(12);

  //const imagePath = path.join(__dirname, '../images/BulletPointFitnessBannerNew.png');

  //doc.image(imagePath, 50, 50, { width: 300 });

  // Title
  doc.text("Personalized Fitness Program", 100, 50);

  // Conditional content based on fitness goal
  if (userData.fitnessGoal === "fatLoss") {
    doc.text("Fat Loss Program", 100, 80);
    const fatLossVideoLink = "https://www.youtube.com/shorts/At-yfW_wZMc";
    doc.fillColor("blue").text("Watch Fat Loss Video Here", 100, 100, {
      link: fatLossVideoLink,
      underline: true,
    });
  } else if (userData.fitnessGoal === "muscleGain") {
    doc.text("Muscle Gain Program", 100, 80);
    const muscleGainVideoLink = "https://www.youtube.com/shorts/d3bjukyEVnA";
    doc.fillColor("blue").text("Watch Muscle Gain Video Here", 100, 100, {
      link: muscleGainVideoLink,
      underline: true,
    });
  }
  // ... other conditions

  // Resetting fill color for normal text
  doc.fillColor("black");
  doc.text(`Email: ${userData.email}`, 100, 130);
  doc.text(`Message: ${userData.message}`, 100, 160);

  // Mention the interactive muscle map
  doc.text(
    "For a comprehensive guide to all exercises, visit our Interactive Muscle Map at bulletpointfitness.com",
    50,
    190,
  );

  // End the PDF document
  doc.end();
};

module.exports = generateBasicPDF;
