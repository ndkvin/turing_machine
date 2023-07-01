'use client'

import { useEffect, useState, useRef } from 'react';
import power from '../../state/power';
import Link from 'next/link';


const styles = {
  container: {
    marginBottom: "5rem", // Add margin bottom here
  },

  tape: {
    display: "flex",
    alignItems: "center",
    width: "800px",
    height: "80px",
    border: "3px solid #eaeaea",
    borderRadius: "20px",
    overflowX: "scroll",
    overflowY: "hidden",
    background: "#ffffff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  cell: {
    minWidth: "60px",
    height: "60px",
    border: "2px solid #eaeaea",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    borderRadius: "10px",
    margin: "2px",
    transition: "background-color 0.3s ease",
    color: "#333333",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cellActive: {
    backgroundColor: "#0D6EFD",
    color: "#ffffff",
    minWidth: "60px",
    height: "60px",
    border: "1px solid #333333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0D6EFD",
    borderRadius: "10px",
    margin: "2px",
    transition: "background-color 0.3s ease",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default function Home() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [result, setResult] = useState(0)
  const [state, setState] = useState('q0')
  const [active1, setActive1] = useState(4)
  const [active2, setActive2] = useState(4)
  const [active3, setActive3] = useState(4)
  const [active4, setActive4] = useState(4)
  const [tape1, setTape1] = useState([])
  const [tape2, setTape2] = useState([])
  const [tape3, setTape3] = useState([])
  const [tape4, setTape4] = useState([])
  const [isCalculate, setIsCalculate] = useState(false)
  const [speed, setSpeed] = useState(500)
  const tapeContainer1Refs = useRef(null);
  const tapeContainer2Refs = useRef(null);
  const tapeContainer3Refs = useRef(null);
  const tapeContainer4Refs = useRef(null);
  const [trasition, setTrasition] = useState("")

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      top: 0,
      left: -70,
      behavior: 'smooth',
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      top: 0,
      left: 70,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if(state == 'q9') {
      countResult()
    }
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      turingMachine();
    }, speed);
    return () => clearTimeout(timeout);
  }, [isCalculate])

  const reset = () => {
    setActive1(4)
    setActive2(4)
    setActive3(4)
    setActive4(4)
    setTape1([])
    setTape2([]);
    setTape3([]);
    setTape4([]);
    setState('q0')
    setResult(0)
    setFirstInput(0)
    setSecondInput(0)
  }

  const createTape = () => {
    // reset to default
    setActive1(4)
    setActive2(4)
    setActive3(4)
    setActive4(4)
    setTape1(["B", "B", "B", "B"])
    setTape2(["B", "B", "B", "B", "B"]);
    setTape3(["B", "B", "B", "B", "B"]);
    setTape4(["B", "B", "B", "B", "B"]);
    setState('q0')
    setResult(0)

    for (let i = 0; i < Math.abs(firstInput); i++) {
      setTape1(prev => [...prev, "0"]);
      setTape2(prev => [...prev, "B"]);
      setTape3(prev => [...prev, "B"]);
      setTape4(prev => [...prev, "B"]);
    }
    setTape1(prev => [...prev, "1"]);
    for (let j = 0; j < Math.abs(secondInput) - 1; j++) {
      setTape1(prev => [...prev, "0"]);
      setTape2(prev => [...prev, "B"]);
      setTape3(prev => [...prev, "B"]);
      setTape4(prev => [...prev, "B"]);
    }

    if (secondInput == 0) {
      setTape1(prev => [...prev, "1"]);
      setTape2(prev => [...prev, "B"]);
      setTape3(prev => [...prev, "B"]);
      setTape4(prev => [...prev, "B"]);
    }
    for(let k = 0; k < countBlank(); k++) {
      setTape1(prev => [...prev, "B"]);
      setTape2(prev => [...prev, "B"]);
      setTape3(prev => [...prev, "B"]);
      setTape4(prev => [...prev, "B"]);
    }

    setTape1(prev => [...prev, "B", "B"]);
    setTape2(prev => [...prev, "B", "B"]);
    setTape3(prev => [...prev, "B", "B"]);
    setTape4(prev => [...prev, "B", "B"]);
  }

  const calculate = () => {
    createTape()
  }

  const turingMachine = () => {
    if (tape1.length == 0) return

    // get value from tape 1, tape 2, and tape 3
    let val1 = tape1[active1];
    let val2 = tape2[active2];
    let val3 = tape3[active3];
    let val4 = tape4[active4];
    const concat = val1 + val2 + val3+ val4;

    const next = power[state][concat];
    const oldState = state;
    //set trasition
    const newTrasition = `${concat}/${next.state[0].write}${next.state[1].write}${next.state[2].write}${next.state[3].write},${next.state[0].move}${next.state[1].move}${next.state[2].move}${next.state[3].move},(${oldState}->${next.next})`;
    setTrasition(newTrasition)

    // write new tape 1
    const newTape1 = [...tape1];
    newTape1[active1] = next.state[0].write;
    setTape1(newTape1);

    // write new tape 2
    const newTape2 = [...tape2];
    newTape2[active2] = next.state[1].write;
    setTape2(newTape2);

    // write new tape 3
    const newTape3 = [...tape3];
    newTape3[active3] = next.state[2].write;
    setTape3(newTape3);

    // write new tape 3
    const newTape4 = [...tape4];
    newTape4[active4] = next.state[3].write;
    setTape4(newTape4);

    // move tape 1
    if (next.state[0].move == "R") {
      setActive1(prev => prev + 1);
      scrollRight(tapeContainer1Refs)
    } else if (next.state[0].move == "L") {
      setActive1(prev => prev - 1);
      scrollLeft(tapeContainer1Refs)
    }

    // move tape 2
    if (next.state[1].move == "R") {
      setActive2(prev => prev + 1);
      scrollRight(tapeContainer2Refs)
    } else if (next.state[1].move == "L") {
      setActive2(prev => prev - 1);
      scrollLeft(tapeContainer2Refs)
    }

    // move tape 3
    if (next.state[2].move == "R") {
      setActive3(prev => prev + 1);
      scrollRight(tapeContainer3Refs)
    } else if (next.state[2].move == "L") {
      setActive3(prev => prev - 1);
      scrollLeft(tapeContainer3Refs)
    }

    // move tape 3
    if (next.state[3].move == "R") {
      setActive4(prev => prev + 1);
      scrollRight(tapeContainer4Refs)
    } else if (next.state[3].move == "L") {
      setActive4(prev => prev - 1);
      scrollLeft(tapeContainer4Refs)
    }
    // set state to next state
    setState(next.next);

    // when in final state count the result
    if (next.next == "q9") return
    
    setIsCalculate(!isCalculate)
  }

  const countBlank = () => {
    let count = 0;
    for (let i = 0; i < Math.abs(firstInput)**Math.abs(secondInput); i++) {
      count++;
    }

    return count;
  }

  const countResult = () => {

    let count = 0;
    for (let i = 0; i < tape2.length; i++) {
      if (tape4[i] == "0") {
        count++;
      }
    }
    setResult(count)
  }

  return (
    <>
      <div className="container" style={styles.container}>
        <Link href="/" className="btn btn-primary mt-5">
          Home
        </Link>
        <h1 className="d-flex justify-content-center mt-5">
          Power Turing Machine
        </h1>
        <div className="row mt-5">
          <div className="col-6 mx-auto">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="First Input"
                aria-label="First Input"
                value={firstInput}
                onChange={e => setFirstInput(e.target.value)}
                min={0}
              />
              <span className="input-group-text">^</span>
              <input
                type="number"
                className="form-control"
                placeholder="Second Input"
                aria-label="Second Input"
                value={secondInput}
                onChange={e => setSecondInput(e.target.value)}
                min={0}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-2 mx-auto">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={calculate}
            >
              Set State
            </button>
          </div>
          <div className="col-2 mx-auto">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={reset}
            >
              Reset
            </button>
          </div>
          <div className="col-2 mx-auto">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={turingMachine}

              // disable if state is final state
              disabled={state == "q9" ? true : false}
            >
              Simulate
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3 mx-auto">
            <label className="form-label">Trasition</label>
            <input
              type="string"
              className="form-control"
              placeholder="Trasition"
              aria-label="Trasition"
              value={trasition}
              onChange={e => setTrasition(e.target.value)}
            />
          </div>
          <div className="col-3 mx-auto">
            <label className="form-label">Result</label>
            <input
              type="number"
              className="form-control"
              placeholder="Result"
              aria-label="Result"
              value={result}
              onChange={e => setResult(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 mx-auto">
            <label className="form-label">Speed ({speed}ms)</label>
            <div className='d-flex'>
              <p>100ms</p>
              <input
                type="range"
                value={speed}
                min="100"
                max="2000"
                onChange={e => setSpeed(e.target.value)}
                className="form-range" id="customRange1"
              />
              <p>2000ms</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="mx-auto" style={styles.tape} ref={tapeContainer1Refs}>
            {
              tape1.map((tape, i) => <div key={i} style={(i == active1) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
          <div className="mx-auto" style={styles.tape} ref={tapeContainer2Refs}>
            {
              tape2.map((tape, i) => <div key={i} style={(i == active2) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
          <div className="mx-auto" style={styles.tape} ref={tapeContainer3Refs}>
            {
              tape3.map((tape, i) => <div key={i} style={(i == active3) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
          <div className="mx-auto" style={styles.tape} ref={tapeContainer4Refs}>
            {
              tape4.map((tape, i) => <div key={i} style={(i == active4) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

