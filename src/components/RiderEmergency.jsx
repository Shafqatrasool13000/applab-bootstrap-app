import React, { useState } from 'react'
import RiderEmer from '../api/RiderEmer'

const RiderEmergency = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="text-center">
        <p className='fw-bold'>How to contact with riders emergency?</p>
        <p>Leverage agile frameworks to provide a robust synopsis  for high Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Facilis animi velit aspernatur vero  esse  voluptates error reiciendis rem excepturi ratione!</p>
      </div>
      <div className='container faq-section'>
        <div className="row">
          <div className="accordion" id="accordionExample">
            {RiderEmer.map((curE) => {
              return (
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={`${show?'true':''}`} aria-controls="collapseOne">
                      {curE.title}
                    </button>
                  </h2>
                  <div id="collapseOne" className={`accordion-collapse collapse ${show?'show':''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {curE.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default RiderEmergency
