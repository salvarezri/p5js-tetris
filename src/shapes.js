const SHAPES={
  // 2x2x2 figures
  1:{
    color:"red",
    matrix:[
      [
        [1, 1],
        [1, 1]
      ],
      [
        [0, 0],
        [0, 0]
      ],
    ]
  },
  2:{
    color:"green",
    matrix:[
      [
        [1, 1],
        [1, 0]
      ],
      [
        [1, 0],
        [0, 0]
      ],
    ]
  },
  3:{
    color:"blue",
    matrix:[
      [
        [1, 1],
        [1, 0]
      ],
      [
        [0, 0],
        [1, 0]
      ],
    ]
  },
  // 3x3x3 figures
  4:{
    color:"cyan",
    matrix:[
      [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ]
  },
  5:{
    color:"yellow",
    matrix:[
      [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ]
  },
  6:{
    color:"magenta",
    matrix:[
      [
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ]
  },
  7:{
    color:"orange",
    matrix:[
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ]
    ]
  },
  // 4x4x4 figures
  8:{
    color:"brown",
    matrix:[
      [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    ]
  }
}
const NUMBER_OF_SHAPES = 8