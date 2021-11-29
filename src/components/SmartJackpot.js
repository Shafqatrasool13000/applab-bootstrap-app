import React from 'react'


const SmartJackpot = () => {
    const verticalLine = {
        borderLeft: '0.3px solid black',
        height: '120px',
        marginLeft: '5rem'
    }
    return (
        <>
            <div className=" container my-4">
                <div className="row d-flex row justify-content-start d-flex align-items-center smart-jackpot">
                    <div className="col-lg-5 jackpot-left">
                        <h1>Smart jackpots that <br /> you may love this <br /> anytime & anywhere</h1>
                    </div>
                    <span className="col-lg-2 vertical-line jackpot-right">
                        <div className="vl" style={verticalLine}></div>
                    </span>
                    <div className="col-lg-5">
                        <p >The rise of mobile devices transforms the way we consume information and the world 's' most entirely channel such as Facebook</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartJackpot
