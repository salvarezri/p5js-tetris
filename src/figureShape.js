class FigureShape {
  constructor(figure = 1, initialPosition = [0, 0, 0]) {
    // deep copy of the matrix
    this.matrix = JSON.parse(JSON.stringify(SHAPES[figure].matrix));
    this.color = SHAPES[figure].color;
    this.position = initialPosition;
    this.cubes = [];
    this.asignCubes();
    
  }
  asignCubes(){
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
    let M = this.matrix;
    const depth = M.length;
    const height = M[0].length;
    const width = M[0][0].length;
    let rotated = [];
    console.log("depth: " + depth + " height: " + height + " width: " + width);
    console.log(M);
  }

  display() {
    // console.log(this.cubes.length);
    for (let i = 0; i < this.cubes.length; i++) {
      this.cubes[i].display();
    }
  }
  makeShape(shape){
    // make a 3D matrix of zeros with the given shape [Z,Y,X]
    let M = []
    for (let i = 0; i < shape[0]; i++) {
      let layer = [];
      for (let j = 0; j < shape[1]; j++) {
        let row = [];
        for (let k = 0; k < shape[2]; k++) {
          row.push(0);
        }
        layer.push(row);
      }
      M.push(layer);
    }
    return M;
  }

  rotateAxisMatrix(M, axis) {
    // axis 0 -> z , 1 -> y , 2 -> x
    const Z = M.length;
    const Y = M[0].length;
    const X = M[0][0].length;
    // make an empty matrix of the new dimentions
    let newDimentions = [Z, Y, X];
    let rotated = [];
    // diferent dimentions according to the axis
    switch (axis) {
      case 0:
        newDimentions = [Y, Z, X];
        rotated = this.makeShape(newDimentions);
        break;
      case 1:
        newDimentions = [X, Y, Z];
        rotated = this.makeShape(newDimentions);
        break;
      case 2:
        newDimentions = [Z, X, Y];
        rotated = this.makeShape(newDimentions);
        break;
      default:
        break;
    }

    console.log("depth: " + Z + " height: " + height + " width: " + width);
    console.log(M);
    console.log(rotated);
    for (let i = 0; i < Z; i++) {
      for (let j = 0; j < Y; j++) {
        for (let k = 0; k < X; k++) {
          // asign diferent elements according to the axis
          switch (axis) {
            case 0:
              rotated[Y-1-j][i][k] = this.matrix[i][j][k];
              break;
            case 1:
              rotated[X-1-k][j][i] = this.matrix[i][j][k];
              break;
            case 2:
              rotated[i][k][Y-1-j] = this.matrix[i][j][k];
              break;
          
            default:
              rotated[i][j][k] = this.matrix[i][j][k]
          }
        }
      }
    }
    return rotated;
  }
  
  rotateZ(){
    this.matrix =  this.rotateAxisMatrix(this.matrix, 0);
    this.asignCubes();
  }

  rotateY() {
    this.matrix = this.rotateAxisMatrix(this.matrix, 1);
    this.asignCubes();
  }

  rotateX() {
    this.matrix = this.rotateAxisMatrix(this.matrix, 2);
    this.asignCubes();
  }

}