import React from 'react'
import Header from '../Coman/Header'
import Display from '../Coman/Display'
import Footer from '../Coman/Footer'

function Feature() {
    return (
        <div>
            <Header />
            <Display title="Our Features" subtitle="features" />
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

            <Footer />

        </div>
    )
}

export default Feature
