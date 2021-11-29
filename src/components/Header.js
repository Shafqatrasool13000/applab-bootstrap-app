import React from "react";
import PicSide from "./PicSide";

const Header = () => {
    return (
        <>
            <div className="container my-4 header-mobile  p-3 mb-5 ">
                <div className="d-flex row justify-content-start d-flex align-items-center">
                    <div className="col-lg-6 text-side">
                        <p className='fw-bold shadow bg-body  '> <span className="my-icon me-2">
                            <i className="far fa-check-circle  ms-2 mt-2"></i>
                        </span>#1Editors Choice Appp 2021</p>
                        <h1>Best app for your <br /> modern lifestyle</h1>
                        <p>
                            Increase productivity with a simple to-do app. app for <br /> managing your personal budget
                        </p>
                        <button className="btn btn-col rounded-pill" style={{ width: '150px', padding: '7px' }}>Learn More</button>
                        <a href="/" className="ms-3 text-decoration-none">Watch demo video</a>
                    </div>
                    <div className="col-lg-6 pic-side">
                        <PicSide img="images/phone.png" width='300px' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
