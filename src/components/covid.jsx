import React from 'react'
import Header from '../required/header'
import Footer from '../required/footer'
import { Helmet } from 'react-helmet'

const Covid = () => {
    return (
        <>
        <Helmet>
                <title>Covid | Alpine</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet >
        <Header />
            <div>
                <br /><br />
                <h2 className="center">COVID-19 Safety Practices</h2>
                <h3 className="center2">You are truly safe here!</h3>
                <br /><br />
                <hr className="w-50 m-auto" />
                <div className="container-fluid mt-3">
                    <img src="assets/images/covid/img1.jpg" width={610} height={950} />
                    <img src="assets/images/covid/img2.jpg" width={610} height={950} />
                </div>
                <div className="container-fluid mt-3">
                    <img src="assets/images/covid/img3.jpg" className="mx-auto d-block" width={610} height={950} />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Covid