'use client'

import { useEffect, useRef, useState } from 'react';
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
  const [firstInput, setFirstInput] = useState(0)
  const [secondInput, setSecondInput] = useState(0)
  const [result, setResult] = useState(0)
  const [state, setState] = useState('q0')
  const [active1, setActive1] = useState(2)
  const [tape1, setTape1] = useState([])
  const [isCalculate, setIsCalculate] = useState(false)
  const [speed, setSpeed] = useState(500)
  const tapeContainer1Refs = useRef(null);
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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     turingMachine();
  //   }, speed);
  //   return () => clearTimeout(timeout);
  // }, [isCalculate])

  useEffect(() => {
    if(state == 'q25') countResult()
  }, [state])

  const reset = () => {
    setActive1(2)
    setTape1([])
    setState('q0')
    setResult(0)
    setFirstInput(0)
    setSecondInput(0)
  }

  const createTape = () => {
    // reset to default
    setActive1(2)
    setTape1(["B", "B"])
    setState('q0')
    setResult(0)

    for (let i = 0; i < Math.abs(firstInput); i++) {
      setTape1(prev => [...prev, "0"]);
    }
    setTape1(prev => [...prev, "1"]);
    for (let j = 0; j < Math.abs(secondInput); j++) {
      setTape1(prev => [...prev, "0"]);
    }

    setTape1(prev => [...prev, "1"]);
    setTape1(prev => [...prev, "B", "B"]);
  }

  const calculate = () => {
    createTape()
  }

  const turingMachine = () => {
    if (tape1.length == 0) return
    // get value from tape 1 and tape 2
    let val1 = tape1[active1];
    const concat = val1;
    const oldState = state;
    const next = power[state][concat];

    const newTrasition = `${concat}/${next.state[0].write},${next.state[0].move},(${oldState}->${next.next})`;
    setTrasition(newTrasition)

    // write new tape 1
    const newTape1 = [...tape1];
    newTape1[active1] = next.state[0].write;
    setTape1(newTape1);

    // move tape 1
    if (next.state[0].move == "R") {
      setActive1(prev => prev + 1);
      scrollRight(tapeContainer1Refs)
    } else if (next.state[0].move == "L") {
      setActive1(prev => prev - 1);
      scrollLeft(tapeContainer1Refs)
    }

    // set state to next state
    setState(next.next);

    // when in final state count the result
    if (next.next == "q25") return
    

    setIsCalculate(!isCalculate)
  }

  const countResult = () => {

    let count = 0;
    for (let i = 0; i < tape1.length; i++) {
      if (tape1[i] == "1") {
        count++;
      } else if (tape1[i] == "0") {
        count--;
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
              />
              <span className="input-group-text">-</span>
              <input
                type="number"
                className="form-control"
                placeholder="Second Input"
                aria-label="Second Input"
                value={secondInput}
                onChange={e => setSecondInput(e.target.value)}
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
              disabled={state == "q25" ? true : false}
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
              <p>200ms</p>
              <input
                type="range"
                value={speed}
                min="200"
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
        </div>
      </div>
    </>
  )
}

