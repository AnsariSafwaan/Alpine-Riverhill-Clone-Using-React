import React from 'react'
import Footer from '../required/footer'
import Header from '../required/header'

const Contact = () => {
    return (
        <>
        <Header />
            <br /><br />
            <section>
                <h2 className="center">CONTACT ALPINE RIVERHILL</h2>
                <h3 className="center2">Book Your Villa Now!</h3>
                <hr className="w-50 m-auto" />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 border p-3">
                            <img src="assets/images/contact/img1.jpg" className="mx-auto d-block" width={180} />
                            <h6 className="text-warning"><i className="fa-solid fa-building" />&nbsp;Address:</h6>
                            <p className="text-justify">Bungalow no. 01, River Hill Park Society, Near Sai Brooklands, Opp. Sidhu
                                Dhaba,
                                Takve, Old Mumbai-Pune Highway, Lonavala - 410405</p>
                            <h6 className="text-warning"><i className="fa-solid fa-phone" />&nbsp;Contact Number:</h6>
                            <p>+919930247992 / +919667555554</p>
                            <h6 className="text-warning"><i className="fa-solid fa-envelope" />&nbsp;Email:</h6>
                            <p><a href="ansarisafwaan0987@gmail.com">ansarisafwaan0987@gmail.com</a></p>
                            <h6 className="text-warning"><i className="fa-solid fa-globe" />&nbsp;Website:</h6>
                            <p><a href="www.alpineriverhill.com">www.alpineriverhill.com</a></p>
                            <h6 className="text-warning"><i className="fa-solid fa-mobile-screen-button" />&nbsp;Social Links:</h6>
                            <p>
                                <a href="https://www.facebook.com/alpine.riverhill/"><i className="fa-brands fa-square-facebook fa-2x pr-3" /></a>
                                <a href="https://www.instagram.com/alpine.riverhill/"><i className="fa-brands fa-instagram fa-2x pr-3" /></a>
                                <a href="https://api.whatsapp.com/send?phone=919667555554"><i className="fa-brands fa-whatsapp fa-2x pr-3" /></a>
                                <a href="https://in.pinterest.com/alpineriverhillvilla/"><i className="fa-brands fa-pinterest fa-2x pr-3" /></a>
                                <a href="https://www.snapchat.com/add/alpineriverhill"><i className="fa-brands fa-snapchat fa-2x pr-3" /></a>
                                <a href="https://www.youtube.com/channel/UCF9uuv6xde1mg8YmdDuP8Kg"><i className="fa-brands fa-youtube fa-2x pr-3" /></a>
                                <a href="https://www.google.co.in/travel/hotels/alpine%20riverhill/entity/CgoIm_X7ktrajLUaEAE/overview?q=alpine%20riverhill&g2lb=2502548%2C4258168%2C4260007%2C4274032%2C4305595%2C4306835%2C4317915%2C4326765%2C4328159%2C4329288%2C4330862%2C4366684%2C4373849%2C4381263%2C4382623%2C4385383%2C4386665%2C4388729%2C4395397%2C4270859%2C4284970%2C4316256%2C4356900&hl=en&gl=in&un=1&rp=EJv1-5La2oy1GjgCQABIAQ&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwi4quKW-4WHAxUAAAAAHQAAAAAQBA&ts=CAEaIAoCGgASGhIUCgcI6A8QBxgGEgcI6A8QBxgHGAEyAhAAKgQKABoA"><i className="fa-brands fa-google fa-2x pr-3" /></a>
                            </p>
                        </div>
                        <div className="col-md-6 offset-md-3 border p-3">
                            <h4 className="text-center">Enquiry Form</h4>
                            <form method="post">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" aria-describedby="helpId" placeholder />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="number" className="form-label">Phone</label>
                                        <input type="number" className="form-control" name="number" id="number" aria-describedby="helpId" placeholder />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="Noofguest" className="form-label">No. of Guests:</label>
                                        <input type="number" className="form-control" name="Noofguest" id="Noofguest" aria-describedby="helpId" placeholder />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="checkIN" className="form-label">Check-In Date:</label>
                                        <input type="date" className="form-control" name="checkIN" id="checkIN" aria-describedby="helpId" placeholder />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="checkOut" className="form-label">Check-Out Date:</label>
                                        <input type="date" className="form-control" name="checkOut" id="checkOut" aria-describedby="helpId" placeholder />
                                    </div>
                                    <br /><br />
                                    <b>Amenities:</b>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check1" name="option1" defaultValue="something" defaultChecked />
                                        <label className="form-check-label" htmlFor="check1">Meals</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check2" name="option2" defaultValue="something" />
                                        <label className="form-check-label" htmlFor="check2">Barbeque</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check2" name="option2" defaultValue="something" />
                                        <label className="form-check-label" htmlFor="check2">Sheesha</label>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="message">Message:</label>
                                        <textarea className="form-control" rows={2} id="message" name="text" placeholder="Type your message here..." defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-warning text-white"><i className="fa-solid fa-paper-plane" />
                                        SEND ENQUIRY</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5 wow zoomIn">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.7733723382585!2d73.49862151452797!3d18.763657287267893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab505efdc4ed%3A0x1a6a32d5a25efa9b!2sAlpine%20Riverhill%20Villa!5e0!3m2!1sen!2sin!4v1584630241058!5m2!1sen!2sin" width="100%" height={400} frameBorder={0} allowFullScreen className="border border-grey border-5" aria-hidden="false" tabIndex={0} />
                </div>
            </section>
            <br /><br /><br />
        <Footer />
        </>
    )
}

export default Contact