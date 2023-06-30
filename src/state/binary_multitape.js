const binary_multitape = {
    "q0": {
        "1BB":{
            next: 'q0',
            state: [
                {
                    write : 'X',
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

        "BBB": {
            next: 'q1',
            state: [
                {
                    write : 'B',
                    move : 'S',
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
    },

    "q1": {
        "BBB": {
            next: 'q2',
            state: [
                {
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
        }
    },

    "q2": {
        "XBB": {
            next: 'q2',
            state: [
                {
                    write : 'X',
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

        "1BB": {
            next: 'q3',
            state: [
                {
                    write : 'X',
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

        "BBB": {
            next: 'q6',
            state: [
                {
                    write : 'B',
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
    },

    "q3": {
        "XBB": {
            next: 'q3',
            state: [
                {
                    write : 'X',
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
        "BBB": {
            next: 'q4',
            state: [
                {
                    write : 'B',
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

        
    },
    
    "q4": {
        "B1B": {
            next: 'q4',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '0',
                    move : 'L',
                },
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },

        "B0B": {
            next: 'q5',
            state: [
                {
                    write : 'B',
                    move : 'S',
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

        "BBB": {
            next: 'q5',
            state: [
                {
                    write : 'B',
                    move : 'S',
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
        }

    },

    "q5": {
        "B0B": {
            next: 'q5',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '0',
                    move : 'R',
                },
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },

        "BBB": {
            next: 'q2',
            state: [
                {
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
    },

    "q6": {
        "B1B":{
            next: 'q6',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '1',
                    move : 'L',
                },
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },

        "B0B":{
            next: 'q6',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '0',
                    move : 'L',
                },
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },

        "BBB":{
            next: 'q7',
            state: [
                {
                    write : 'B',
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
        },
    },

    "q7": {
        "B0B": {
            next: 'q7',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '0',
                    move : 'R',
                },
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },
        "B1B": {
            next: 'q8',
            state: [
                {
                    write : 'B',
                    move : 'S',
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
        "BBB": {
            next: 'q9',
            state: [
                {
                    write : 'B',
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

    "q8": {
        "B0B": {
            next: 'q8',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
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
        "B1B": {
            next: 'q8',
            state: [
                {
                    write : 'B',
                    move : 'S',
                },
                {
                    write : '1',
                    move : 'R',
                },
                {
                    write : '1',
                    move : 'R',
                }
            ]
        },
        "BBB": {
            next: 'q9',
            state: [
                {
                    write : 'B',
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

}

export default binary_multitape;