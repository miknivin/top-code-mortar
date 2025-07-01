"use client";
import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceData } from "@/data/servicesData";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}

const Header = ({ style = "", fluid }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const pathname = usePathname();
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    console.log("click");

    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const companyPaths = [
    "/about",
    "/team",
    "/team/style2",
    "/team/style3",
    "/team/details",
    "/award-recognitions",
    "/social-responsibility",
    "/case-study",
    "/case-study/style2",
    "/case-study/details",
    "/news-insight-grid",
    "/news-insight-grid/style2",
    "/news-insight-grid/style3",
    "/news-insight-grid/details",
    "/pricing",
    "/career",
    "/career/details",
    "/shop",
    "/cart",
    "/checkout",
    "/product-details",
    "/faq",
    "/contact",
  ];
  const homePaths = [
    "/",
    "/digital-agency",
    "/digital-agency-dark",
    "/startup-agency",
    "/startup-agency-dark",
    "/fintech",
    "/fintech-dark",
    "/marketing-agency",
    "/marketing-agency-dark",
    "/it-consulting",
    "/it-consulting-dark",
    "/saas-product",
    "/saas-product-dark",
    "/portfolio",
    "/portfolio-dark",
  ];
  const portfolioPaths = [
    "/portfolio",
    "/portfolio/masonry",
    "/portfolio/slider",
    "/portfolio/classic",
    "/portfolio/creative",
    "/portfolio/caption",
    "/portfolio/horizontal",
    "/portfolio/carousel",
    "/portfolio/vertical",
    "/portfolio/interactive-link",
    "/portfolio/grid",
    "/portfolio/details",
  ];
  const isCompanyActive = companyPaths.some((path) =>
    pathname.startsWith(path)
  );
  const isPortfolioActive = portfolioPaths.some((path) =>
    pathname.startsWith(path)
  );
  const isHomeActive = homePaths.some(
    (path) =>
      pathname.startsWith(path) &&
      !pathname.startsWith("/about") &&
      !pathname.startsWith("/service")
  );
  return (
    <header className="header-area style-1">
      <div className="container-xl container-fluid d-flex flex-nowrap align-items-center justify-content-between">
        <div className="company-logo-and-contact-area">
          <div className="company-logo">
            <Link href="/" className="logo-dark">
              <img
                alt="image"
                className="img-fluid"
                src="/assets/img/header-logo.svg"
              />
            </Link>
            <Link href="/" className="logo-light">
              <img
                alt="image"
                className="img-fluid"
                src="/assets/img/header-logo-white.svg"
              />
            </Link>
          </div>
          <div className="contact-area d-lg-flex d-none">
            <div className="icon">
              <img src="/assets/img/home1/icon/support-icon.svg" alt="" />
            </div>
            <div className="content">
              <span>Our Support</span>
              <h6>
                <a href="tel:+997636844568">+99-763 684 4568 </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="menu-and-btn-area">
          <div
            className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}
          >
            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
              <Link href="/" className="mobile-logo-wrap">
                <img
                  alt="image"
                  className="img-fluid"
                  src="/assets/img/header-logo.png"
                />
                <img
                  alt="image"
                  className="img-fluid dark"
                  src="/assets/img/header-logo-white.svg"
                />
              </Link>
              <div className="menu-close-btn" onClick={toggleSidebar}>
                <i className="bi bi-x" />
              </div>
            </div>
            <ul className="menu-list">
              <li
                className={`menu-item position-inherit ${
                  isHomeActive ? "active" : ""
                }`}
              >
                <Link href="/" className="">
                  Home
                </Link>
                {/* <i
                  onClick={() => toggleMenu("HOME")}
                  className={`bi bi-${
                    state.activeMenu === "HOME" ? "dash" : "plus"
                  } dropdown-icon`}
                /> */}
                {/* <ul className={`sub-menu d-lg-none ${state.activeMenu === "HOME" ? "d-block" : "none"}`} >
                                    <li className="">
                                        <a href="#">Light Version</a>
                                        <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                        <i onClick={() => toggleSubMenu("light")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "light" ? "dash" : "plus"} dropdown-icon`} />
                                        <ul className={`sub-menu ${state.activeSubMenu === "light" ? "d-block" : "none"}`}>
                                            <li className={pathname === "/" ? "active" : ""}><Link href="/">Startup Agency</Link></li>
                                            <li className={pathname === "/fintech" ? "active" : ""}><Link href="/fintech">Fintech</Link></li>
                                            <li className={pathname === "/digital-agency" ? "active" : ""}><Link href="/digital-agency">Digital Agency</Link></li>
                                            <li className={pathname === "/marketing-agency" ? "active" : ""}><Link href="/marketing-agency">Marketing Agency</Link></li>
                                            <li className={pathname === "/it-consulting" ? "active" : ""}><Link href="/it-consulting">IT Consulting</Link></li>
                                            <li className={pathname === "/saas-product" ? "active" : ""}><Link href="/saas-product">SaaS Product</Link></li>
                                            <li className={pathname === "/portfolio" ? "active" : ""}><Link href="/portfolio">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Dark Version</a>
                                        <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                        <i onClick={() => toggleSubMenu("dark")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "dark" ? "dash" : "plus"} dropdown-icon`} />
                                        <ul className={`sub-menu ${state.activeSubMenu === "dark" ? "d-block" : "none"}`}>
                                            <li className={pathname === "/" ? "active" : ""}><Link href="/startup-agency-dark">Startup Agency</Link></li>
                                            <li className={pathname === "/fintech-dark" ? "active" : ""}><Link href="/fintech-dark">Fintech</Link></li>
                                            <li className={pathname === "/digital-agency-dark" ? "active" : ""}><Link href="/digital-agency-dark">Digital Agency</Link></li>
                                            <li className={pathname === "/marketing-agency-dark" ? "active" : ""}><Link href="/marketing-agency-dark">Marketing Agency</Link></li>
                                            <li className={pathname === "/it-consulting-dark" ? "active" : ""}><Link href="/it-consulting-dark">IT Consulting</Link></li>
                                            <li className={pathname === "/saas-product-dark" ? "active" : ""}><Link href="/saas-product-dark">SaaS Product</Link></li>
                                            <li className={pathname === "/portfolio-dark" ? "active" : ""}><Link href="/portfolio-dark">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                </ul> */}
              </li>
              <li
                className={`menu-item-has-children position-inherit ${
                  pathname.includes("/service/details") ? "active" : ""
                }`}
              >
                <Link href="/service" className="drop-down">
                  What We do
                </Link>
                <i
                  onClick={() => toggleMenu("solution")}
                  className={`bi bi-${
                    state.activeMenu === "solution" ? "dash" : "plus"
                  } dropdown-iconvisual-icon`}
                />
                <div
                  className={`mega-menu2 ${
                    state.activeMenu === "solution" ? "d-block" : "none"
                  }`}
                >
                  <div className="container">
                    <div className="row align-items-lg-end justify-content-between">
                      <div className="col-xl-7 col-lg-8">
                        <div className="title-area">
                          <h2>Challenge We Tackle</h2>
                          <div className="icon">
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
                          </div>
                        </div>
                        <ul className="menu-row">
                          <li className="menu-single-item">
                            <div className="menu-title">
                              <h6>
                                <svg
                                  width={17}
                                  height={12}
                                  viewBox="0 0 17 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx={6} cy={6} r="5.5" />
                                  <circle cx={11} cy={6} r="5.5" />
                                </svg>
                                Smart Solutions
                              </h6>
                            </div>
                            <ul>
                              {serviceData.map((service, index) => (
                                <li key={service.id}>
                                  <Link href={`/service/details/${service.id}`}>
                                    <svg
                                      width={22}
                                      height={22}
                                      viewBox="0 0 22 22"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g>
                                        <path d="M19.25 1.375C19.6147 1.375 19.9644 1.51987 20.2223 1.77773C20.4801 2.03559 20.625 2.38533 20.625 2.75V19.25C20.625 19.6147 20.4801 19.9644 20.2223 20.2223C19.9644 20.4801 19.6147 20.625 19.25 20.625H2.75C2.38533 20.625 2.03559 20.4801 1.77773 20.2223C1.51987 19.9644 1.375 19.6147 1.375 19.25V2.75C1.375 2.38533 1.51987 2.03559 1.77773 1.77773C2.03559 1.51987 2.38533 1.375 2.75 1.375H19.25ZM2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 19.25C0 19.9793 0.289731 20.6788 0.805456 21.1945C1.32118 21.7103 2.02065 22 2.75 22H19.25C19.9793 22 20.6788 21.7103 21.1945 21.1945C21.7103 20.6788 22 19.9793 22 19.25V2.75C22 2.02065 21.7103 1.32118 21.1945 0.805456C20.6788 0.289731 19.9793 0 19.25 0L2.75 0Z" />
                                        <path d="M9.42426 6.38826C9.48828 6.45212 9.53908 6.52799 9.57374 6.61151C9.6084 6.69504 9.62624 6.78458 9.62624 6.87501C9.62624 6.96544 9.6084 7.05498 9.57374 7.1385C9.53908 7.22203 9.48828 7.2979 9.42426 7.36176L5.78463 11L9.42426 14.6383C9.55335 14.7674 9.62588 14.9424 9.62588 15.125C9.62588 15.3076 9.55335 15.4827 9.42426 15.6118C9.29516 15.7409 9.12007 15.8134 8.93751 15.8134C8.75494 15.8134 8.57985 15.7409 8.45076 15.6118L4.32576 11.4868C4.26173 11.4229 4.21094 11.347 4.17628 11.2635C4.14162 11.18 4.12378 11.0904 4.12378 11C4.12378 10.9096 4.14162 10.82 4.17628 10.7365C4.21094 10.653 4.26173 10.5771 4.32576 10.5133L8.45076 6.38826C8.51462 6.32423 8.59049 6.27344 8.67401 6.23878C8.75754 6.20412 8.84708 6.18628 8.93751 6.18628C9.02794 6.18628 9.11748 6.20412 9.201 6.23878C9.28453 6.27344 9.3604 6.32423 9.42426 6.38826ZM12.5758 6.38826C12.5117 6.45212 12.4609 6.52799 12.4263 6.61151C12.3916 6.69504 12.3738 6.78458 12.3738 6.87501C12.3738 6.96544 12.3916 7.05498 12.4263 7.1385C12.4609 7.22203 12.5117 7.2979 12.5758 7.36176L16.215woman.15.6118C12.7049 15.7409 12.8799 15.8134 13.0625 15.8134C13.2451 15.8134 13.4202 15.7409 13.5493 15.6118L17.6743 11.4868C17.7383 11.4229 17.7891 11.347 17.8237 11.2635C17.8584 11.18 17.8762 11.0904 17.8762 11C17.8762 10.9096 17.8584 10.82 17.8237 10.7365C17.7891 10.653 17.7383 10.5771 17.6743 10.5133L13.5493 6.38826C13.4854 6.32423 13.4095 6.27344 13.326 6.23878C13.2425 6.20412 13.1529 6.18628 13.0625 6.18628C12.9721 6.18628 12.8825 6.20412 12.799 6.23878C12.7155 6.27344 12.6396 6.32423 12.5758 6.38826Z" />
                                      </g>
                                    </svg>
                                    {service.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {/* <li className="menu-single-item">
                            <div className="menu-title">
                              <h6>
                                <svg
                                  width={17}
                                  height={12}
                                  viewBox="0 0 17 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx={6} cy={6} r="5.5" />
                                  <circle cx={11} cy={6} r="5.5" />
                                </svg>
                                Industries Cover
                              </h6>
                            </div>
                            <ul>
                              <li>
                                <Link href="/industry/details">
                                  Finance & Fintech
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry/details">
                                  Healthcare & Life
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry/details">
                                  Retail & E-commerce
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry/details">
                                  Education & EdTech
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry/details">
                                  Government & Public Sector
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry/details">
                                  Travel & Hospitality
                                </Link>
                              </li>
                              <li>
                                <Link href="/industry" className="all-btn">
                                  View All Industries
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
                              </li>
                            </ul>
                          </li> */}
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <div className="solution-menu-banner">
                          <div className="banner-content">
                            <h3>
                              We have Dynamic Team Members that Easily Problem
                              Solve.
                            </h3>
                            <Link href="/contact" className="primary-btn1">
                              <span>
                                Let’s Talk
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
                                Let’s Talk
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
                            </Link>
                          </div>
                          <div className="banner-img">
                            <img
                              src="/assets/img/home1/solution-menu-banner-img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={`menu-item ${isCompanyActive ? "active" : ""}`}>
                <Link href="/about" className="drop-down">
                  Who we are
                </Link>
                <i
                  onClick={() => toggleMenu("company")}
                  className={`bi bi-${
                    state.activeMenu === "company" ? "dash" : "plus"
                  } dropdown-icon`}
                />
                {/* <ul
                  className={`sub-menu ${
                    state.activeMenu === "company" ? "d-block" : "none"
                  }`}
                >
                  <li>
                    <Link href="/about">Company</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("team")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "team" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "team" ? "d-block" : "none"
                      }`}
                    >
                      <li>
                        <Link href="/team">Team Style 01</Link>
                      </li>
                      <li>
                        <Link href="/team/style2">Team Style 02</Link>
                      </li>
                      <li>
                        <Link href="/team/style3">Team Style 03</Link>
                      </li>
                      <li>
                        <Link href="/team/details">Team Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/award-recognitions">
                      Award &amp; Recognitions
                    </Link>
                  </li>
                  <li>
                    <Link href="/social-responsibility">
                      Social Responsibility
                    </Link>
                  </li>
                  <li
                    className={pathname.startsWith("/service") ? "active" : ""}
                  >
                    <Link href="/service">Services</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("service")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "service" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "service" ? "d-block" : "none"
                      }`}
                    >
                      <li className={pathname === "/service" ? "active" : ""}>
                        <Link href="/service">Service Style 01</Link>
                      </li>
                      <li
                        className={
                          pathname === "/service/style2" ? "active" : ""
                        }
                      >
                        <Link href="/service/style2">Service Style 02</Link>
                      </li>
                      <li
                        className={
                          pathname === "/service/details" ? "active" : ""
                        }
                      >
                        <Link href="/service/details">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname.startsWith("/case") ? "active" : ""}>
                    <Link href="/case-study">Case Study</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("case-study")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "case-study" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "case-study"
                          ? "d-block"
                          : "none"
                      }`}
                    >
                      <li
                        className={pathname === "/case-study" ? "active" : ""}
                      >
                        <Link href="/case-study">Case Study Style 01</Link>
                      </li>
                      <li
                        className={
                          pathname === "/case-study/style2" ? "active" : ""
                        }
                      >
                        <Link href="/case-study/style2">
                          Case Study Style 02
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/case-study/details" ? "active" : ""
                        }
                      >
                        <Link href="/case-study/details">
                          Case Study Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname.startsWith("/news") ? "active" : ""}>
                    <Link href="/news-insight-grid">News &amp; Insight</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("news")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "news" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "news" ? "d-block" : "none"
                      }`}
                    >
                      <li
                        className={
                          pathname === "/news-insight-grid" ? "active" : ""
                        }
                      >
                        <Link href="/news-insight-grid">
                          News &amp; Insight 01
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/news-insight-grid/style2"
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/news-insight-grid/style2">
                          News &amp; Insight 02
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/news-insight-grid/style3"
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/news-insight-grid/style3">
                          News &amp; Insight 03
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/news-insight-grid/details"
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/news-insight-grid/details">
                          News &amp; Insight Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname === "/pricing" ? "active" : ""}>
                    <Link href="/pricing">Pricing Plan</Link>
                  </li>
                  <li
                    className={pathname.startsWith("/career") ? "active" : ""}
                  >
                    <Link href="/career">Career</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("carrer")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "carrer" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "carrer" ? "d-block" : "none"
                      }`}
                    >
                      <li className={pathname === "/career" ? "active" : ""}>
                        <Link href="/career">Career</Link>
                      </li>
                      <li
                        className={
                          pathname === "/career/details" ? "active" : ""
                        }
                      >
                        <Link href="/career/details">Career Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname.startsWith("/shop") ? "active" : ""}>
                    <Link href="/shop">Shop</Link>
                    <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu("shop")}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "shop" ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "shop" ? "d-block" : "none"
                      }`}
                    >
                      <li className={pathname === "/shop" ? "active" : ""}>
                        <Link href="/shop">Shop</Link>
                      </li>
                      <li className={pathname === "/cart" ? "active" : ""}>
                        <Link href="/cart">Cart</Link>
                      </li>
                      <li className={pathname === "/checkout" ? "active" : ""}>
                        <Link href="/checkout">Checkout</Link>
                      </li>
                      <li
                        className={
                          pathname === "/product-details" ? "active" : ""
                        }
                      >
                        <Link href="/product-details">Product Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname === "/faq" ? "active" : ""}>
                    <Link href="/faq">FAQ’s</Link>
                  </li>
                  <li className={pathname === "/contact" ? "active" : ""}>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul> */}
              </li>
              <li className={`menu-item ${isPortfolioActive ? "active" : ""}`}>
                <Link href="/news-insight-grid" className="drop-down">
                  Blog{" "}
                </Link>
                <i
                  onClick={() => toggleMenu("portfolio")}
                  className={`bi bi-${
                    state.activeMenu === "portfolio" ? "dash" : "plus"
                  } dropdown-icon`}
                />
                {/* <ul
                  className={`sub-menu ${
                    state.activeMenu === "portfolio" ? "d-block" : "none"
                  }`}
                >
                  <li
                    className={
                      pathname === "/portfolio/classic" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/classic">Portfolio Classic</Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/creative" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/creative">Portfolio Creative</Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/caption" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/caption">Portfolio Caption</Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/horizontal" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/horizontal">
                      Portfolio Horizontal
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/carousel" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/carousel">Portfolio Carousel</Link>
                  </li>
                  <li
                    className={
                      pathname === "portfolio/vertical" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/vertical">Portfolio Vertical</Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/interactive-link" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/interactive-link">
                      Interactive Link
                    </Link>
                  </li>
                  <li
                    className={pathname === "/portfolio/grid" ? "active" : ""}
                  >
                    <Link href="/portfolio/grid">Portfolio Grid</Link>
                  </li>
                  <li
                    className={
                      pathname === "/portfolio/details" ? "active" : ""
                    }
                  >
                    <Link href="/portfolio/details">Portfolio Details</Link>
                  </li>
                </ul> */}
              </li>
            </ul>
            <div className="btn-and-contact-area d-lg-none d-block">
              <div className="contact-area">
                <div className="icon">
                  <img src="/assets/img/home1/icon/support-icon.svg" alt="" />
                </div>
                <div className="content">
                  <span>Our Support</span>
                  <h6>
                    <a href="tel:+997636844563">+99-763 684 4563 </a>
                  </h6>
                </div>
              </div>
              <Link href="/contact" className="primary-btn1">
                <span>
                  Contact
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
                  Contact
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
              </Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/contact" className="primary-btn1 d-lg-flex d-none">
              <span>
                Contact
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
                Contact
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
            </Link>
            <div
              className="sidebar-button mobile-menu-btn"
              onClick={toggleSidebar}
            >
              <svg
                width={20}
                height={18}
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z" />
                <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z" />
                <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
