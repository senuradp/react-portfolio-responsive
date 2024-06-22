import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import shapeOne from '../../assets/shape-1.png';

import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = data;

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
  
    setData({ ...data, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("https://v1.nocodeapi.com/senuradp/google_sheets/BOieIJGCtLAXPcFH?tabId=Sheet1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([
            [name, email, subject, message, new Date().toLocaleString()],
          ])
      });

      await response.json()
      setData({...data, name:"", email:"", subject:"", message:""});

    }catch(err){
      console.log(err);
    }
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
        Let's <span> Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap></FaRegMap>
            </span>

            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">
              245/3 Asgiriya, Gampaha, Sri Lanka
            </p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser></FaRegUser>
            </span>

            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Right Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope></FaRegEnvelope>
            </span>

            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">senuradp@gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook></FaRegAddressBook>
            </span>

            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+94 077 977 9574</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full name <b>*</b>
              </label>
              <input type="text" name='name' onChange={handleChange} value={name} className="contact__form-input" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your email address<b>*</b>
              </label>
              <input type="email" name='email' onChange={handleChange} value={email} className="contact__form-input" />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input type="text" name='subject' onChange={handleChange} value={subject} className="contact__form-input" />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea name='message' onChange={handleChange} value={message} className="contact__form-input"></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms & conditions.</p>
            <button type="submit" className="btn text-cs">
              {" "}
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className='shape'/>
      </div>


    </section>
  );
};

export default Contact;
