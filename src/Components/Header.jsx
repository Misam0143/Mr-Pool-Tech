import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import BgImg1 from "../assets/images/bg-img.jpg";
import BgImg2 from "../assets/images/bg-img2.jpg";
import { SlArrowUp } from "react-icons/sl";

const Header = ({ page, descript , heroText }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselItems = [
    {
      src: BgImg1,
      alt: "Landscape",
      slogan: " Keep It Clean, Keep It Cool, Call Mr.Pool",
    },
    { src: BgImg2, alt: "Camera", slogan: heroText },
  ];

  // Carousel transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Hide text during the transition
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length); // Change image
        setShowText(true); // Show text for the new image
      }, 1100); // 1.1s delay to match the transition duration
    }, 3000); // Change image every 9 seconds
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Scroll event listener to change the header background and arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container-fluid p-0 w-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-md-12 p-0">
          <nav>
            <div className={`${styles.header}`}>
              <div
                className={`${styles.headermain} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                <Link to="/" className="nav-link">
                  <div className={styles.headerLogo}>
                    <img src={logo} alt="Logo" />
                  </div>
                </Link>

                <div
                  className={`${styles.headerContents} ${
                    isMenuOpen ? styles.menuOpen : ""
                  }`}
                >
                  <div className={styles.headerLogo2}>
                    <img src={logo} alt="Logo" />
                  </div>

                  <ul>
                    <li className={page === "home" ? styles.headerActive : ""}>
                      <Link to="/" className="nav-link">
                        HOME
                      </Link>
                    </li>
                    <li className={page === "about" ? styles.headerActive : ""}>
                      <Link to="/AboutUs" className="nav-link">
                        ABOUT US
                      </Link>
                    </li>
                    <li
                      className={
                        page === "OurProjects" ? styles.headerActive : ""
                      }
                    >
                      <Link to="/OurProjects" className="nav-link">
                        PROJECTS
                      </Link>
                    </li>

                    <li
                      className={
                        page === "Servicemain" ? styles.headerActive : ""
                      }
                    >
                      <Link to="/Servicemain" className="nav-link">
                        SERVICES
                      </Link>
                    </li>
                    <li
                      className={page === "Contact" ? styles.headerActive : ""}
                    >
                      <Link to="/ContactUs" className="nav-link">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>

                  <a href="https://wa.me/03244240250">
                    <button>REQUEST A QUOTE</button>
                  </a>

                  {isMenuOpen && (
                    <div className={styles.closeButton} onClick={closeMenu}>
                    <img width="400" height="400" src="https://img.icons8.com/ios-filled/400/delete-sign--v1.png" alt="delete-sign--v1"/>                    </div>
                  )}
                </div>

                <div className={styles.hamburger} onClick={toggleMenu}>
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/sf-black/2967b3/menu.png"
                    alt="menu"
                  />
                </div>
              </div>
            </div>

            {scrolled && (
              <div
                className={`${styles.arrowscroll} ${styles.smoothShow}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className={styles.arrow1}>
                  <SlArrowUp />
                </div>
              </div>
            )}

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                  <div
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={item.src}
                      className={`d-block w-100 ${styles.bgimg}`}
                      alt={item.alt}
                    />
                    {index === activeIndex && (
                      <div
                        className={`${styles.pooltxt} ${
                          showText ? styles.show : styles.hide
                        }`}
                      >
                        <div className={styles.poolchild}>
                          <div className={styles.poolsubchild}>
                            <p> MR.Pool Tech </p>
                          </div>
                        </div>
                        <h1>{carouselItems[activeIndex].slogan}</h1>
                        <p>{descript}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
