import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
                <div className="container">
                    {/* <a className="navbar-brand" href="index.html">
                        <img src="assets/images/logo.png" alt="Alpine Riverhill" />
                        Alpine Riverhill
                    </a> */}
                    <Link className="navbar-brand" to="/">
                        <img src="assets/images/logo.png" alt="Alpine Riverhill" />
                        Alpine Riverhill
                    </Link>

                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0 w-100 d-flex justify-content-end">
                            <li className="nav-item">
                                {/* <a className="nav-link active" href="#" aria-current="page">
                                    <i className="fa-solid fa-house" />
                                    Home
                                    <span className="visually-hidden">(current)</span>
                                </a> */}
                                <Link className="nav-link active" to="/" aria-current="page">
                                    <i className="fa-solid fa-house" />
                                    Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="gallery.html">
                                    <i className="fa-solid fa-images" />
                                    Gallery
                                </a> */}
                                <Link className="nav-link text-white" to="/gallery">
                                    <i className="fa-solid fa-images" />
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="covid.html">
                                    <i className="fa-solid fa-virus" />
                                    COVID-19 Safety Practices
                                </a> */}
                                <Link className="nav-link text-white" to="/covid">
                                    <i className="fa-solid fa-virus" />
                                    COVID-19 Safety Practices
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="offers.html">
                                    <i className="fa-solid fa-crown" />
                                    Offers
                                </a> */}
                                <Link className="nav-link text-white" to="/offer">
                                    <i className="fa-solid fa-crown" />
                                    Offers
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="testimonial.html">
                                    <i className="fa-solid fa-quote-left" />
                                    Testimonials
                                </a> */}
                                <Link className="nav-link text-white" to="/testimonial">
                                    <i className="fa-solid fa-quote-left" />
                                    Testimonials
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="aboutUS.html">
                                    <i className="fa-solid fa-circle-info" />
                                    About Us
                                </a> */}
                                <Link className="nav-link text-white" to="/about">
                                    <i className="fa-solid fa-circle-info" />
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="contact.html">
                                    <i className="fa-solid fa-phone-flip" />
                                    Contact Us
                                </a> */}
                                <Link className="nav-link text-white" to="/contact">
                                    <i className="fa-solid fa-phone-flip" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header