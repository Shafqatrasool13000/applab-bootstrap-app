import React from 'react'
import WhyChoose from '../api/WhyChooseApi'

const WhyChooseFeatures = () => {
    return (
        <div className="container my-5 text-center">
            <div className="row">
                {WhyChoose.map((curE, i) => {
                    return (
                        <div className="col-lg-4" key={i}>
                            <div className>
                                <i className={`fontawesome-icon ${curE.logo} text-center`}></i>
                                <p className='mt-4 fw-bold'>{curE.title}</p>
                                <p className='mb-5 '> {curE.info}.</p>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}
export default WhyChooseFeatures
