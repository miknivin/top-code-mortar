import ContactForm from "@/components/contact-section/ContactForm";
import Footer1 from "@/components/Footer/Footer1";
import Home3Footer from "@/components/Footer/Home3Footer";
import Header from "@/components/header/Header";
import Header3 from "@/components/header/Header3";
import { serviceData } from "@/data/servicesData";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Header />

      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>
                  Let’s Build <br /> Flexible Project
                </h1>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <svg
                      width={25}
                      height={6}
                      viewBox="0 0 25 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Contact Page Start */}
      {/* <div className="contact-page-top mb-80">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-contact">
                <h4>New York</h4>
                <a href="https://www.google.com/maps">
                  123 Business St., Suite 456, City, State, ZIP Code, Country
                </a>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-call-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Call 24/7 Hours</span>
                      <h6>
                        <a href="tel:+997636844563">+99-763 684 4563 </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-mail-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Send Us Mail</span>
                      <h6>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-contact two">
                <h4>Australia</h4>
                <a href="https://www.google.com/maps">
                  123 Innovation Road, Suite 101Tech City, State, ZIP
                  CodeCountry
                </a>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-call-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Call 24/7 Hours</span>
                      <h6>
                        <a href="tel:+997636844563">+99-763 684 4563 </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-mail-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Send Us Mail</span>
                      <h6>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-contact three">
                <h4>London, UK</h4>
                <a href="https://www.google.com/maps">
                  123 Business St., Suite 456, City, State, ZIP Code, Country
                </a>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-call-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Call 24/7 Hours</span>
                      <h6>
                        <a href="tel:+997636844563">+99-763 684 4563 </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="/assets/img/home1/icon/contact-mail-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <span>Send Us Mail</span>
                      <h6>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ContactForm />
      {/* Contact Page End */}

      <Footer1 />
    </>
  );
};

export default ContactPage;
