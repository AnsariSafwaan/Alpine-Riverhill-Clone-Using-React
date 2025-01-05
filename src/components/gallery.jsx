import React from 'react'
import Header from '../required/header'
import Footer from '../required/footer'

const Gallery = () => {
    return (
        <>
        <Header />
            <div>
                <br /><br />
                <h2 className="center">BEAUTY OF ALPINE RIVERHILL</h2>
                <h3 className="center2">Real Photographs of the Villa</h3>
                <br /><br />
                <div className="container mt-3">
                    <img src="assets/images/gallery/img1.png" width={350} height={236} />
                    <img src="assets/images/gallery/img2.png" width={350} height={236} />
                    <img src="assets/images/gallery/img3.png" width={350} height={236} />
                </div>
                <div className="container mt-3">
                    <img src="assets/images/gallery/img4.png" width={350} height={236} />
                    <img src="assets/images/gallery/img5.png" width={350} height={236} />
                    <img src="assets/images/gallery/img6.png" width={350} height={236} />
                </div>
                <div className="container mt-3">
                    <img src="assets/images/gallery/img7.png" width={350} height={236} />
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Gallery