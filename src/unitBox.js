// class box, with a constructor and a display method
class UnitBox {
  constructor(x, y, z, sizeOfCells, color = "white") {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sizeOfCells = sizeOfCells;
    this.color = color;
  }
  display() {
    push();
    // move the box to x, y, z position
    translate(
      this.x*this.sizeOfCells-0.5*this.sizeOfCells, 
      this.y*this.sizeOfCells-0.5*this.sizeOfCells, 
      this.z*this.sizeOfCells-0.5*this.sizeOfCells
      );
    // set the color of the box to red
    fill(this.color);
    // draw a box on x, y, z position
    box(this.sizeOfCells);
    pop();
  }
}