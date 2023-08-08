const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle getSVGMarkup should return correct SVG markup', () => {
    const triangle = new Triangle('blue');
    expect(triangle.getSVGMarkup().trim()).toBe(
      '<polygon points="150,20 280,180 20,180" fill="blue" />'.trim()
    );
  });

  test('Circle getSVGMarkup should return correct SVG markup', () => {
    const circle = new Circle('red');
    expect(circle.getSVGMarkup().trim()).toBe(
      '<circle cx="150" cy="100" r="80" fill="red"/>'.trim()
    );
  });

  test('Square getSVGMarkup should return correct SVG markup', () => {
    const square = new Square('green');
    expect(square.getSVGMarkup().trim()).toBe(
      '<rect x="40" y="40" width="220" height="120" fill="green" />'.trim()
    );
  });

  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.getSVGMarkup().trim()).toEqual('<polygon points="150,20 280,180 20,180" fill="blue" />');

  test('Shapes should correctly handle different colors', () => {
    const triangle = new Triangle('blue');
    const circle = new Circle('red');
    const square = new Square('green');

    expect(triangle.color).toBe('blue');
    expect(circle.color).toBe('red');
    expect(square.color).toBe('green');
  });
});
