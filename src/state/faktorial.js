const faktorial = {
  "q0": {
    "0": {
      next: 'q1',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    },
    "C": {
      next: 'q4',
      state: [
        {
          write: 'C',
          move: 'L',
        }
      ]
    }
  },
  "q1": {
    "0": {
      next: 'q1',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "C": {
      next: 'q2',
      state: [
        {
          write: 'C',
          move: 'R',
        }
      ]
    }
  },
  "q2": {
    "0": {
      next: 'q2',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q3',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    }
  },
  "q3": {
    "0": {
      next: 'q3',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "C": {
      next: 'q3',
      state: [
        {
          write: 'C',
          move: 'L',
        }
      ]
    },
    "x": {
      next: 'q0',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    }
  },
  "q4": {
    "x": {
      next: 'q4',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q5',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q5": {
    "0": {
      next: 'q6',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "C": {
      next: 'qa',
      state: [
        {
          write: '0',
          move: 'S',
        }
      ]
    }
  },
  "q6": {
    "0": {
      next: 'q7',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    },
    "C": {
      next: 'q20',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q7": {
    "0": {
      next: 'q8',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    },
    "C": {
      next: 'q18',
      state: [
        {
          write: 'C',
          move: 'L',
        }
      ]
    }
  },
  "q8": {
    "C": {
      next: 'q9',
      state: [
        {
          write: 'C',
          move: 'R',
        }
      ]
    },
    "0": {
      next: 'q8',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "y": {
      next: 'q14',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    }
  },
  "q9": {
    "0": {
      next: 'q10',
      state: [
        {
          write: 'y',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q12',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q10": {
    "0": {
      next: 'q10',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q10',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q11',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q11": {
    "0": {
      next: 'q11',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "y": {
      next: 'q9',
      state: [
        {
          write: 'y',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q11',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q12": {
    "y": {
      next: 'q12',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "C": {
      next: 'q13',
      state: [
        {
          write: 'C',
          move: 'L',
        }
      ]
    }
  },
  "q13": {
    "0": {
      next: 'q13',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "x": {
      next: 'q14',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    }
  },
  "q14": {
    "C": {
      next: 'q15',
      state: [
        {
          write: 'C',
          move: 'R',
        }
      ]
    },
    "0": {
      next: 'q8',
      state: [
        {
          write: 'x',
          move: 'R',
        }
      ]
    }
  },
  "q15": {
    "0": {
      next: 'q15',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q15',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q16',
      state: [
        {
          write: 'B',
          move: 'L',
        }
      ]
    }
  },
  "q16": {
    "0": {
      next: 'q16',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q16',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "C": {
      next: 'q17',
      state: [
        {
          write: 'C',
          move: 'L',
        }
      ]
    }
  },
  "q17": {
    "x": {
      next: 'q17',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q5',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q18": {
    "x": {
      next: 'q19',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q19": {
    "C": {
      next: 'qa',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q20": {
    "0": {
      next: 'qa',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    }
  },
  "qa": {
    "0": {
      next: 'qa',
      state: [
        {
          write: 'B',
          move: 'S',
        }
      ]
    },
    "1": {
      next: 'qa',
      state: [
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  }
}

export default faktorial;