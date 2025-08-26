"use client";
import { serviceData } from "@/data/servicesData";
import React, { useState } from "react";

const ContactForm = () => {
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
    <div className="contact-form-area mb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="contact-form-wrap style-2">
              <div className="section-title three text-center">
                <h2>Collaborate with Us!</h2>
                <p>
                  We’re excited to hear from you! Whether you have a question
                  about our services, want to discuss a new project.
                </p>
              </div>
              <svg
                className="divider"
                height={6}
                viewBox="0 0 696 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM691 3.5L696 5.88675V0.113249L691 2.5V3.5ZM4.5 3.5H691.5V2.5H4.5V3.5Z" />
              </svg>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Mr. Daniel"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Egenslab"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Company Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="info@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+99 087 *** ** ***"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner2">
                      <label>How can We Assist You?</label>
                      <ul>
                        {serviceData.map((service) => (
                          <li key={service.id}>
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
                        placeholder="Write your enquiry..."
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
                <button type="submit" className="primary-btn3 btn-hover">
                  Submit Now
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
                  <span />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
