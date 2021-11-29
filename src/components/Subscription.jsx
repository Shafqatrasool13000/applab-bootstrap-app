import React from 'react'

const Subscription = () => {
    return (
        <div className='container subscription text-center'>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div className="col-lg-6">
                    <h1>$0 <span>/month</span></h1>
                    <h4>Bussiness Class</h4>
                    <div className="mt-5">
                        <p>For Small team of office</p>
                        <p>Drag & Drop Builder  </p>
                        <p> 1,000's of Templates</p>
                        <p>Blog Support Tools</p>
                        <p>eCommerce Store</p>
                    </div>
                    <button className="btn btn-col rounded-pill">Start Free Trail</button>
                </div>
                <div className="col-lg-6 mt-3">
                    <h1>$99/Month</h1>
                    <h4>Pro Master</h4>
                    <div className="mt-5">
                        <p>For Best apportunities</p>
                        <p>Drag & Drop Builder  </p>
                        <p> 1,000's of Templates</p>
                        <p>Blog Support Tools</p>
                        <p>eCommerce Store</p>
                    </div>
                    <button className="btn rounded-pill btn-col">Subscribe Now</button>
                    <br />
                    <div className='mt-4'>
                        <a href="/" className='text-decoration-none '>or Start Free 14 days Trail</a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Subscription
