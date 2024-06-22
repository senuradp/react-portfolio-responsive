/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './services.css'
import {services} from '../../Data'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { FaArrowRight } from 'react-icons/fa';

import shapeOne from '../../assets/shape-1.png';
import shapeTwo from "../../assets/shape-2.png";

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title text-cs">
            What I Do
        </h2>
        <p className="section__subtitle">
            My <span>Services</span>
        </p>

        <Swiper 
        className="services__container container mySwiper"
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

            {services.map((service, index) => {
                return(
                    <SwiperSlide className="services__item card card-one" key={index}>
                        <span className="services__subtitle text-cs">{service.name}</span>
                        
                        <h3 className="services__title">{service.title}</h3>
                        <p className="services__description">{service.description}</p>

                        <a href="#contact" className="link">Contact Me <FaArrowRight className='link__icon'></FaArrowRight></a>

                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </SwiperSlide>
                )
            })}

        </Swiper>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className='shape'/>
        </div>

    </section>
  )
}

export default Services;
