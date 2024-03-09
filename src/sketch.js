
const SIZE = 20;
const MESH_LEN_X = 5;

const MESH_LEN_Y = 5;

const MESH_LEN_Z = 5;

let points = []
let myFigure 
let myUnitBox 
function setup() {
  createCanvas(560, 390, WEBGL);
  definePoints(MESH_LEN_X, MESH_LEN_Y, MESH_LEN_Z, SIZE, points);
  myFigure = new FigureShape(1, [0, 0, 0]);
  myUnitBox = new UnitBox(0, 0, 0, SIZE);
  //myFigure.rotateY();
  //myFigure.rotateY();
  //myFigure.rotateY();
  //myFigure.rotateY();
}

function draw() {
  background(50);
  orbitControl();
  scale(1, -1, 1);
  //translate(-width/2 + 50 , -height/2 +40);
  drawMesh(MESH_LEN_X, MESH_LEN_Y, MESH_LEN_Z, SIZE);
  drawPoints(points);
  myFigure.initializeCubes();
  myFigure.display();
  // myUnitBox.display();
}

function axes() {
  push();

  // X-Axis
  strokeWeight(4);
  //
  stroke(255, 0, 0);
  fill("red");
  line(0, 0, 0, size, 0, 0);//horizontal red X-axis line

  // Y-Axis
  stroke(0, 255, 0);
  fill("green");
  line(0, 0, 0, 0, size, 0);//vertical green Y-axis line

  // Z-Axis
  stroke(0, 0, 255);
  fill("blue");
  line(0, 0, 0, 0, 0, size);//perpendicular blue Z-axis line

  pop();
}


function drawMesh(x, y, z, sizeOfCells) {
  push();
  // make line red
  stroke("red");
  // draw vertical lines plane x=0
  for (let i = 0; i < x + 1; i++) {
    line(i * sizeOfCells, 0, 0, i * sizeOfCells, y * sizeOfCells, 0);
  }
  // draw horizontal lines plane x=0
  for (let i = 0; i < y + 1; i++) {
    line(0, i * sizeOfCells, 0, x * sizeOfCells, i * sizeOfCells, 0);
  }

  stroke("green");
  // draw vertical lines plane y=0
  for (let i = 0; i < x + 1; i++) {
    line(i * sizeOfCells, 0, 0, i * sizeOfCells, 0, z * sizeOfCells);
  }
  // draw horizontal lines plane y=0
  for (let i = 0; i < z + 1; i++) {
    line(0, 0, i * sizeOfCells, x * sizeOfCells, 0, i * sizeOfCells);
  }

  stroke("blue");
  // draw vertical lines plane z=0
  for (let i = 0; i < y + 1; i++) {
    line(0, i * sizeOfCells, 0, 0, i * sizeOfCells, z * sizeOfCells);
  }
  // draw horizontal lines plane z=0
  for (let i = 0; i < z + 1; i++) {
    line(0, 0, i * sizeOfCells, 0, y * sizeOfCells, i * sizeOfCells);
  }
  pop();
}

function definePoints(x, y, z, sizeOfCells, points) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        points.push(createVector(
          i * sizeOfCells + sizeOfCells / 2,
          j * sizeOfCells + sizeOfCells / 2,
          k * sizeOfCells + sizeOfCells / 2
        )
        );
      }
    }
  }
}
function drawPoints(points) {
  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y, points[i].z);
  }
}