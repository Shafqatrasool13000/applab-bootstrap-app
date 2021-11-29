import React from 'react'
import FeaturesRight from './FeaturesRight'
import PicSide from './PicSide'

const Features = () => {
    return (
        <>
            <div className="container">
                <div className="row d-lg-flex justify-lg-content-start align-lg-items-center">
                    <div className="col-lg-6 features-left">
                        <PicSide img='images/features/FImg.png' width='350px' />
                    </div>
                    <div className="col-lg-6 features-right">
                        <FeaturesRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
