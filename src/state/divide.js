const divide = {
    "q0":{
        "0":{
            next: 'q23',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q16',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q1":{
        "0":{
            next: 'q2',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q2":{
        "0":{
            next: 'q2',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q3',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        }
    },
    "q3":{
        "0":{
            next: 'q4',
            state: [
                {
                    write: 'x',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q3',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        },
        "x":{
            next: 'q3',
            state: [
                {
                    write: 'x',
                    move: 'R',
                }
            ]
        }
    },
    "q4":{
        "0":{
            next: 'q5',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q10',
            state: [
                {
                    write: '1',
                    move: 'R',
                }
            ]
        }
    },
    "q5":{
        "0":{
            next: 'q5',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q6',
            state: [
                {
                    write: '1',
                    move: 'L',
                }
            ]
        }
    },
    "q6":{
        "0":{
            next: 'q6',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "x":{
            next: 'q7',
            state: [
                {
                    write: 'x',
                    move: 'L',
                }
            ]
        }
    },
    "q7":{
        "x":{
            next: 'q7',
            state: [
                {
                    write: 'x',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q8',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q8":{
        "C":{
            next: 'q8',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        },
        "0":{
            next: 'q9',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "B":{
            next: 'q13',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q9":{
        "0":{
            next: 'q9',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "B":{
            next: 'q1',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q10":{
        "0":{
            next: 'q10',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q10',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        },
        "B":{
            next: 'q11',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        }
    },
    "q11":{
        "0":{
            next: 'q11',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q11',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q12',
            state: [
                {
                    write: '1',
                    move: 'L',
                }
            ]
        }
    },
    "q12":{
        "x":{
            next: 'q12',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q8',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q13":{
        "C":{
            next: 'q14',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q14":{
        "C":{
            next: 'q14',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        },
        "0":{
            next: 'q14',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        },
        "x":{
            next: 'q14',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q15',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q15":{
        "0":{
            next: 'q15',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q15',
            state: [
                {
                    write: '1',
                    move: 'R',
                }
            ]
        },
        "B":{
            next: 'qa',
            state: [
                {
                    write: 'B',
                    move: 'S',
                }
            ]
        }
    },
    "q16":{
        "0":{
            next: 'q16',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q17',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        }
    },
    "q17":{
        "0":{
            next: 'q18',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q22',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q18":{
        "0":{
            next: 'q18',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q19',
            state: [
                {
                    write: '1',
                    move: 'R',
                }
            ]
        }
    },
    "q19":{
        "B":{
            next: 'q20',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q20":{
        "0":{
            next: 'q21',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q21',
            state: [
                {
                    write: '',
                    move: '',
                }
            ]
        },
        "C":{
            next: 'q21',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q21":{
        "0":{
            next: 'q21',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q21',
            state: [
                {
                    write: '1',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q21',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        },
        "B":{
            next: 'q1',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q22":{
        "C":{
            next: 'q22',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        },
        "0":{
            next: 'q21',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        }
    },
    "q23":{
        "0":{
            next: 'q23',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "C":{
            next: 'q24',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        }
    },
    "q24":{
        "0":{
            next: 'q29',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q25',
            state: [
                {
                    write: 'C',
                    move: 'R',
                }
            ]
        }
    },
    "q25":{
        "0":{
            next: 'q25',
            state: [
                {
                    write: '0',
                    move: 'R',
                }
            ]
        },
        "1":{
            next: 'q26',
            state: [
                {
                    write: '1',
                    move: 'R',
                }
            ]
        }
    },
    "q26":{
        "B":{
            next: 'q27',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q27":{
        "0":{
            next: 'q28',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q28',
            state: [
                {
                    write: '1',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q28',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        }
    },
    "q28":{
        "0":{
            next: 'q28',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        },
        "1":{
            next: 'q28',
            state: [
                {
                    write: '1',
                    move: 'L',
                }
            ]
        },
        "C":{
            next: 'q28',
            state: [
                {
                    write: 'C',
                    move: 'L',
                }
            ]
        },
        "B":{
            next: 'q1',
            state: [
                {
                    write: 'B',
                    move: 'R',
                }
            ]
        }
    },
    "q29":{
        "0":{
            next: 'q28',
            state: [
                {
                    write: '0',
                    move: 'L',
                }
            ]
        }
    },
    "qa":{
        "0":{
            next: 'qa',
            state: [
                {
                    write: 'B',
                    move: 'S',
                }
            ]
        },
        "1":{
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
