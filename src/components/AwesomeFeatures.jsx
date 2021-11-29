import React from 'react'

const AwesomeFeatures = () => {
    return (
        <>
            <div className='container text-center my-5 awesome-features' >
                <div className="my-3">
                    <h2>Get awesome features, without <br /> extra charges</h2>
                    <p className='my-3'>The rise of mobile devices transforms the way we consume information entirely <br /> and the world most elevent channels such as Facebook.</p>
                </div>
                <label class="switch">
                        <input type="checkbox" id="togBtn" />
                        <div class="slider round">
                            {/* <!--ADDED HTML --> */}
                            <span class="on">Monthly</span>
                            <span class="off">Annually</span>
                            {/* <!--END--> */}
                        </div>
                    </label>
            </div>
        </>
    )
}

export default AwesomeFeatures
