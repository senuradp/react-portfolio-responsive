import React from 'react'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";

import { testimonials } from '../../Data'
import { FaArrowRight } from 'react-icons/fa';
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials  section" id="testimonial">
        <h2 className="section__title text-cs">
            Testimonials
        </h2>
        <p className="section__subtitle">
            What <span> They Say</span>
        </p>

        <Swiper 
        className="testimonials__container container mySwiper"
        pagination={{
            clickable: true,
        }}
        spaceBetween={30}
        breakpoints={{
            540: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }}
        modules={[Pagination]}
        >

            {testimonials.map((testimonial, index) => {
                return(
                    <SwiperSlide className="testimonials__item card card-one" key={index}>
                        <div className="testimonial__header">
                            
                            <div className="testimonial__icon">
                                <img src={testimonialIcon} alt=""/>
                            </div>
                            
                            <img src={testimonial.img} alt="" className="testimonial__img" />
                        </div>

                        <p className="testimonial__description">{testimonial.description}</p>

                        <h3 className="testimoinal__name">{testimonial.name}</h3>

                        <p className="testimoinal__author">{testimonial.author}</p>

                        <img src={shapeTwo} alt="" className="shape c__shape"/>

                    </SwiperSlide>
                )
            })}

        </Swiper>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className='shape'/>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Reviews</span>
        </div>

    </section>
  )
}

export default Testimonials