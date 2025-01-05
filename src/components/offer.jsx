import React from 'react'
import Header from '../required/header'
import Footer from '../required/footer'

const Offer = () => {
    return (
        <>
            <Header />
            <section className="offer mt-5 py-5">
                <h2 className="text-center text-warning">OFFERS AT ALPINE RIVERHILL</h2>
                <p className="text-center"><b>Guest Reward Programmes</b></p>
                <hr className="w-50 m-auto" />
                <div className="container">
                    <div className="row d-flex align-content-stretch">
                        <div className="col-md-4 p-2">
                            <div className="card shadow p-3 h-100">
                                <div className="card-body text-center">
                                    <h3 className="text-warning"><i className="fa-solid fa-crown" /> Referral Programme:</h3>
                                    <hr className="w-50 m-auto" />
                                    <p>Loved your stay at Alpine Riverhill? Refer us to your family and friends and get a flat
                                        discount of ₹2,000 on your next booking with us.</p>
                                    <button className="btn btn-warning text-white"><i className="fa-solid fa-wallet" /> GRAB
                                        NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div className="card shadow p-3 h-100">
                                <div className="card-body text-center">
                                    <h3 className="text-warning"><i className="fa-solid fa-crown" /> Let us serve you longer:</h3>
                                    <hr className="w-50 m-auto" />
                                    <p>Book for a minimum of 3 nights and get a whooping 25% discount on your reservation.
                                    </p>
                                    <button className="btn btn-warning text-white"><i className="fa-solid fa-wallet" /> GRAB
                                        NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div className="card shadow p-3 h-100">
                                <div className="card-body text-center">
                                    <h3 className="text-warning"><i className="fa-solid fa-crown" /> Let us serve you longer:</h3>
                                    <hr className="w-50 m-auto" />
                                    <p>Book for a minimum of 3 nights and get a whooping 25% discount on your reservation.
                                    </p>
                                    <button className="btn btn-warning text-white"><i className="fa-solid fa-wallet" /> GRAB
                                        NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Offer