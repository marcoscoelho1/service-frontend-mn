class Stove {
  constructor(color, dimensions, brand) {
    this.color = color;
    this.dimensions = dimensions;
    this.brand = brand;
    this.burners = 4;
    this.oven = new Oven();
    this.igniters = [
      new Igniter("red"),
      new Igniter("blue"),
      new Igniter("green"),
      new Igniter("yellow"),
    ];
    this.lightButton = new LightButton();
  }
}

class Oven {
  constructor() {
    this.light = new Light();
    this.door = new OvenDoor();
  }
}

class Light {
  constructor() {
    this.state = false;
  }

  turnOn() {
    this.state = true;
    console.log("Light: On");
  }

  turnOff() {
    this.state = false;
    console.log("Light: Off");
  }
}

class OvenDoor {
  constructor() {
    this.glass = {
      dimensions: "25x35cm",
    };
  }
}

class Igniter {
  constructor(color) {
    this.color = color;
  }
}

class LightButton {
  constructor() {
    this.light = new Light();
  }

  press() {
    if (this.light.state) {
      this.light.turnOff();
    } else {
      this.light.turnOn();
    }
  }
}

export default Stove;
