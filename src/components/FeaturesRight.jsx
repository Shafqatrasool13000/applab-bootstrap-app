import React from 'react'
import { Features, mainFeature } from '../api/FeaturesApi'
const FeaturesRight = () => {
    return (
        <>
                <h3>{mainFeature.title}</h3>
                <p>{mainFeature.subtitle}</p>
                {
                    Features.map((curEl, i) => {
                        return (
                            <div className="row" key={i}>
                                <div className="col-lg-3 my-4"><img className='img-fluid' src={curEl.img} alt={curEl.title} /></div>
                                <div className="col-lg-9"><h4>{curEl.title}</h4>
                                    <p>{curEl.subtitle}</p></div>
                            </div>)
                    })
                }

        </>
    )
}

export default FeaturesRight
