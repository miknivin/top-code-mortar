"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Counter from "../common/Counter";

const Home1WhyUsSection = () => {
  const ref4 = useRef(null);
  return (
    <div className="home1-case-study-section mb-80">
      <div className="container">
        <div
          className="row mb-60 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-lg-end justify-content-between gap-3 flex-wrap">
            <div className="section-title">
              <span>Why Us</span>
              <h2>Why Top Code?</h2>
              {/* <p>We Make It Make Sense</p>
              <p>
                Whether it’s marketing, automation, or design—we simplify the
                complex so your brand shines without the stress.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 wow animate fadeInRight"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="case-study-card magnetic-item">
              <div className="case-study-img-wrap">
                <div className="case-study-img">
                  <img src="/assets/img/home1/case-study-img3.png" alt="" />
                </div>
              </div>
              <div className="case-study-card-content">
                <h3>We Make It Make Sense</h3>
                <p>
                  Whether it’s marketing, automation, or design—we simplify the
                  complex so your brand shines without the stress.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="case-study-card magnetic-item">
              <div className="case-study-img-wrap">
                <img src="/assets/img/home1/case-study-img1.jpg" alt="" />
              </div>
              <div className="case-study-card-content">
                <h3>Creativity With a Purpose</h3>
                <p>
                  Our ideas aren’t just flashy; they’re smart, strategic, and
                  always built to move your business forward.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="case-study-card magnetic-item">
              <div className="case-study-img-wrap">
                <div className="case-study-img">
                  <img src="/assets/img/home1/case-study-img2.jpg" alt="" />
                </div>
              </div>
              <div className="case-study-card-content">
                <h3>Partners, Not Just Providers</h3>
                <p>
                  We work with you, not just for you. Think of us as your
                  creative tech team—here to grow, adapt, and build with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1WhyUsSection;
