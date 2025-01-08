import React from "react";
import logo from "../assets/images/logo.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

// import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid p-0 m-0">
            <div
              className={`row ${styles.footerContainer} d-flex justify-content-center align-items-start`}
            >
              <div className={`col-lg-4 col-md-6 ${styles.footerItem}`}>
                <Link to="/" className="nav-link">
                  <div className={styles.footerlogo}>
                    <img src={logo} alt="Logo" />
                  </div>
                </Link>
              </div>

              <div
                className={`col-lg-4 col-md-6 col-sm-3 ${styles.footerItem}`}
              >
                <ul>
                  <li>
                    <span>
                      <img
                        width="27"
                        height="27"
                        src="https://img.icons8.com/sf-regular/2967b3/home.png"
                        alt="home"
                      />
                      <a href="https://www.google.com/maps/search/++41-F+Commercial+Phase-1+DHA+Lahore,+Cantt./@31.4723958,74.3800352,569m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <p>41-F Commercial Phase-1 DHA Lahore, Cantt.</p>
                      </a>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="27"
                        height="27"
                        src="https://img.icons8.com/sf-regular/2967b3/home.png"
                        alt="home"
                      />
                      <a href="https://www.google.com/maps/place/Asad+Plazaa/@31.5919804,74.452413,568m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391911d61410d381:0xca2bbe72874a7464!8m2!3d31.5919759!4d74.4549879!16s%2Fg%2F11scjqzb5m?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <p>
                          Asad Plaza Near Manawan Police Training Center Lahore.
                        </p>
                      </a>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/fluency-systems-regular/100/2967b3/new-post.png"
                        alt="new-post"
                      />

                      <p>
                        <a href="mailto: accounts@mrpooltech.pk">
                          accounts@mrpooltech.pk
                        </a>
                      </p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className={`col-lg-4 col-md-6 ${styles.footerItem}`}>
                <ul>
                  <li>
                    <span>
                      <img
                        width="22"
                        height="22"
                        src="https://img.icons8.com/windows/2967b3/iphone-x.png"
                        alt="phone"
                      />
                      <p>
                        <a href="tel:+92-324-4240250">+92-324-4240250</a>
                      </p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="22"
                        height="22"
                        src="https://img.icons8.com/windows/2967b3/iphone-x.png"
                        alt="phone"
                      />
                      <p>
                        <a href="tel:+92-042-35691747">+92-042-35691747</a>
                      </p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/fluency-systems-regular/100/2967b3/new-post.png"
                        alt="new-post"
                      />

                      <p>
                        <a href="mailto:info@mrpooltech.pk">
                          info@mrpooltech.pk
                        </a>
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`row ${styles.footerContainer1} d-flex justify-content-center align-items-start`}
            >
              <div className={`col-lg-4 col-md-6 ${styles.footerItem}`}>
                <div className={styles.footerlogo}>
                  <img src={logo} alt="Logo" />
                </div>
              </div>

              <div
                className={`col-lg-4 col-md-6 col-sm-3 ${styles.footerItem}`}
              >
                <ul>
                  <li>
                    <span>
                      <img
                        width="27"
                        height="27"
                        src="https://img.icons8.com/sf-regular/2967b3/home.png"
                        alt="home"
                      />
                      <a href="https://www.google.com/maps/search/++41-F+Commercial+Phase-1+DHA+Lahore,+Cantt./@31.4723958,74.3800352,569m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <p>41-F Commercial Phase-1 DHA Lahore, Cantt.</p>
                      </a>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="27"
                        height="27"
                        src="https://img.icons8.com/sf-regular/2967b3/home.png"
                        alt="home"
                      />
                      <a href="https://www.google.com/maps/place/Asad+Plazaa/@31.5919804,74.452413,568m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391911d61410d381:0xca2bbe72874a7464!8m2!3d31.5919759!4d74.4549879!16s%2Fg%2F11scjqzb5m?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <p>
                          Asad Plaza Near Manawan Police Training Center Lahore.
                        </p>
                      </a>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/fluency-systems-regular/100/2967b3/new-post.png"
                        alt="new-post"
                      />

                      <p>
                        <a href="mailto: accounts@mrpooltech.pk">
                          accounts@mrpooltech.pk
                        </a>
                      </p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className={`col-lg-4 col-md-6 ${styles.footerItem}`}>
                <ul>
                  <li>
                    <span>
                      <img
                        width="23"
                        height="23"
                        src="https://img.icons8.com/fluency-systems-regular/100/2967b3/new-post.png"
                        alt="new-post"
                      />

                      <p>
                        <a href="mailto:info@mrpooltech.pk">
                          info@mrpooltech.pk
                        </a>
                      </p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="22"
                        height="22"
                        src="https://img.icons8.com/windows/2967b3/iphone-x.png"
                        alt="phone"
                      />
                      <p>
                        <a href="tel:+92-324-4240250">+92-324-4240250</a>
                      </p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <img
                        width="22"
                        height="22"
                        src="https://img.icons8.com/windows/2967b3/iphone-x.png"
                        alt="phone"
                      />
                      <p>
                        <a href="tel:+92-042-35691747">+92-042-35691747</a>
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-0 d-flex justify-content-center align-items-center ">
                <p className={styles.copyright}>
                  <span>
                    {" "}
                    <a href="https://avicennaenterprise.com/">
                      {" "}
                      Modified and Developed by Avicenna Enterprise Solutions.
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
