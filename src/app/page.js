'use client'

import React, { useState } from 'react';

const styles = {
  tape : {
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
  const [active, setActive] = useState(1)
  const [tape1, setTape1] = useState(["B","B","B","B"])
  const [tape2, setTape2] = useState(["B","B","B","B"])

  const createTape = () => {
    setTape1(["B", "B"])
    setTape2(["B", "B", "B"]);
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

  const calculate =  () => {
    createTape()
  }

  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5">
          Turing Machine Penambahan
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
              <span className="input-group-text">+</span>
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
                tape1.map((tape, i) => <div key={i}  style={(i == active) ? styles.cellActive : styles.cell}>{tape}</div>)
              }
          </div>
          <div className="mx-auto" style={styles.tape}>
              {
                tape2.map((tape, i) => <div key={i}  style={(i == active) ? styles.cellActive : styles.cell}>{tape}</div>)
              }
          </div>
        </div>
      </div>
    </>
  )
}
