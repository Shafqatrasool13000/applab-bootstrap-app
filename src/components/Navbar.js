import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold" href="/"><span className='main-title'>App</span>Lab </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span onClick={() => setShow(!show)} className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item fw-bold">
                                    <a className="nav-link " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item fw-bold">
                                    <a className="nav-link" href="/">Key Features</a>
                                </li>
                                <li className="nav-item fw-bold">
                                    <a className="nav-link" href="/">Testiminals</a>
                                </li>
                                <li className="nav-item fw-bold">
                                    <a className="nav-link" href="/">Pricing</a>
                                </li>
                                <li className="nav-item fw-bold">
                                    <a className="nav-link" href="/">FAQs</a>
                                </li>
                            </ul>
                            <button className="btn  btn-col rounded-pill">Try for free</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
