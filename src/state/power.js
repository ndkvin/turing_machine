const power = {
  "q0": {
    "0": {
      next: 'q1',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q22',
      state: [
        {
          write: 'B',
          move: 'R',
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
    "1": {
      next: 'q2',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    }
  },
  "q2": {
    "B": {
      next: 'q2',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q7',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    },
    "0": {
      next: 'q3',
      state: [
        {
          write: 'B',
          move: 'R',
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
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q4',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    }
  },
  "q4": {
    "X": {
      next: 'q4',
      state: [
        {
          write: 'X',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q5',
      state: [
        {
          write: '0',
          move: 'L',
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
  "q5": {
    "0": {
      next: 'q5',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q6',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q6": {
    "0": {
      next: 'q6',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q2',
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
      next: 'q7',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "X": {
      next: 'q7',
      state: [
        {
          write: 'X',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q8',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q18',
      state: [
        {
          write: 'X',
          move: 'L',
        }
      ]
    }
  },
  "q8": {
    "0": {
      next: 'q8',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q9',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q9": {
    "B": {
      next: 'q9',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q10',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    },
  },
  "q10": {
    "0": {
      next: 'q0',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q0',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q11": {
    "B": {
      next: 'q11',
      state: [
        {
          write: 'B',
          move: 'L',
        }
      ]
    },
    "0": {
      next: 'q12',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "X": {
      next: 'q15',
      state: [
        {
          write: 'X',
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
    }
  },
  "q12": {
    "B": {
      next: 'q12',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q13',
      state: [
        {
          write: '1',
          move: 'R',
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
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q14',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    }
  },
  "q14": {
    "0": {
      next: 'q14',
      state: [
        {
          write: '0',
          move: 'L',
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
  "q15": {
    "B": {
      next: 'q15',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q16',
      state: [
        {
          write: '1',
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
    "X": {
      next: 'q16',
      state: [
        {
          write: 'X',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q17',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q17": {
    "0": {
      next: 'q17',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q2',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q18": {
    "0": {
      next: 'q18',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    },
    "X": {
      next: 'q18',
      state: [
        {
          write: 'X',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q19',
      state: [
        {
          write: '1',
          move: 'R',
        }
      ]
    }
  },
  "q19": {
    "0": {
      next: 'q19',
      state: [
        {
          write: 'X',
          move: 'R',
        }
      ]
    },
    "X": {
      next: 'q20',
      state: [
        {
          write: 'X',
          move: 'R',
        }
      ]
    }
  },
  "q20": {
    "0": {
      next: 'q20',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q21',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    }
  },
  "q21": {
    "0": {
      next: 'q21',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "X": {
      next: 'q21',
      state: [
        {
          write: 'X',
          move: 'L',
        }
      ]
    },
    "1": {
      next: 'q21',
      state: [
        {
          write: '1',
          move: 'L',
        }
      ]
    },
    "B": {
      next: 'q22',
      state: [
        {
          write: '0',
          move: 'L',
        }
      ]
    }
  },
  "q22": {
    "0": {
      next: 'q22',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q23',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q23": {
    "X": {
      next: 'q23',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    },
    "B": {
      next: 'q25',
      state: [
        {
          write: '0',
          move: 'S',
        }
      ]
    },
    "0": {
      next: 'q24',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q24',
      state: [
        {
          write: 'B',
          move: 'R',
        }
      ]
    }
  },
  "q24": {
    "0": {
      next: 'q24',
      state: [
        {
          write: '0',
          move: 'R',
        }
      ]
    },
    "1": {
      next: 'q25',
      state: [
        {
          write: 'B',
          move: 'S',
        }
      ]
    }
  }
}

export default power