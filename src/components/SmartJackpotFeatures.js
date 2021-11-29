import React from 'react'
import JackpotApi from '../api/JackPotApi'

const SmartJackpotFeatures = () => {
    return (
        <div>
            <div className="container my-5 jackpot-features">
                <div className="row">
                    {JackpotApi.map((curE,i) => {
                        return (<div className="col-lg-4" key={i}>
                            <img src={curE.img} className='img-fluid' alt="Network" />
                            <p className='mt-4 mb-1 fw-bold'>{curE.title}</p>
                            <p>{curE.subtitle}</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default SmartJackpotFeatures
