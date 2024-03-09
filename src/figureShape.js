class FigureShape {
  constructor(figure = 1, initialPosition = [0, 0, 0]) {
    // deep copy of the matrix
    this.matrix = JSON.parse(JSON.stringify(SHAPES[figure].matrix));
    this.color = SHAPES[figure].color;
    this.position = initialPosition;
    this.cubes = [];
  }
  initializeCubes(){
    this.cubes = [];
    for (let z = 0; z < this.matrix.length; z++) {
      for (let y = 0; y < this.matrix[z].length; y++) {
        for (let x = 0; x < this.matrix[z][y].length; x++) {
          if (this.matrix[z][y][x] === 1) {
            this.cubes.push(new UnitBox(x + this.position[0], y + this.position[1], z + this.position[2], SIZE, this.color));
          }
        }
      }
    }
  }

  display() {
    // console.log(this.cubes.length);
    for (let i = 0; i < this.cubes.length; i++) {
      this.cubes[i].display();
    }
  }

  rotateX() {
    const depth = this.matrix.length;
    const height = this.matrix[0].length;
    const width = this.matrix[0][0].length;
    let rotated = [];

    for (let x = 0; x < width; x++) {
      let layer = [];
      for (let z = depth - 1; z >= 0; z--) {
        let row = [];
        for (let y = 0; y < height; y++) {
          row.push(this.matrix[z][y][x]);
        }
        layer.push(row);
      }
      rotated.push(layer);
    }

    this.matrix = rotated.map(layer => layer.reverse());
  }

  rotateY() {
    const depth = this.matrix.length;
    const height = this.matrix[0].length;
    const width = this.matrix[0][0].length;
    let rotated = [];

    for (let y = 0; y < height; y++) {
      let layer = [];
      for (let x = 0; x < width; x++) {
        let row = [];
        for (let z = 0; z < depth; z++) {
          row.push(this.matrix[z][y][width - 1 - x]);
        }
        layer.push(row);
      }
      rotated.push(layer);
    }

    this.matrix =  rotated;
  }

  rotateZ() {
    const depth = this.matrix.length;
    const height = this.matrix[0].length;
    const width = this.matrix[0][0].length;
    let rotated = [];

    for (let z = 0; z < depth; z++) {
      let layer = [];
      for (let x = 0; x < width; x++) {
        let row = [];
        for (let y = height - 1; y >= 0; y--) {
          row.push(this.matrix[z][y][x]);
        }
        layer.push(row);
      }
      rotated.push(layer);
    }

    this.matrix =  rotated;
  }

}