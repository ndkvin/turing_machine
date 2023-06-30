import Link from "next/link"

export default function Home() {
  
  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5">
          Turing Machine Simulator By Kelompok 5
        </h1>
        <div className="d-flex justify-content-center mt-5">
          <Link className="btn btn-primary me-2" href="/addition">
            Addition
          </Link>
          <Link className="btn btn-primary me-2" href="/substraction">
            Substraction
          </Link>
          <Link className="btn btn-primary me-2" href="/binaryMultitape">
            Binary Multitapes
          </Link>
          <Link className="btn btn-primary me-2" href="/binarySingletrack">
            Binary Singletrack
          </Link>
        </div>
      </div>
    </>
  )
}


