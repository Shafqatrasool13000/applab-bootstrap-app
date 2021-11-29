import React from 'react'
import PicSide from './PicSide'

const MeetClient = () => {
    return (
        <>
            <div className="container my-4 text-center ">
                <div className="d-flex row justify-content-start d-flex align-items-center">
                    <div className="col-lg-5">
                        <PicSide img='images/meetclient.png' width='350px' />
                    </div>
                    <div className="col-lg-5">
                        <h2>Meet Client Satisfaction by using product</h2>
                        <p>The rise of mobile devices transforms the way we consume information around the world by most elevent channel such as facebook.</p>
                        <img src="images/stars.png" className='my-2' alt="reviews" />
                        <p className='fw-bold'>User friendly & Customizable</p>
                        <p>Bring to the table win-win survival strategies to ensure proact</p>
                        <div className="row d-flex row justify-content-start d-flex align-items-center ">
                            <div className="col-4">
                                <img src="images/ceo.png" className='rounded-pill ' alt="ceopic" />
                            </div>
                            <div className="col-5">
                                <p >Zoltan Nemeth</p>
                                <p>CEO of Pixler Lab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetClient