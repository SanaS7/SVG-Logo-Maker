const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { generateSVG, saveSVG } = require("./lib/svgUtils");

// Prompt for text input
function promptText() {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return "Please enter up to three characters.";
      },
    },
  ]);
}

// Prompt for color input
function promptColor(message) {
  return inquirer.prompt([
    {
      type: "input",
      name: "color",
      message,
      validate: (input) => {
        // Regular expression to match color keywords or hexadecimal colors
        const colorRegex = /^([A-Za-z]+|#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))$/;
        if (colorRegex.test(input)) {
          return true;
        }
        return "Please enter a valid color keyword or hexadecimal color.";
      },
    },
  ]);
}

// Prompt for shape input
function promptShape() {
  return inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["Circle", "Triangle", "Square"],
    },
  ]);
}

// Prompt for shape color input
function promptShapeColor() {
  return promptColor("Enter the color for the shape:");
}

// Generate the logo SVG based on user input
async function generateLogo() {
  try {
    const { text } = await promptText();
    const { color: textColor } = await promptColor(
      "Enter the color for the text:"
    );
    const { shape } = await promptShape();
    const { color: shapeColor } = await promptShapeColor();

    let shapeObj;
    switch (shape) {
      case "Circle":
        shapeObj = new Circle(shapeColor);
        break;
      case "Triangle":
        shapeObj = new Triangle(shapeColor);
        break;
      case "Square":
        shapeObj = new Square(shapeColor);
        break;
    }

    const svg = generateSVG(text, textColor, shapeObj);
    saveSVG(svg, "./examples/logo.svg");

    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

generateLogo();
