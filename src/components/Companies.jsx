import React from 'react'
import ImagesApi from '../api/ImagesApi'

const Companies = () => {
    return (
        <>
            <div className='container my-5'>
                <p className='text-center fw-bold '>Trusted by Companies Like</p>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        {ImagesApi.map((curE, i) => (
                            <div className="col-12 col-lg-2 text-center my-4" key={i}>
                                <img src={curE.img} className='img-fluid' alt="company" /></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies
