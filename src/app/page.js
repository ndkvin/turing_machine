import Link from "next/link"

export default function Home() {
  
  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5">
          Turing Machine Simulator By Kelompok 5
        </h1>
        <div className="d-flex justify-content-center mt-5 flex-wrap">
          <Link className="btn btn-primary me-2 mt-2" href="/addition">
            Addition
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/substraction">
            Substraction
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/multiplication">
            Multiplication
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/divide">
            divide
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/power">
            Power
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/faktorial">
            Faktorial
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/binaryMultitape">
            Binary Multitapes
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/binarySingletrack">
            Binary Singletrack
          </Link>
          <Link className="btn btn-primary me-2  mt-2" href="/squareroot">
            Square Root
          </Link>
        </div>
      </div>
    </>
  )
}


