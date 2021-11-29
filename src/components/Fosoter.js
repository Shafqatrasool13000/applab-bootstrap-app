import React from 'react'

const Fsooter = () => {
    return (
        <>
            <footer className='footer-box'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3 footer-div">
                                    <h4>Company</h4>
                                    <ul>
                                        <li>Privacy</li>
                                        <li>github</li>
                                        <li>FAQ</li>
                                        <li>Facebook</li>
                                    </ul>
                                </div>
                                <div className=" col-6  col-lg-3 footer-div">
                                    <h4>Support</h4>
                                    <ul>
                                        <li>Installation</li>
                                        <li>Main Concepts</li>
                                        <li>Testing</li>
                                        <li>About</li>
                                    </ul>
                                </div>
                                <div className=" col-6  col-lg-3 footer-div">
                                    <h4>Services</h4>
                                    <ul>
                                        <li>
                                            Blog</li>
                                        <li>Tutorial</li>
                                        <li>MORE</li>
                                        <li>Terms</li>
                                    </ul>
                                </div>
                                <div className=" col-6  col-lg-3 footer-div">
                                    <h4> Follow us</h4>
                                    <div className="row">
                                        <div className="col-6  col-lg-3  ">
                                            <i className="fab fa-facebook-f fontawesome-icon"></i>
                                        </div>
                                        <div className="col-6    col-lg-3 ">
                                            <a href="https://www.instagram.com/shafqatrasool13000/"><i className="fab fa-instagram fontawesome-icon"></i></a>
                                        </div>
                                        <div className="col-6  col-lg-3 "><i className="fab fa-twitter-square fontawesome-icon"></i></div>
                                        <div className="col-lg-3 "><a href="https://www.youtube.com/channel/UCfy0Yjr1AeUchIEtMmhD7tw"><i className="fab fa-youtube fontawesome-icon"></i></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className='text-center w-100 copyright-reserved'>Copyright @ AppLap 2021.All right reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Fsooter;