import React from 'react'

const DownloadApp = () => {
    return (
        <>
            <div className="container my-3">
                <div className="d-flex row justify-content-center  align-items-center">
                    <div className="col-lg-6">
                        <h3>Download our App now !</h3>
                        <p>The rise of mobile devices transforms the way we consume information entirely and world 's most elevent channel such as facebook</p>
                        <div className="row">
                            <div className="col-lg-6 img-fluid"><img src="images/apple.png" alt="apple" /></div>
                            <div className="col-lg-6 img-fluid "><img src="images/android.png" alt="android" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src='images/DownApp.png' className='img-fluid' alt="features" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadApp