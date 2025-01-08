import React from "react";
import styles from "./Contact.module.css";
import Header from "./Header";
import Footer from "./Footer";
import thanks from "../assets/images/thanks.jpg";

const Contact = () => {
  return (
    <>
      <Header
        page={"Contact"}
        heroText={"Contact Us"}
        descript={
          "We’re here to help make your pool and outdoor living dreams a reality. Whether you have questions, need expert advice, or want to schedule a consultation, our team at Mr. Pool is ready to assist you."
        }
      />

      <main>
        <div className={styles.submain}>
          {/* <div className="row w-100 d-flex justify-content-center align-items-center ">
            <div className="col-md-12 d-flex justify-content-center align-items-center ">
              <div className={styles.Thanksmain}>
                <div className={styles.thanksimg}>
                  <img src={thanks} alt="" />
                </div>
              </div>
            </div>
          </div> */}
          {/* 
          <div className="row mt-5 pt-5 pb-5 w-100 d-flex justify-content-center align-items-center ">
            <div className="col-md-4">
              <div className={styles.touch}>
                <h1>
                  {" "}
                  Let,s Get <br /> In Touch{" "}
                </h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.contactmain}>
                <div className={styles.contact}>
                  <h4>Contact Us</h4>

                  <a href="tel:+92-324-4240250">
                    <p>+92-324-4240250</p>
                  </a>

                  <a href="tel:+92-042-35691747">
                    <p>+92-042-35691747</p>
                  </a>

                  <a href="mailto:https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpRBFKRPdkTxzGmVQGHcbDGmFlQLlcchHdkwrzdVTQgnhntnWFWqFqkGdsfHZrXqVjGV">
                    {" "}
                    <p>info@mrpooltech.pk</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.visitmain}>
                <div className={styles.visit}>
                  <h4>Visit our Site</h4>

                  <a href="http://mrpooltech.pk">
                    <p>www.mrpooltech.pk</p>
                  </a>

                  <a href="http://www.google.com/maps/search/41-F+Commercial+Phase-1+DHA+Lahore,Cantt./@31.4723958,74.3800352,569m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    {" "}
                    <p>
                      {" "}
                      41-F Commercial Phase-1 <br /> DHA Lahore,Cantt.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-md-12 
d-flex justify-content-center align-items-center "
            >
              <div className={styles.getIn}>
                <h1>Let's Get In Touch</h1>
              </div>
            </div>
          </div>

          <div className="row g-5 w-100 d-flex justify-content-center align-items-center ">
            <div
              className="col-md-4 d-flex justify-content-center align-items-center "
            >
              <div className={styles.contactus}>
                <div className={styles.contacticon}>
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/150/ffffff/phone--v1.png"
                    alt="phone--v1"
                  />
                </div>

                <h1>Call Us</h1>

                <a href="tel:+92-324-424-250">Phone: +92-324-4240250</a>
                <a href="tel:+92-042-35691747">Phone: +92-042-35691747</a>
              </div>
            </div>

            <div
              className="col-md-4 d-flex justify-content-center align-items-center "
            >
              <div className={styles.contactus}>
                <div className={styles.contacticon}>
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/fluency-systems-filled/150/ffffff/filled-message.png"
                    alt="filled-message"
                  />
                </div>

                <h1>Mail Us</h1>

                <a href="mailto:info@mrpooltech.pk">
                  Email: info@mrpooltech.pk
                </a>

                <a href="mailto:accounts@mrpooltech.pk">
                  Email: accounts@mrpooltech.pk
                </a>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center align-items-center ">
              <div className={styles.address}>
                <div className={styles.contacticon}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/150/ffffff/marker.png"
                    alt="marker"
                  />
                </div>

                <h1>Address</h1>

            
                <a href="https://www.google.com/maps/place/Asad+Plazaa/@31.5919804,74.452413,568m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391911d61410d381:0xca2bbe72874a7464!8m2!3d31.5919759!4d74.4549879!16s%2Fg%2F11scjqzb5m?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  Asad Plaza Near Manawan Police Training Center Lahore.
                </a>

                <a href="https://www.google.com/maps/search/++41-F+Commercial+Phase-1+DHA+Lahore,+Cantt./@31.4723958,74.3800352,569m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  41-F Commercial Phase-1 DHA Lahore, Cantt.
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
