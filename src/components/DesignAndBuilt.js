import React from 'react'
import PicSide from './PicSide'

const DesignAndBuilt = () => {
    return (
        <>
            <div className="container my-3">
                <div className="d-flex row justify-content-start d-flex align-items-center">
                <div className="col-lg-6">
                <PicSide img='images/companies/design.png' width='350px'/>
                </div>
                    <div className="col-lg-6 design-build">
                        <h2>Designed & built by <br /> the latest code <br /> integration</h2>
                        <p className='my-3'>The rise of mobile devices transforms the way we consume information around the world by most elevent channel such as facebook.</p>
                        <button className="btn btn-col rounded-pill">Learn More</button>
                    </div>
                    </div>
                </div>
           
        </>
    )
}

export default DesignAndBuilt