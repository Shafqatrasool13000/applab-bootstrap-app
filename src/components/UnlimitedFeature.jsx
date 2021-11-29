import React from 'react'
import { UnlimitedFeatures } from '../api/UltimateFeaturesApi'
import PicSide from './PicSide'
import TextSide from './TextSide'

const UnlimitedFeature = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-7">
                    <div className="text-center">
                        <h2>Ultimate features <br /> that we built</h2>
                        <p>The rise of Mobile devices transforms the way <br /> we consume information correctly</p>
                </div>
                        <div className="row text-center">
                            {UnlimitedFeatures.map((curE, i) => {
                                return (
                                    <div className='col-lg-6 my-4 ' key={i}>
                                        <img src={curE.img} alt="unlimitedfeatures" />
                                        <p className='fw-bold mt-4'>{curE.title}</p>
                                        <p className='mb-4'>{curE.subtitle}.</p>
                                    </div>)
                            })}    
                        </div>
                        <button className="btn btn-col fw-bold rounded-pill ms-5 unlimited-btn">
                            See All
                        </button>
                    </div>
                    <div className="col-lg-5 unlimited-image">
                        <PicSide class='first-img' img='images/features/ULImg2.png' width='350px' />
                        <PicSide class='second-img' img='images/features/ULImg1.png' width='310px' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default UnlimitedFeature