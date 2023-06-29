'use client'

import { useState } from 'react';
import substraction  from '../../state/substraction';


const styles = {
  tape: {
    display: "flex",
    alignItems: "center",
    width: "800px",
    height: "80px",
    border: "1px solid black",
    overflowX: "scroll",
  },
  cell: {
    minWidth: "60px",
    height: "60px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cellActive: {
    backgroundColor: "green",
    color: "white",
    minWidth: "60px",
    height: "60px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}

export default function Home() {
  const [firstInput, setFirstInput] = useState(0)
  const [secondInput, setSecondInput] = useState(0)
  const [result, setResult] = useState(0)
  const [state, setState] = useState('q0')
  const [active1, setActive1] = useState(2)
  const [active2, setActive2] = useState(2)
  const [tape1, setTape1] = useState([])
  const [tape2, setTape2] = useState([])

  const reset =   () => {
    setActive1(2)
    setActive2(2)
    setTape1([])
    setTape2([]);
    setState('q0')
    setResult(0)
    setFirstInput(0)
    setSecondInput(0)
  }

  const createTape = () => {
    // reset to default
    setActive1(2)
    setActive2(2)
    setTape1(["B", "B"])
    setTape2(["B", "B", "B"]);
    setState('q0')
    setResult(0)

    for (let i = 0; i < Math.abs(firstInput); i++) {
      if (firstInput < 0) {
        setTape1(prev => [...prev, "0"]);
      } else {
        setTape1(prev => [...prev, "1"]);
      }
      setTape2(prev => [...prev, "B"]);
    }
    setTape1(prev => [...prev, "C"]);
    for (let j = 0; j < Math.abs(secondInput); j++) {
      if (secondInput > 0) {
        setTape1(prev => [...prev, "1"]);
      } else {
        setTape1(prev => [...prev, "0"]);
      }
      setTape2(prev => [...prev, "B"]);
    }
    setTape1(prev => [...prev, "B", "B"]);
    setTape2(prev => [...prev, "B", "B"]);
  }

  const calculate = () => {
    createTape()
  }

  const turingMachine = () => {

      // get value from tape 1 and tape 2
      let val1 = tape1[active1];
      let val2 = tape2[active2];
      const concat = val1 + val2;
      
      const next = substraction[state][concat];

      // move tape 1
      if (next.state[0].move == "R") {
        setActive1(prev => prev + 1);
      } else if (next.state[0].move == "L") {
        setActive1(prev => prev - 1);
      }

      // move tape 2
      if (next.state[1].move == "R") {
        setActive2(prev => prev + 1);
      } else if (next.state[1].move == "L") {
        setActive2(prev => prev - 1);
      }

      // write new tape 1
      const newTape1 = [...tape1];
      newTape1[active1] = next.state[0].write;
      setTape1(newTape1);
      console.log(newTape1)

      // write new tape 2
      const newTape2 = [...tape2];
      newTape2[active2] = next.state[1].write;
      setTape2(newTape2);

      // set state to next state
      setState(next.next);

      // when in final state count the result
      if (next.next == "q2") {
        countResult()
      }

  }
  const countResult = () => {

    let count = 0;
    for (let i = 0; i < tape2.length; i++) {
      if (tape2[i] == "1") {
        count++;
      } else if (tape2[i] == "0") {
        count--;
      }
    }
    setResult(count)
  }
  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5">
          Substraction Turing Machine
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
              disabled={state == "q2" ? true : false}
            >
              Simulate
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-3 mx-auto">
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
          <div className="mx-auto" style={styles.tape}>
            {
              tape1.map((tape, i) => <div key={i} style={(i == active1) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
          <div className="mx-auto" style={styles.tape}>
            {
              tape2.map((tape, i) => <div key={i} style={(i == active2) ? styles.cellActive : styles.cell}>{tape}</div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

