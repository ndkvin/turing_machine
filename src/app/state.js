const addition = {
  "q0" : {
    "0B": {
      next: 'q0',
      state: [
        {
          write : '0',
          move : 'R',
        },
        {
          write : '0',
          move : 'R',
        }
      ]
    },
    "1B": {
      next: 'q0',
      state: [
        {
          write : '1',
          move : 'R',
        }, {
          write : '1',
          move : 'R',
        }
      ]
    },
    "CB": {
      next: 'q1',
      state: [
        {
          write : 'C',
          move : 'R',
        }, {
          write : 'B',
          move : 'L',
        }
      ]
    },
  },
  "q1" : {
    "11" : {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'R',
        }, 
        { 
          write : 'B',
          move : 'L',
        }
      ]
    },
    "1B" : {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'R',
        },
        {
          write : '0',
          move : 'R',
        }
      ]
    },
    "00": {
      next: 'q1',
      state: [
        {
          write : '0',
          move : 'R',
        },
        {
          write : 'B',
          move : 'L',
        }
      ]
    },
    "0B": {
      next: 'q1',
      state: [
        {
          write : '0',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        }
      ]
    },
    "01": {
      next: 'q1',
      state: [
        {
          write : '0',
          move : 'S',
        },
        {
          write : '1',
          move : 'R',
        }
      ]
    },
    "10": {
      next: 'q1',
      state: [
        {
          write : '1',
          move : 'S',
        },
        {
          write : '0',
          move : 'R',
        }
      ]
    },
    "BB": {
      next: 'q2',
      state: [
        {
          write : 'B',
          move : 'R',
        },
        {
          write : 'B',
          move : 'R',
        }
      ]
    },
    "B0": {
      next: 'q2',
      state: [
        {
          write : 'B',
          move : 'R',
        },
        {
          write : '0',
          move : 'R',
        }
      ]
    },
    "B1": {
      next: 'q2',
      state: [
        {
          write : 'B',
          move : 'R',
        },
        {
          write : '1',
          move : 'R',
        }
      ]
    }
  },
}

export default addition;