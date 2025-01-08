import React from "react";
import styles from "./OurProjects.module.css";
import Header from "./Header";
import Footer from "./Footer";
import projectImg from "../assets/images/img1.jpg";


const OurProjects = () => {
  const data = [
    {
      sNo: 1,
      description: "DHA Phase-III",
      qty: 1,
      clientName: "Mr. Hamza Malik",
    },
    { sNo: 2, description: "DHA Phase-III", qty: 1, clientName: "Mr. Rizwan" },
    { sNo: 3, description: "DHA Phase-III", qty: 1, clientName: "Mr. Faraz" },
    {
      sNo: 4,
      description: "DHA Phase-V",
      qty: 3,
      clientName: "Mr. Shazil Malik",
    },
    {
      sNo: 5,
      description: "DHA Phase-V",
      qty: 3,
      clientName: "Mr. Basit Malik",
    },
    { sNo: 6, description: "DHA Phase-VII", qty: 3, clientName: "Mr. Basit" },
    {
      sNo: 7,
      description: "DHA Phase-VI",
      qty: 3,
      clientName: "Mr. Jahanzaib Malik",
    },
    { sNo: 8, description: "Farmhouse", qty: 3, clientName: "Mr. Nouman" },
    {
      sNo: 9,
      description: "Hotel 2nd Floor",
      qty: 3,
      clientName: "Mr. Abdullah",
    },
    {
      sNo: 10,
      description: "DHA Phase-VI",
      qty: 3,
      clientName: "Mr. Afzal Qureshi",
    },
  ];

  return (
    <>
      <Header page={"OurProjects"} heroText={"Our Projects"}    descript={
          "At Mr. Pool, we specialize in transforming dreams into aquatic masterpieces. With years of expertise and a passion for excellence, we have become a trusted name in creating stunning pools and water features that redefine outdoor living."
        }  />

      <main>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12  d-flex justify-content-center align-items-center flex-column ">
                <div className={styles.tableheading}>


                  <h1>Current Project Detail</h1>

                </div>
                <div className={styles.tableWrapper}>
                  <table>
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Description</th>
                        <th>QTY</th>
                        <th>Client Name</th>
                      </tr>


                      
                    </thead>
                    <tbody>
                      {data.map((row) => (
                        <tr key={row.sNo}>
                          <td>{row.sNo}</td>
                          <td>{row.description}</td>
                          <td>{row.qty}</td>
                          <td>{row.clientName}</td>
                        </tr>
                      ))}
                    </tbody>


                  </table>

                </div>
              </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center align-items-center ">
              <div className="col-md-12 p-0 d-flex justify-content-center align-items-center ">
                <div className={styles.projectsub}>
                  <img src={projectImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OurProjects;
