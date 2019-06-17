import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Woof wooof wooof wooooof wof wof wooof wof wooooof wof wof wooof
              wofwooooof wof wof wooof wof wooooof wof wof wooof wof wooooof wof
              wof wooof wof wooooof wof wof wooof wooof
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-magenta">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
