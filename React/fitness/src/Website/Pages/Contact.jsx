import React from 'react'
import Header from '../Coman/Header'
import Display from '../Coman/Display'
import Footer from '../Coman/Footer'

function Contact() {
    return (
        <div>
            <Header />
            <Display title="Contact Us" subtitle="/Contact" />
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="mb-4">
                                <h4 className="text-primary">Contact Us</h4>
                                <h1 className="display-4 mb-4">Contact With Team Of Experts</h1>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.
                                </p>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fas fa-map-marker-alt fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Address</h4>
                                                <p className="mb-0">123 street New York</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fas fa-envelope fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Mail Us</h4>
                                                <p className="mb-0">info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fa fa-phone-alt fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Telephone</h4>
                                                <p className="mb-0">(+012) 3456 7890 123</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fab fa-firefox-browser fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Yoursite@ex.com</h4>
                                                <p className="mb-0">(+012) 3456 7890</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex ms-2 mb-5">
                                <a className="btn btn-dark py-2 px-3 px-sm-4 me-2" href="#"> <span>facebook</span> <i className="fas fa-chevron-circle-right" /></a>
                                <a className="btn btn-dark py-2 px-3 px-sm-4 mx-2" href="#"> <span>twitter</span> <i className="fas fa-chevron-circle-right" /></a>
                                <a className="btn btn-dark py-2 px-3 px-sm-4 ms-2" href="#"> <span>instagram</span> <i className="fas fa-chevron-circle-right" /></a>
                            </div>
                            <div className="contact-banner">
                                <div className="row g-0">
                                    <div className="col-9">
                                        <div className="p-4 pe-0">
                                            <h4 className="display-5 mb-0">Want To Join Our Talanded Team</h4>
                                            <div className="d-flex align-items-center">
                                                <a href="index.html" className="h5 mb-0 me-3">visit our website</a>
                                                <a className="text-primary py-3" href="https://www.youtube.com/embed/DWRcNpR6Kdc"><i className="fas fa-play-circle me-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="form-section bg-dark p-5 h-100">
                                <h1 className="display-4 text-white mb-4">Get In touch</h1>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                                                <label htmlFor="phone">Your Phone</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="text" className="form-control border-0" id="project" placeholder="Project" />
                                                <label htmlFor="project">Your Project</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating form-section-col">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="#" id="flexCheck" />
                                                <label className="form-check-label" htmlFor="flexCheck">I agree with the site privacy policy</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-section-col">
                                                <button className="btn-primary w-100 py-3 px-5">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="h-100 overflow-hidden">
                                <iframe className="w-100" style={{ height: 400 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            <Footer />
        </div>
    )
}

export default Contact
