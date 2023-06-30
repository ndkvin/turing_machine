const squareroot = {
  "q0" : {
    "1BBBB": {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : '1',
          move : 'R',
        }
      ]
    }
  },
  "q1" : {
    "111BB": {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        }, 
        {
          write : '1',
          move : 'L',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }, 
    "11BBB": {
      next: 'q2',
      state: [
        {
          write : '1',
          move : 'S',
        }, {
          write : '1',
          move : 'L',
        }, {
          write : 'B',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "1B1BB": {
      next: 'q7',
      state: [
        {
          write : '1',
          move : 'S',
        }, 
        {
          write : 'B',
          move : 'R',
        }, 
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }, 
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  },
  "q2" : {
    "11BBB": {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'S',
        }, 
        {
          write : '1',
          move : 'L',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'S',
        }, 
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "111BB": {
      next: 'q2',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "1B1BB": {
      next: 'q3',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'R',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  },
  "q3" : {
    "111BB": {
      next: 'q3',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "1BBBB": {
      next: 'q4',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
  },
  "q4" : {
    "1111B": {
      next: 'q4',
      state: [
        {
          write : '1',
          move : 'R',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "B11BB": {
      next: 'q5',
      state: [
        {
          write : 'B',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "B111B": {
      "next": 'q8',
      state: [
        {
          write : 'B',
          move : 'L',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'L',
        }
      ]
    },
    "111BB": {
      next: 'q6',
      state: [
        {
          write : '1',
          move : 'L',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  },
  "q6" : {
    "111BB": {
      next: 'q6',
      state: [
        {
          write : '1',
          move : 'L',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "B11BB": {
      next: 'q0',
      state: [
        {
          write : 'B',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  },
  "q7" : {
    "111BB": {
      next: 'q7',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'R',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    },
    "1B1BB": {
      next: 'q4',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'L',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  },
  "q8" : {
    "11111": {
      next: 'q5',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : '1',
          move : 'S',
        },
        {
          write : 'B',
          move : 'S',
        }
      ]
    }
  }
}

export default squareroot