const power = {
  "q0": {
    "0BBB": {
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
          write: '0',
          move: 'R',
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "1BBB": {
      next: 'q1',
      state: [
        {
          write: '1',
          move: 'R',
        },
        {
          write: 'B',
          move: 'L',
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
    "000B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
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
    "B00B": {
      next: 'q3',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
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
    "1BBB": {
      next: 'q9',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'B',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        }
      ]
    },
    "100B": {
      next: 'q9',
      state: [
        {
          write: '1',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        }
      ]
    },
    "BBBB": {
      next: 'q9',
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
        },
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "0BBB": {
      next: 'q9',
      state: [
        {
          write: '0',
          move: 'S',
        },
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
  "q2": {
    "XX0B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'L',
        },
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "XXBB": {
      next: 'q4',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'S',
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
  "q3": {
    "X00B": {
      next: 'q3',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
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
    "X0BB": {
      next: 'q9',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
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
  "q4": {
    "XXXB": {
      next: 'q4',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'S',
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
    "XXBB": {
      next: 'q5',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'L',
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
  "q5": {
    "X00B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
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
    "XB0B": {
      next: 'q6',
      state: [
        {
          write: 'X',
          move: 'R',
        },
        {
          write: 'B',
          move: 'R',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
        }
      ]
    },
    "XX0B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
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
    }
  },
  "q6": {
    "0X00": {
      next: 'q7',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        }
      ]
    },
    "BX00": {
      next: 'q9',
      state: [
        {
          write: 'B',
          move: 'S',
        },
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: '0',
          move: 'S',
        }
      ]
    }
  },
  "q7": {
    "XX00": {
      next: 'q7',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: '0',
          move: 'R',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
        }
      ]
    },
    "XB00": {
      next: 'q7',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
          move: 'R',
        },
        {
          write: '0',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
        }
      ]
    },
    "XB0B": {
      next: 'q8',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'B',
          move: 'L',
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
    }
  },
  "q8": {
    "X00B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
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
    "XX0B": {
      next: 'q2',
      state: [
        {
          write: 'X',
          move: 'S',
        },
        {
          write: 'X',
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
    }
  }
}

export default power