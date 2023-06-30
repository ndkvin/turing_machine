const multiplication = {
  "q0": {
    "0BB": {
      next: 'q0',
      state: [
        {
          write: '0',
          move: 'R',
        },
        {
          write: '0',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "1BB": {
      next: 'q0',
      state: [
        {
          write: '1',
          move: 'R',
        },
        {
          write: '1',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "CBB": {
      next: 'q1',
      state: [
        {
          write: 'C',
          move: 'R',
        },
        {
          write: 'B',
          move: 'L',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  },
  "q1": {
    "11B": {
      next: 'q1',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: '1',
          move: 'L',
        },
        {
          write: '1',
          move: 'R',
        }
      ]
    }  ,
    "00B":{
      next: 'q1',
      state: [
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'L',
        },
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "10B":{
      next: 'q1',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: '0',
          move: 'L',
        },
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "01B":{
      next: 'q1',
      state: [
        {
          write: '0',
          move: 'S',
        },
        {
          write: '1',
          move: 'L',
        },
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "B1B":{
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: '1',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "B0B":{
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "BBB": {
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "1BB": {
      next: 'q2',
      state: [
        {
          write: '1',
          move: 'R',
        },
        {
          write: 'B',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "0BB": {
      next: 'q2',
      state: [
        {
          write: '0',
          move: 'R',
        },
        {
          write: 'B',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  },
  "q2": {
    "11B": {
      next: 'q2',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: '1',
          move: 'R',
        },
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "00B": {
      next: 'q2',
      state: [
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'R',
        },
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "10B": {
      next: 'q2',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: '0',
          move: 'R',
        },
        {
          write: '0',
          move: 'R',  
        }
      ]
    },
    "01B": {
      next: 'q2',
      state: [
        {
          write: '0',
          move: 'S',
        },
        {
          write: '1',
          move: 'R',
        },
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1BB": {
      next: 'q3',
      state: [
        {
          write: '1',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "0BB": {
      next: 'q3',
      state: [
        {
          write: '0',
          move: 'R',
        },
        { 
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "B1B": {
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: '1',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "B0B": {
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "BBB": {
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  },
  "q3": {
    "1BB": {
      next: 'q1',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "0BB": {
      next: 'q1',
      state: [
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "BBB": {
      next: 'q4',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  }
}

export default multiplication