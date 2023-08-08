class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color){
    this.color = color
  }

  render() {
    // Default implementation
    return "";
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `
        <polygon points="150,20 280,180 20,180" fill="${this.color}" />
      `;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `
        <rect x="40" y="40" width="220" height="120" fill="${this.color}" />
      `;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
