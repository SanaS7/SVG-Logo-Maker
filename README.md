# SVG Logo Maker

This code project will make a SVG logo for your logo project and it is easy to use and access and can make professional Text based LOGO using this application.

The Logo Generator is a command-line application that allows you to generate simple logos for your projects. It provides a user-friendly interface for entering text, choosing colors, and selecting shapes to create personalized logos without the need for a graphic designer.

<br>

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/logo-generator.git

2. Navigate the Project Directory
    
    ```bash
    cd svg-logo-generator

2. Install the dependencies

   ```bash
   npm install

<br>

## Usage

To generate a logo, run the following command:  <code>node index.js</code>

The application will prompt you to enter the desired text, text color, shape, and shape color for the logo. Simply follow the prompts and enter the corresponding information.

Once you have provided all the inputs, the application will generate an SVG file named <code>logo.svg</code> in the <code>examples/</code> directory. You can open this file in a web browser to view your logo.

<br>

## Screenshots

![Logo](https://raw.githubusercontent.com/SanaS7/SVG-Logo-Maker/tree/main/examples/logo.svg)


<br>

## Directory structure

The project directory has the following structure:

    ```bash   
    .
    ├── examples/            # Example SVG file(s) created with the app
    ├── lib/                 # Folder for classes and utilities
    │   ├── shapes.js        # Exports `Triangle`, `Circle`, and `Square` classes
    │   ├── shapes.test.js   # Jest tests for shapes
    │   └── svgUtils.js      # Utility functions for SVG generation and saving
    ├── .gitignore           # Indicates which folders and files Git should ignore
    ├── index.js             # Runs the application using imports from lib/
    ├── package.json
    └── README.md            # Project description, setup, and usage instructions
    ```
<br>

## Custimization

If you want to customize the shapes or add new shapes, you can modify the <code>lib/shapes.js</code> file. Each shape class (<code>Triangle, Circle, Square</code>) extends the Shape class and includes a getSVGMarkup method that returns the SVG markup specific to that shape. You can update the SVG markup in the getSVGMarkup method to define the shape's appearance.

<br>

## Examples

You can find some example SVG files generated using the Logo Generator in the <code>examples/</code> directory. Feel free to check them out for reference or inspiration.

<br>

## Contributing

Contributions are welcome! If you have any ideas, bug reports, or feature requests, please open an issue or submit a pull request on the project's GitHub repository <a href='https://github.com/SanaS7/SVG-Logo-Maker'>Sana97</a>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project is covered under the MIT License license.

