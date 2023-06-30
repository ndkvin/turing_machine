const binary_singletrack = {
    "q0" : {
        "X" : {
            next : 'q0',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },

        "0" : {
            next : 'q0',
            state : [
                {
                    write : '0',
                    move : 'R',
                }
            ]
        },

        "1" : {
            next : 'q1',
            state : [
                {
                    write : 'X',
                    move : 'L',
                }
            ]
        },

        "B" : {
            next : 'q2',
            state : [
                {
                    write : 'B',
                    move : 'L',
                }
            ]
        },
    },

    "q1" : {
        "1" : {
            next : 'q1',
            state : [
                {
                    write : '0',
                    move : 'L',
                }
            ]
        },

        "X" : {
            next : 'q1',
            state : [
                {
                    write : 'X',
                    move : 'L',
                }
            ]
        },

        "B" : {
            next : 'q0',
            state : [
                {
                    write : '1',
                    move : 'R',
                }
            ]
        },

        "0" : {
            next : 'q0',
            state : [
                {
                    write : '1',
                    move : 'R',
                }
            ]
        },
    },

    "q2" : {
        "X" : {
            next : 'q2',
            state : [
                {
                    write : 'B',
                    move : 'L',
                }
            ]
        },

        "1" : {
            next : 'q3',
            state : [
                {
                    write : '1',
                    move : 'R',
                }
            ]
        },

        "0" : {
            next : 'q3',
            state : [
                {
                    write : '0',
                    move : 'R',
                }
            ]
        },
    },

    "q3" : {
        "B" : {
            next : 'q4',
            state : [
                {
                    write : 'C',
                    move : 'L',
                }
            ]
        },
    },

    "q4" : {
        "0" : {
            next : 'q4',
            state : [
                {
                    write : '0',
                    move : 'L',
                }
            ]
        },

        "1" : {
            next : 'q4',
            state : [
                {
                    write : '1',
                    move : 'L',
                }
            ]
        },

        "B" : {
            next : 'q5',
            state : [
                {
                    write : 'B',
                    move : 'R',
                }
            ]
        },
    },

    "q5" : {
        "0" : {
            next : 'q5',
            state : [
                {
                    write : '0',
                    move : 'R',
                }
            ]
        },

        "1" : {
            next : 'q6',
            state : [
                {
                    write : 'B',
                    move : 'R',
                }
            ]
        },
    },
    
    "q6" : {
        "C" : {
            next : 'q10',
            state : [
                {
                    write : 'B',
                    move : 'L',
                }
            ]
        },

        "1" : {
            next : 'q7',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },

        "0" : {
            next : 'q7',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },
    },

    "q7" : {
        "C" : {
            next : 'q7',
            state : [
                {
                    write : 'C',
                    move : 'R',
                }
            ]
        },

        "1" : {
            next : 'q7',
            state : [
                {
                    write : '1',
                    move : 'R',
                }
            ]
        },

        "0" : {
            next : 'q7',
            state : [
                {
                    write : '0',
                    move : 'R',
                }
            ]
        },

        "B" : {
            next : 'q8',
            state : [
                {
                    write : '1',
                    move : 'L',
                }
            ]
        },
    },

    "q8" : {
        "C" : {
            next : 'q8',
            state : [
                {
                    write : 'C',
                    move : 'L',
                }
            ]
        },

        "1" : {
            next : 'q8',
            state : [
                {
                    write : '1',
                    move : 'L',
                }
            ]
        },

        "0" : {
            next : 'q8',
            state : [
                {
                    write : '0',
                    move : 'L',
                }
            ]
        },

        "X" : {
            next : 'q9',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },
    },

    "q9" : {
        "0" : {
            next : 'q7',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },

        "1" : {
            next : 'q7',
            state : [
                {
                    write : 'X',
                    move : 'R',
                }
            ]
        },

        "C" : {
            next : 'q10',
            state : [
                {
                    write : 'B',
                    move : 'L',
                }
            ]
        },
    },

    "q10" : {
        "X" : {
            next : 'q10',
            state : [
                {
                    write : 'B',
                    move : 'L',
                }
            ]
        },
        "B" : {
            next : 'q11',
            state : [
                {
                    write : 'B',
                    move : 'S',
                }
            ]
        },
    },

}

export default binary_singletrack;