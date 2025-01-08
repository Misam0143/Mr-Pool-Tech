import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Components/Brands.module.css";
import brand1 from "../assets/images/logo/hayward.png";
import brand2 from "../assets/images/logo/laswim.png";
import brand3 from "../assets/images/logo/pentair.png";
import brand4 from "../assets/images/logo/person.png";
import brand5 from "../assets/images/logo/sta-rite.png";
import brand6 from "../assets/images/logo/waterco.png";

const Brands = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 546,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles.submain}>
        <div className="container-fluid  ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12  d-flex justify-content-center align-items-center  p-0">
              <Slider {...settings} className={styles.carousel}>
                <div className={styles.brand1img}>
                  <img src={brand1} alt="Brand 1" />
                </div>
                <div className={styles.brand1img}>
                  <img src={brand2} alt="Brand 2" />
                </div>
                <div className={styles.brand1img}>
                  <img src={brand3} alt="Brand 3" />
                </div>
                <div className={styles.brand1img}>
                  <img src={brand4} alt="Brand 4" />
                </div>
                <div className={styles.brand1img}>
                  <img src={brand5} alt="Brand 5" />
                </div>

                <div className={styles.brand1img}>
                  <img src={brand6} alt="Brand 6" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brands;
