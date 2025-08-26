"use client";
import ThrowableItems from "@/utils/ThrowableItems";
import Counter from "../common/Counter";
import { useRef, useState } from "react";
import { serviceData } from "@/data/servicesData";

const Home1ContactSection = () => {
  const ref3 = useRef(null);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const services = serviceData
      .filter((_, index) => formData.getAll("services").includes(_.title))
      .map((service) => service.title);

    const data = {
      fullName: formData.get("fullName"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      services: services,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        form.reset();
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Failed to send message",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An error occurred while sending the message",
      });
    }
  };

  return (
    <>
      <div className="home1-contact-section mb-80">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div
              className="col-lg-5 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-area">
                <div className="section-title mb-50">
                  <span>Free Consultation</span>
                  <h2>We’d Love to Hear You!</h2>
                </div>
                <div className="arrow-and-contact-list">
                  <svg
                    className="arrow"
                    width={6}
                    height={355}
                    viewBox="0 0 6 355"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM3 355L5.88675 350H0.113249L3 355ZM2.5 4.5V151H3.5V4.5H2.5ZM2.5 151V350.5H3.5V151H2.5Z" />
                  </svg>
                  <ul className="contact-list">
                    <li className="single-contact">
                      <h5>Chat with US</h5>
                      <div className="contact-content-wrap">
                        <div className="icon">
                          <img
                            src="/assets/img/home1/icon/contact-mail-icon.svg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <span>Send Us Mail</span>
                          <a href="mailto:support@topcodemedia.com">
                            support@topcodemedia.com
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-form-wrap">
                <form onSubmit={handleSubmit}>
                  <div className="row g-4 mb-40">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Full name</label>
                        <input type="text" name="fullName" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Company</label>
                        <input type="text" name="company" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Company Email</label>
                        <input type="email" name="email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Phone</label>
                        <input type="text" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner2">
                        <label>How can We Assist You?</label>
                        <ul>
                          {serviceData.map((service) => (
                            <li key={service.title}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={service.title}
                                  name="services"
                                  id={service.title}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={service.title}
                                >
                                  {service.title}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Message</label>
                        <textarea
                          name="message"
                          placeholder="Write your message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {formStatus && (
                    <div className={`alert alert-${formStatus.type} mb-3`}>
                      {formStatus.message}
                    </div>
                  )}
                  <button type="submit" className="primary-btn1">
                    <span>
                      Submit
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span>
                      Submit
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1ContactSection;
