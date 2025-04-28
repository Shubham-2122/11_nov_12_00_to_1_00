import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <div>

            <Helmet >
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>

                <script src="js/main.js"></script>
            </Helmet>

            <Header />

            <div>
                {/* Carousel Start */}
                <div className="header-carousel owl-carousel overflow-hidden bg-dark">
                    <div className="header-carousel-item hero-section">
                        <div className="hero-bg-half-1" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-start">
                                            <h4 className="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                            <h1 className="display-1 text-white mb-4">The best gym center is now in your city</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2" /> <span>Watch Video</span></a>
                                                <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-carousel-item hero-section">
                        <div className="hero-bg-half-2" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-start">
                                            <h4 className="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                            <h1 className="display-2 text-white mb-4">Stay healthy by exercising at the best gym center</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2" /> <span>Watch Video</span></a>
                                                <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Carousel End */}
                {/* About Start */}
                <div className="container-fluid about pt-5">
                    <div className="container pt-5">
                        <div className="row g-5">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="about-content h-100">
                                    <h4 className="text-primary">About Fitness Center</h4>
                                    <h1 className="display-4 text-white mb-4">We are the best at fulfilling your potential and achieving your goals.</h1>
                                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In impedit accusantium autem quaerat natus nesciunt veritatis fugiat dolor eaque fuga.</p>
                                    <div className="tab-class pb-4">
                                        <ul className="nav d-flex mb-2">
                                            <li className="nav-item mb-3">
                                                <a className="d-flex py-2 active" data-bs-toggle="pill" href="#tab-1">
                                                    <span style={{ width: 150 }}>Our Mission</span>
                                                </a>
                                            </li>
                                            <li className="nav-item mb-3">
                                                <a className="d-flex py-2 mx-3" data-bs-toggle="pill" href="#tab-2">
                                                    <span style={{ width: 150 }}>Our Vision</span>
                                                </a>
                                            </li>
                                            <li className="nav-item mb-3">
                                                <a className="d-flex py-2" data-bs-toggle="pill" href="#tab-3">
                                                    <span style={{ width: 150 }}>Our Goal</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center border-top border-bottom py-4">
                                                            <span className="fas fa-rocket text-white fa-4x me-4" />
                                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-2" className="tab-pane fade show p-0">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center border-top border-bottom py-4">
                                                            <span className="fas fa-rocket text-white fa-4x me-4" />
                                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-3" className="tab-pane fade show p-0">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center border-top border-bottom py-4">
                                                            <span className="fas fa-rocket text-white fa-4x me-4" />
                                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm-6">
                                            <a href="#" className="btn btn-primary py-3 px-5"> <span>Make Appointment</span></a>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex flex-shrink-0 ps-4">
                                                <a href="#" className="btn btn-light btn-lg-square position-relative wow tada" data-wow-delay=".9s">
                                                    <i className="fa fa-phone-alt fa-2x" />
                                                    <div className="position-absolute" style={{ top: 5, right: 5 }}>
                                                        <span><i className="fa fa-comment-dots text-dark" /></span>
                                                    </div>
                                                </a>
                                                <div className="d-flex flex-column ms-3">
                                                    <span>Call to Our Experts</span>
                                                    <a href="tel:+ 0123 456 7890"><span className="text-white">Free: + 0123 456 7890</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="about-img h-100">
                                    <div className="about-img-inner d-flex h-100">
                                        <img src="img/about-2.png" className="img-fluid w-100" style={{ objectFit: 'cover' }} alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Fitness Goal start */}
                <div className="container-fluid goal pt-5">
                    <div className="container pt-5">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="goal-content">
                                    <h4 className="text-primary">Fitness Goal</h4>
                                    <h1 className="display-4 mb-4">Complete your possibilities, Achieve Your Fitness Goals.</h1>
                                    <div className="goal-item d-flex p-4">
                                        <div className="d-flex me-4">
                                            <div className="bg-primary d-inline p-3" style={{ width: 80, height: 80 }}>
                                                <img src="img/icon-1.png" className="img-fluid" alt />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Free Fitness Training</h4>
                                            <p className="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                        </div>
                                    </div>
                                    <div className="goal-item d-flex p-4 mb-4">
                                        <div className="d-flex me-4">
                                            <div className="bg-primary d-inline p-3" style={{ width: 80, height: 80 }}>
                                                <img src="img/icon-6.png" className="img-fluid" alt />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Cardio and Strength</h4>
                                            <p className="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                        </div>
                                    </div>
                                    <div className="ms-1">
                                        <a href="#" className="btn btn-primary py-3 px-5 ms-2"> <span>Read Details</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="h-100">
                                    <img src="img/fitness-goal-banner.png" className="img-fluid h-100" style={{ objectFit: 'cover' }} alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fitness Goal End */}
                {/* Features Start */}
                <div className="container-fluid feature bg-light py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary"> Why choose us?</h4>
                            <h1 className="display-4 mb-4">Out Our Highlights Below</h1>
                            <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                            </p>
                        </div>
                        <div className="feature-carousel owl-carousel">
                            <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="feature-img">
                                    <img src="img/feature-1.jpg" className="img-fluid w-100" alt />
                                </div>
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">Work Your Butt Off</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                            <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="feature-img">
                                    <img src="img/feature-2.jpg" className="img-fluid w-100" alt />
                                </div>
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">Get In The groove</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                            <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="feature-img">
                                    <img src="img/feature-3.jpg" className="img-fluid w-100" alt />
                                </div>
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">It's more Than A Game</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-img">
                                    <img src="img/feature-4.jpg" className="img-fluid w-100" alt />
                                </div>
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">Get Fit Don't Quit</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="feature-shaps" />
                    </div>
                </div>
                {/* Features End */}
                {/* Courses Start */}
                <div className="container-fluid courses overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary"> Our Courses</h4>
                            <h1 className="display-4 text-white mb-4">Out Our Highlights Below</h1>
                            <p className="text-white mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                            </p>
                        </div>
                        <div className="row gy-4 gx-0 justify-content-center">
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-1.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Gym Fitness Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-2.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Power Lifting Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-3.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Body Building Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-4.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Aerobics &amp; Skipping Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-5.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Boxing Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img src="img/icon-6.png" className="img-fluid" alt />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 25, height: 25 }}>
                                                        <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <p className="mb-0">Paul Flavius</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: Saturday</p>
                                                    <p className="mb-0">Time: 06.00 - 07.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3"> Cardio Class</a>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                        </p>
                                        <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" className="btn btn-primary py-3 px-5"> <span>More Courses</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Courses End */}
                {/* Blog Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary">  Our Blogs</h4>
                            <h1 className="display-4 mb-4">Check out our latest stories</h1>
                            <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                            </p>
                        </div>
                        <div className="blog-carousel owl-carousel">
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-img p-4 pb-0">
                                    <a href="#">
                                        <img src="img/feature-4.jpg" className="img-fluid w-100" alt />
                                    </a>
                                </div>
                                <div className="blog-content p-4">
                                    <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                        <div className="small"><span className="fa fa-user text-primary me-2" /> Martin.C</div>
                                        <div className="small"><span className="fa fa-calendar text-primary me-2" /> 30 Dec 2025</div>
                                    </div>
                                    <a href="#" className="h4 d-inline-block mb-3">Full Body Home Workout</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="btn btn-dark py-2 px-4 ms-2"> <span className="me-2">Read More</span>  <i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="blog-img p-4 pb-0">
                                    <a href="#">
                                        <img src="img/feature-3.jpg" className="img-fluid w-100" alt />
                                    </a>
                                </div>
                                <div className="blog-content p-4">
                                    <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                        <div className="small"><span className="fa fa-user text-primary me-2" /> Martin.C</div>
                                        <div className="small"><span className="fa fa-calendar text-primary me-2" /> 30 Dec 2025</div>
                                    </div>
                                    <a href="#" className="h4 d-inline-block mb-3">31-Day Fitness Calendar</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="btn btn-dark py-2 px-4 ms-2"> <span className="me-2">Read More</span>  <i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="blog-img p-4 pb-0">
                                    <a href="#">
                                        <img src="img/feature-2.jpg" className="img-fluid w-100" alt />
                                    </a>
                                </div>
                                <div className="blog-content p-4">
                                    <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                        <div className="small"><span className="fa fa-user text-primary me-2" /> Martin.C</div>
                                        <div className="small"><span className="fa fa-calendar text-primary me-2" /> 30 Dec 2025</div>
                                    </div>
                                    <a href="#" className="h4 d-inline-block mb-3">At Home Ab Workout</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="btn btn-dark py-2 px-4 ms-2"> <span className="me-2">Read More</span>  <i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img p-4 pb-0">
                                    <a href="#">
                                        <img src="img/feature-1.jpg" className="img-fluid w-100" alt />
                                    </a>
                                </div>
                                <div className="blog-content p-4">
                                    <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                        <div className="small"><span className="fa fa-user text-primary me-2" /> Martin.C</div>
                                        <div className="small"><span className="fa fa-calendar text-primary me-2" /> 30 Dec 2025</div>
                                    </div>
                                    <a href="#" className="h4 d-inline-block mb-3">Full Body Home Workout</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="btn btn-dark py-2 px-4 ms-2"> <span className="me-2">Read More</span>  <i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
                {/* Explore Fitness Start */}
                <div className="container-fluid explore py-5 wow zoomIn" data-wow-delay="0.2s">
                    <div className="container py-5 text-center">
                        <h1 className="display-1 text-white mb-0"> Explore Fitness Center</h1>
                        <a className="btn btn-primary py-3 px-4 px-md-5 me-2" href="https://www.youtube.com/embed/DWRcNpR6Kdc"><i className="fas fa-play-circle me-2" /> <span>Watch Video</span></a>
                    </div>
                </div>
                {/* Explore Fitness End */}
                {/* Team Start */}
                <div className="container-fluid team py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary">Our Trainer</h4>
                            <h1 className="display-4 mb-4">Meet Our Amazing Team</h1>
                            <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                            </p>
                        </div>
                        <div className="row gy-5 gy-lg-4 gx-4">
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-1.jpg" className="img-fluid w-100" alt="Image" />
                                        <div className="team-icon">
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-facebook-f" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-twitter" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-instagram" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4>Trainer Name</h4>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-2.jpg" className="img-fluid w-100" alt="Image" />
                                        <div className="team-icon">
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-facebook-f" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-twitter" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-instagram" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4>Trainer Name</h4>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-3.jpg" className="img-fluid w-100" alt="Image" />
                                        <div className="team-icon">
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-facebook-f" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-twitter" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-instagram" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4>Trainer Name</h4>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-4.jpg" className="img-fluid w-100" alt="Image" />
                                        <div className="team-icon">
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-facebook-f" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-twitter" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-instagram" /></a>
                                            <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4>Trainer Name</h4>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Testimonial Start */}
                <div className="container-fluid testimonial bg-dark py-5" style={{ marginBottom: 90 }}>
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary">Testimonial</h4>
                            <h1 className="display-4 text-white">What Our Customers Are Saying</h1>
                        </div>
                        <div className="testimonial-carousel owl-carousel wow fadeInUp" data-wow-delay="0.2s">
                            <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                                <span className="fa fa-quote-left fa-3x quote-icon" />
                                <div className="testimonial-img mb-4">
                                    <img src="img/testimonial-1.jpg" className="img-fluid" alt="Image" />
                                </div>
                                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                                </p>
                                <div className="d-block">
                                    <h4 className="text-white">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                                <span className="fa fa-quote-left fa-3x quote-icon" />
                                <div className="testimonial-img mb-4">
                                    <img src="img/testimonial-2.jpg" className="img-fluid" alt="Image" />
                                </div>
                                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                                </p>
                                <div className="d-block">
                                    <h4 className="text-white">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                                <span className="fa fa-quote-left fa-3x quote-icon" />
                                <div className="testimonial-img mb-4">
                                    <img src="img/testimonial-3.jpg" className="img-fluid" alt="Image" />
                                </div>
                                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                                </p>
                                <div className="d-block">
                                    <h4 className="text-white">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>



            <Footer />
        </div>
    )
}

export default Home
