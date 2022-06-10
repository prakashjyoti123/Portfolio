import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>prakashjyotirai99@gmail.com</h5>
            <a href="mailto:prakashjyotirai99@gmail.com">Send Message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5>prakashjyotirai99@gmail.com</h5>
            <a href="https://m.me/">Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>

            <a href="https://api.whatsapp.com/send?phone=8448165781">
              Send Message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" required cols="30" rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
