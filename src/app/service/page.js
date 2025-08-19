"use client";
import Counter from "@/components/common/Counter";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { serviceData } from "@/data/servicesData";
import Footer1 from "@/components/Footer/Footer1";
const ServicePage = () => {
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  useEffect(() => {
    const serviceImgItem = document.querySelectorAll(
      ".sevices-wrap .single-services "
    );
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px) rotate(25deg)`;
    }

    serviceImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 100);
      });
    });
  });
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
                  Challenges <br /> Which We Tackle
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
                    Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Service Page Banner Start */}
      <div className="service-page-banner-section mb-130">
        <div className="container">
          <div className="banner-img-wrap">
            <div className="banner-img">
              <img
                src="/assets/img/innerpages/service-page-banner-img.jpg"
                alt=""
              />
            </div>
            <div className="counter-wrap">
              <div className="counter-area">
                <div className="counter-content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={146}
                      speed={10}
                      forwardedRef={ref2}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <p>
                    Completed <br /> Projects
                  </p>
                </div>
              </div>
              <div className="counter-area two">
                <div className="counter-content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={98}
                      speed={10}
                      forwardedRef={ref3}
                      as="h2"
                      className="counter"
                    />
                    <span>%</span>
                  </div>
                  <p>
                    Client <br /> Retention Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-content-wrap">
            <div className="row gy-4 justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div className="banner-title">
                  <h2>Results-Driven Digital Solutions</h2>
                  <p>
                    “ We Don’t Offer Fixed Packages ,<br /> We Offer What You
                    Actually Need”
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="banner-content">
                  <p>
                    We believe that every business has its own{" "}
                    <span>Story</span>, <span>Size</span>, and{" "}
                    <span>Strategy</span>, so a fixed package just doesn’t make
                    sense, Instead of offering pre-set plans, we take the time
                    to understand your{" "}
                    <span>business goals, the scale of your operations</span>{" "}
                    and the type of support you truly need. Whether you're an{" "}
                    <span>
                      individual starting something new, a fast-growing startup,
                      or a large enterprise
                    </span>
                    we carefully assess your requirements before preparing a
                    customized solution that fits both your needs and budget.
                  </p>
                  <p>
                    Our goal is to make sure both parties are fully aligned and
                    comfortable with the final package. We value transparency,
                    flexibility, and long-term partnerships. So no matter your
                    industry or company size, you’re always welcome to reach
                    out. We’re ready to listen, plan, and build something that
                    works uniquely for you.
                  </p>
                  <Link
                    href="/contact"
                    className="primary-btn3 three btn-hover"
                  >
                    Start The Journey
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Page Banner End */}
      {/* home3 Process Section Start */}
      <div className="home3-process-section mb-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="process-wrapper">
                <div
                  className="section-title three white mb-60 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>Working Step</span>
                  <h2>Solution of Process.</h2>
                </div>
                <div className="process-card-area">
                  <div className="row gy-md-5 gy-4 justify-content-between">
                    <div
                      className="col-xl-5 col-md-6 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2">
                        <div className="step-no">
                          <span>Step</span>
                          <strong>01</strong>
                        </div>
                        <h4>
                          Initial <br /> Consultation
                        </h4>
                      </div>
                    </div>
                    <div
                      className="col-xl-5 col-md-6 wow animate fadeInRight"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2 two">
                        <h4>
                          Strategy <br /> Development
                        </h4>
                        <div className="step-no">
                          <span>Step</span>
                          <strong>02</strong>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-7 col-md-6 wow animate fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2 three">
                        <h4>
                          Execution &amp; <br /> Launch
                        </h4>
                        <div className="step-no">
                          <span>Step</span>
                          <strong>03</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg
                    className="vector"
                    width={204}
                    height={650}
                    viewBox="0 0 204 650"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="theMotionPath11"
                      d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H183C194.046 300 203 308.954 203 320V629C203 640.046 194.046 649 183 649H110"
                    />
                    <circle cx={0} cy={0} r={3}>
                      <animateMotion
                        dur="4s"
                        begin="0s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#theMotionPath11" />
                      </animateMotion>
                    </circle>
                  </svg>
                  {/* <svg class="vector" width="203" height="650" viewBox="0 0 203 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="theMo1tionPath11"
                              d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H182C193.046 300 202 308.954 202 320V629C202 640.046 193.046 649 182 649H110"
                              stroke="white" stroke-opacity="0.2" />
                          <circle cx="99" cy="179" r="3" fill="url(#paint0_linear_6561_16)">
                              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="">
                                  <mpath xlink:href="#theMo1tionPath11"></mpath>
                              </animateMotion>
                          </circle>
                          <defs>
                              <linearGradient id="paint0_linear_6561_16" x1="99" y1="176" x2="99" y2="182" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white" />
                                  <stop offset="1" stop-color="#5956E9" />
                              </linearGradient>
                          </defs>
                      </svg> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-0">
              <div className="founder-area">
                <svg
                  className="quote"
                  width={136}
                  height={152}
                  viewBox="0 0 136 152"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M99.6484 20.2667C78.5409 20.2667 63.3017 37.5566 63.3017 63.1602C63.4339 100.356 91.6191 126.655 132.281 131.703C136.048 132.175 137.502 126.982 134.032 125.455C118.436 118.57 110.552 109.837 109.535 101.195C108.775 94.7369 112.31 89.0785 116.758 88.0164C128.276 85.2691 135.995 71.0347 135.995 56.3282C135.995 46.7641 132.166 37.5917 125.349 30.8289C118.533 24.066 109.288 20.2667 99.6484 20.2667ZM20.3466 20.2667C-0.760849 20.2667 -16 37.5566 -16 63.1602C-15.8678 100.356 12.3173 126.655 52.9793 131.703C56.7461 132.175 58.2 126.982 54.7305 125.455C39.1345 118.57 31.2506 109.837 30.2329 101.195C29.4729 94.7369 33.0085 89.0785 37.456 88.0164C48.9746 85.2691 56.6933 71.0347 56.6933 56.3282C56.6933 46.7641 52.8639 37.5917 46.0476 30.8289C39.2313 24.066 29.9864 20.2667 20.3466 20.2667Z" />
                  </g>
                </svg>
                <div
                  className="founder-content wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <svg
                    width={200}
                    height={6}
                    viewBox="0 0 200 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM200 3L195 0.113249V5.88675L200 3ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                    </g>
                  </svg>
                  <p>
                    Behind every successful project is a thoughtful plan and
                    smooth execution. That’s why we start by getting to know
                    your goals, your challenges, and what truly matters to your
                    business. From there, we craft powerful digital solutions
                    that don’t just look good on paper, they actually work and
                    deliver meaningful results.
                  </p>
                  <div className="founder-name-and-desig">
                    <h5>Mr. Jumarashiq</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home3 Process Section End */}
      {/* home3 Service Section Start */}
      <div className="home3-service-section mb-130">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-60">
            <div
              className="col-lg-5 col-md-8 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title three">
                <span>Smart Solution</span>
                <h2>Scope of Work.</h2>
                <p>
                  We provides a wide range of services aimed at helping{" "}
                  <span>Businesses, Organizations.</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 d-md-block d-none">
              <div className="shape">
                <svg
                  width={95}
                  height={85}
                  viewBox="0 0 95 85"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M16.0501 69.9674C35.5969 88.559 66.5141 87.7847 85.1057 68.238L14.3206 0.911865C-4.27094 20.4586 -3.49663 51.3758 16.0501 69.9674Z" />
                    <path d="M79.225 4.61569C92.1355 11.0232 97.4072 26.6836 90.9996 39.5941L44.2466 16.3903C50.6542 3.47983 66.3145 -1.79185 79.225 4.61569Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="sevices-wrap">
                {serviceData.map((service, index) => (
                  <div
                    key={service.id}
                    className="single-services wow animate fadeInDown"
                    data-wow-delay={`${200 + index * 200}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="title-area">
                      <div className="icon">
                        <svg
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M53.9531 36.9609C56.3203 34.8633 57.5859 32.4844 57.5859 30C57.5859 27.4688 56.25 25.0078 53.7305 22.8516C56.2383 20.707 57.5859 18.2578 57.5859 15.6914C57.5859 11.9062 54.668 8.35547 49.3594 5.70703C44.1094 3.08203 37.125 1.62891 29.707 1.62891C22.2891 1.62891 15.293 3.08203 10.043 5.70703C4.73438 8.35547 1.81641 11.9062 1.81641 15.6914C1.81641 18.2578 3.15234 20.707 5.67188 22.8516C3.15234 25.0078 1.81641 27.4688 1.81641 30C1.81641 32.5664 3.15234 35.0156 5.67188 37.1602C3.15234 39.3164 1.81641 41.7773 1.81641 44.3086C1.81641 48.0938 4.73438 51.6445 10.043 54.293C15.293 56.918 22.2773 58.3711 29.6953 58.3711C37.1133 58.3711 44.0977 56.9297 49.3477 54.293C50.168 53.8828 50.9414 53.4492 51.6445 52.9922C55.5938 50.5898 57.9492 47.5078 57.9492 44.1562C57.9492 41.5195 56.4844 39.0586 53.9531 36.9609ZM2.28516 15.6914C2.28516 8.20312 14.5781 2.09766 29.6953 2.09766C44.8125 2.09766 57.1055 8.1914 57.1055 15.6914C57.1055 23.1797 44.8125 29.2852 29.6953 29.2852C14.5781 29.2852 2.28516 23.1797 2.28516 15.6914ZM29.6953 43.5938C14.5781 43.5938 2.28516 37.4883 2.28516 30C2.28516 27.5859 3.58594 25.2305 6.03516 23.1563C7.16016 24.0586 8.49609 24.9141 10.043 25.6758C15.293 28.3008 22.2773 29.7539 29.6953 29.7539C37.1133 29.7539 44.0977 28.3125 49.3477 25.6758C50.8945 24.9023 52.2305 24.0586 53.3555 23.1563C55.8047 25.2305 57.1055 27.5977 57.1055 30C57.1055 37.4883 44.8125 43.5938 29.6953 43.5938Z" />
                        </svg>
                      </div>
                      <h3>
                        <Link href={`/service/details/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="services-img">
                      <img src={service.serviceImage} alt="" />
                    </div>
                    <div className="content">
                      <p>{service.veryShortDesc}</p>
                      <ul className="tag-list">
                        {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>+ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="button-area">
                      <div className="details-btn">
                        <Link
                          href={`/service/details/${service.id}`}
                          className="primary-btn3 three transparent btn-hover"
                        >
                          View Details
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
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-8 col-lg-10">
              <div className="contact-btn-area two">
                <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                <Link href="/contact" className="primary-btn3 two btn-hover">
                  Start The Journey
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
                </Link>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="section-vector"
          width={300}
          height={372}
          viewBox="0 0 300 372"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle
              cx={320}
              cy={52}
              r={270}
              transform="rotate(180 320 52)"
              strokeWidth={100}
            />
          </g>
        </svg>
      </div>
      {/* home3 Service Section End */}
      {/* home3 Scroll Text Section Start */}

      {/* home3 Scroll Text Section End */}

      <Footer1 />
    </>
  );
};

export default ServicePage;
