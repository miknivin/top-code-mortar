"use client";
import React, { useMemo } from "react";
import Home3Footer from "@/components/Footer/Home3Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { serviceData } from "@/data/servicesData";
import Footer1 from "@/components/Footer/Footer1";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ServiceDetailsPage = ({ params }) => {
  const { id } = params;

  // Find the service data by id
  const service = serviceData.find((item) => item.id === id);

  // Swiper settings
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".post-slider-next",
        prevEl: ".post-slider-prev",
      },
    };
  }, []);

  // Handle case where service is not found
  if (!service) {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Service Not Found</h1>
          <p>The service with ID "{id}" could not be found.</p>
          <Link href="/service">Back to Services</Link>
        </div>
        <Home3Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />

      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1>{service.title}</h1>
                <ul className="breadcrumb-list">
                  <li>
                    <Link href="/">Home</Link>
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
                    {service.title}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Service Details Page Start */}
      <div className="service-details-page mb-130">
        <div className="container">
          <div className="details-content-wrap mb-130">
            <div className="post-thumb mb-70">
              <Swiper
                {...settings}
                className="swiper service-details-post-slider"
              >
                <div className="swiper-wrapper">
                  {service.sliderImages.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <img src={image.src} alt={image.alt} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div className="slider-btn-grp">
                <div
                  style={{ cursor: "pointer" }}
                  className="slider-btn post-slider-prev"
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="slider-btn post-slider-next"
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="post-title-and-tag">
                  <h2>{service.title}</h2>
                  <ul className="tag-list">
                    {service.tags.map((tag, index) => (
                      <li key={index}>
                        <Link href={tag.href}>{tag.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <svg
                    className="divider-line"
                    width={873}
                    height={6}
                    viewBox="0 0 873 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="row gy-4 justify-content-between mb-70">
              <div className="col-xl-5 col-lg-6">
                <h2>Service Overview</h2>
                <span className="line-break" />
                {service.overview.map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
                <span className="line-break" />
              </div>
              <div className="col-xl-5 col-lg-6">
                <h2>Key Feature</h2>
                <span className="line-break" />
                <p>{service.keyFeaturesIntro}</p>
                <span className="line-break" />
                <ul className="listing two">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index}>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="img-grp">
              <div className="row g-4">
                {service.imageGroup1.map((image, index) => (
                  <div key={index} className={image.className}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <h2>Why Choose Us?</h2>
            <span className="line-break" />
            <p className="fixed-width">{service.whyChooseUsIntro}</p>
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-4">
              {service.whyChooseUs.map((reason, index) => (
                <div key={index} className={reason.className}>
                  <div className={reason.divClass}>
                    <h5>
                      <span>{index + 1}.</span> {reason.title}
                    </h5>
                  </div>
                </div>
              ))}
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                <Link href="/contact" className="contact-btn">
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
                </Link>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="img-grp">
              <div className="row g-4">
                {service.imageGroup2.map((image, index) => (
                  <div key={index} className={image.className}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="details-pagination two">
                <div className="single-pagination">
                  <Link
                    className="pagination-btn"
                    href={service.pagination.prev.href}
                  >
                    <img src={service.pagination.prev.image} alt="" />
                    <div className="btn-content">
                      <svg
                        width={7}
                        height={12}
                        viewBox="0 0 8 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                      </svg>
                      Prev
                    </div>
                  </Link>
                  <div className="content">
                    <h6>
                      <Link href={service.pagination.prev.href}>
                        {service.pagination.prev.title}
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-pagination two text-end">
                  <div className="content">
                    <h6>
                      <Link href={service.pagination.next.href}>
                        {service.pagination.next.title}
                      </Link>
                    </h6>
                  </div>
                  <Link
                    className="pagination-btn"
                    href={service.pagination.next.href}
                  >
                    <img src={service.pagination.next.image} alt="" />
                    <div className="btn-content">
                      Next
                      <svg
                        width={7}
                        height={14}
                        viewBox="0 0 8 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <svg
                  className="divider-line"
                  width={6}
                  height={88}
                  viewBox="0 0 6 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 83L0.113249 88H5.88675L3.5 83H2.5ZM2.5 4.5V83.5H3.5V4.5H2.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Details Page End */}

      <Footer1 />
    </div>
  );
};

export default ServiceDetailsPage;
