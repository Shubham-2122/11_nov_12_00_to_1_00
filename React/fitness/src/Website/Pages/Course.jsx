import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import Display from '../Coman/Display'
import axios from 'axios'

function Course() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/course")
        // console.log(res.data)
        setcard(res.data)
    }

    return (
        <div>
            <Header />
            <Display title="Our Courses" subtitle="Course" />

            <div>
                {/* Fitness Goal start */}
                <div className="container-fluid goal pt-5" style={{ margin: '90px 0' }}>
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
                {/* Courses Start */}
                <div className="container-fluid courses overflow-hidden py-5" style={{ marginBottom: 90 }}>
                    <div className="container py-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                            <h4 className="text-primary"> Our Courses</h4>
                            <h1 className="display-4 text-white mb-4">Out Our Highlights Below</h1>
                            <p className="text-white mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                            </p>
                        </div>
                        <div className="row gy-4 gx-0 justify-content-center">
                            {
                                card && card.map((data) => {
                                    return (
                                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="courses-item">
                                                <div className="courses-item-inner p-4">
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <div className="courses-icon-img p-3">
                                                            <img src={data.logo} className="img-fluid" alt />
                                                        </div>
                                                        <div className="data-info d-flex flex-column">
                                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                                <div className="me-2" style={{ width: 50, height: 50 }}>
                                                                    <img src={data.img} className="img-fluid" alt />
                                                                </div>
                                                                <p className="mb-0">{data.name}</p>
                                                            </div>
                                                            <div className="courses-date">
                                                                <p className="mb-1">Date: {data.day}</p>
                                                                <p className="mb-0">Time: {data.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="d-inline-block h4 mb-3">{data.title}</a>
                                                    <p className="mb-4">{data.desc}
                                                    </p>
                                                    <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" className="btn btn-primary py-3 px-5"> <span>More Courses</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Courses End */}
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

export default Course
