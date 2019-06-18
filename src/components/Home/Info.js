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
              <p>Catering to your senses since 2018. </p>
              <p>
                We only support local farmers and only use fresh cut local
                flowers.
              </p>
              <p>
                Family owned bussiness that always goes the extra mile to make
                your floral gift perfect.
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
