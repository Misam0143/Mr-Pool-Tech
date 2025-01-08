import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./Guide.module.css";
import guide1 from "../assets/images/guide1.jpg";
import guide2 from "../assets/images/guide2.jpg";
import { MdOutlinePlayArrow } from "react-icons/md";

const Guide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 p-0">
                <div className={styles.buyerheading}>
                  <div className={styles.buyerchild}>
                    <div className={styles.buyersubchild}>
                      <p>BUYERS GUIDE VIDEOS</p>
                    </div>
                  </div>
                  <h1>Design Guide</h1>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-start">
              <div className="col-md-4 p-0">
                <div className={styles.guidetxt}>
                  <p>
                    The basic principles and concepts of good swimming pool
                    design. It is aimed at all those involved in developing
                    swimming provision, points to further information and gives
                    a number of best practice examples.
                  </p>
                </div>
              </div>

              <div className="col-md-7 p-0">
                <div className={styles.guidevideo1}>
                  <div className={`${styles.img1} ${styles.additionalClass}`}>
                    {/* Video preview image */}
                    <img src={guide1} alt="Swimming Pool Design Guide" />

                    <div className={styles.img1child}>
                      {/* Play button to open modal */}
                      <div className={styles.imgicon} onClick={handleOpenModal}>
                        <MdOutlinePlayArrow className={styles.imgicon1} />
                      </div>

                      <p>How Pool Works?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`row d-flex justify-content-center align-items-center ${styles.newClass}`}
            >
              <div className="col-md-7 p-0">
                <div className={styles.guidevideo2}>
                  <div className={styles.img1}>
                    <img src={guide2} alt="Swimming Pool Design Guide" />

                    <div className={styles.img1child}>
                      <div className={styles.imgicon} onClick={handleOpenModal}>
                        <MdOutlinePlayArrow className={styles.imgicon1} />
                      </div>

                      <p>How Pool Works?</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-0">
                <div className={styles.guidetxt}>
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=BMhX34awoHU"
              className={styles.reactPlayer}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Guide;
