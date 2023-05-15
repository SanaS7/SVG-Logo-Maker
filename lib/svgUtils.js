const fs = require("fs");

function generateSVG(text, textColor, shape) {
  const shapeSVG = shape.getSVGMarkup();

  const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
      </svg>
    `;

  return svg;
}

// Save the SVG content to a file
function saveSVG(svg, filename) {
  fs.writeFileSync(filename, svg);
}

module.exports = {
  generateSVG,
  saveSVG,
};
