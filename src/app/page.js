import Link from "next/link"

export default function Home() {
  
  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5">
          Turing Machine Simulation By Kelompok 4
        </h1>
        <div>
          <Link className="btn btn-primary" href="/substraction">
            Substraction
          </Link>
        </div>

      </div>
    </>
  )
}

