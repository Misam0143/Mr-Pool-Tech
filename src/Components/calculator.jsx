import React, { useState } from "react";
import styles from "./calculator.module.css";
import RectImg from "../assets/CalculatorImages/Rectangle.jpg";
import Circle from "../assets/CalculatorImages/Circle.jpg";
import Triangle from "../assets/CalculatorImages/Triangle.jpg";

import navImg1 from "../assets/CalculatorImages/nav1.png";
import navImg3 from "../assets/CalculatorImages/nav3.png";
import navImg4 from "../assets/CalculatorImages/nav4.png";

import group1 from "../assets/CalculatorImages/Group 1.png";
import group3 from "../assets/CalculatorImages/Group 3.png";
import group4 from "../assets/CalculatorImages/Group 4.png";

const Calculator = () => {
  const [selectedShape, setSelectedShape] = useState("rectangle"); 
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [shallowEnd, setShallowEnd] = useState("");
  const [volume, setVolume] = useState(0);
  const [largeDiameter, setLargeDiameter] = useState("");
  const [smallDiameter, setSmallDiameter] = useState("");
  const [radius, setRadius] = useState("");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  // Reset all input fields
  const resetInputs = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setShallowEnd("");
    setVolume(0);
    setLargeDiameter("");
    setSmallDiameter("");
    setRadius("");
    setBase("");
    setHeight("");
  };

  // Calculation Functions
  const calculateRectangularVolume = () => {
    if (!length || !width || !depth || !shallowEnd) {
      alert("Please fill out all fields.");
      return;
    }
    const averageDepth = (parseFloat(depth) + parseFloat(shallowEnd)) / 2;
    const cubicFeet = parseFloat(length) * parseFloat(width) * averageDepth;
    const gallons = cubicFeet * 7.48; // 1 cubic foot = 7.48 gallons
    setVolume(gallons.toFixed(2));
  };



  const calculateCircularVolume = () => {
    if (!radius || !depth || !shallowEnd) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Convert inputs to numbers
    const radiusValue = parseFloat(radius);
    const depthValue = parseFloat(depth);
    const shallowEndValue = parseFloat(shallowEnd);
  
    // Check for valid (positive) values
    if (radiusValue <= 0 || depthValue <= 0 || shallowEndValue <= 0) {
      alert("All values must be greater than 0.");
      return;
    }
  
    // Calculate the average depth
    const avgDepth = (depthValue + shallowEndValue) / 2;
  
    // Calculate the volume in cubic feet
    const volumeInCubicFeet = Math.PI * Math.pow(radiusValue, 2) * avgDepth; // πr²h
  
    // Convert cubic feet to gallons with a scaling factor for precision
    // const scalingFactor = 1.023;
    const volumeInGallons = volumeInCubicFeet * 7.50 ;
  
    // Set the calculated volume
    setVolume(volumeInGallons.toFixed(2));
  };
  

  const calculateTriangularVolume = () => {
    if (!base || !height || !depth || !shallowEnd) {
      alert("Please fill out all fields.");
      return;
    }
    const averageDepth = (parseFloat(depth) + parseFloat(shallowEnd)) / 2;
    const volumeCubicFeet =
      (parseFloat(base) * parseFloat(height) * averageDepth) / 2; // Triangular prism formula
    const volumeGallons = volumeCubicFeet * 7.48125; // Convert to gallons
    setVolume(volumeGallons.toFixed(2));
  };

  const renderCalculatorForm = () => {
    switch (selectedShape) {
      case "rectangle":
        return (
          <>
            <div className={styles.calculatormain}>
              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Length (A):</p>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setLength(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Width (B):</p>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setWidth(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Deep End (ft):</p>
                  <input
                    type="number"
                    value={depth}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setDepth(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Shallow End (ft):</p>
                  <input
                    type="number"
                    value={shallowEnd}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setShallowEnd(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <button
                onClick={calculateRectangularVolume}
                className={styles.calculateButton}
              >
                Calculate Volume
              </button>
            </div>
          </>
        );
      case "oblong":
        return (
          <>
            <div className={styles.calculatormain}>
              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Large Diameter:</p>
                  <input
                    type="number"
                    value={largeDiameter}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setLargeDiameter(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Small Diameter:</p>
                  <input
                    type="number"
                    value={smallDiameter}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setSmallDiameter(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Length (ft):</p>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setLength(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Deep End (ft):</p>
                  <input
                    type="number"
                    value={depth}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setDepth(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <label className={styles.formlabel}>
                <p>Shallow End (ft):</p>
                <input
                  type="number"
                  value={shallowEnd}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value >= 0 || value === "") {
                      // Ensures no negative values
                      setShallowEnd(value);
                    }
                  }}
                  className={styles.formInput}
                />
              </label>

              <button
                onClick={calculateOblongVolume}
                className={styles.calculateButton}
              >
                Calculate Volume
              </button>
            </div>
          </>
        );
      case "circle":
        return (
          <>
            <div className={styles.calculatormain}>
              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Radius (ft):</p>
                  <input
                    type="number"
                    value={radius}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setRadius(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Deep End (ft):</p>
                  <input
                    type="number"
                    value={depth}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setDepth(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Shallow End (ft):</p>
                  <input
                    type="number"
                    value={shallowEnd}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setShallowEnd(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <button
                onClick={calculateCircularVolume}
                className={styles.calculateButton}
              >
                Calculate Volume
              </button>
            </div>
          </>
        );
      case "triangle":
        return (
          <>
            <div className={styles.calculatormain}>
              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Base (ft):</p>
                  <input
                    type="number"
                    value={base}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setBase(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Height (ft):</p>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setHeight(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <div className={styles.mainlable}>
                <label className={styles.formlabel}>
                  <p>Deep End (ft):</p>
                  <input
                    type="number"
                    value={depth}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setDepth(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>

                <label className={styles.formlabel}>
                  <p>Shallow End (ft):</p>
                  <input
                    type="number"
                    value={shallowEnd}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value >= 0 || value === "") {
                        // Ensures no negative values
                        setShallowEnd(value);
                      }
                    }}
                    className={styles.formInput}
                  />
                </label>
              </div>

              <button
                onClick={calculateTriangularVolume}
                className={styles.calculateButton}
              >
                Calculate Volume
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Shape content for heading and image
  const shapeContent = {
    rectangle: {
      heading: "Rectangular Pool",
      image: RectImg,
    },
  
    circle: {
      heading: "Circular Pool",
      image: Circle,
    },
    triangle: {
      heading: "Triangular Pool",
      image: Triangle,
    },
  };

  const { heading, image } = shapeContent[selectedShape];

  return (
    <div className={styles.main}>
      <h1>Pool Volume Calculator</h1>
      <nav className={styles.navMenu}>
        {/* rectangle btn */}
        <div
          onClick={() => {
            resetInputs();
            setSelectedShape("rectangle");
          }}
          className={`${styles.navButton} ${
            selectedShape === "rectangle" ? styles.activeButton : ""
          }`}
        >
          <div className={styles.Img1}>
            <img
              src={selectedShape === "rectangle" ? group1 : navImg1} // Toggle image based on selectedShape
              alt=""
            />
          </div>
        </div>

        {/* Circle Btn */}
        <div
          onClick={() => {
            resetInputs();
            setSelectedShape("circle");
          }}
          className={`${styles.navButton} ${
            selectedShape === "circle" ? styles.activeButton : ""
          }`}
        >
          <div className={styles.Img2}>
            <img
              src={selectedShape === "circle" ? group3 : navImg3} // Toggle image based on selectedShape
              alt=""
              // style={{ width: "60px", height: "60px" }}
            />
          </div>
        </div>

        {/* Triangle Btn */}
        <div
          onClick={() => {
            resetInputs();
            setSelectedShape("triangle");
          }}
          className={`${styles.navButton} ${
            selectedShape === "triangle" ? styles.activeButton : ""
          }`}
        >
          <div className={styles.Img1}>
            <img
              src={selectedShape === "triangle" ? group4 : navImg4} // Toggle image based on selectedShape
              alt=""
            />
          </div>
        </div>
      </nav>

      {/* Calculator Form */}
      <div className={styles.calculatorContainer}>
        <div className={styles.mainImg}>
          <h1>{heading}</h1>
          <div className={styles.calcImage}>
            <img src={image} alt={heading} />
          </div>
        </div>

        {renderCalculatorForm()}

        <div className={styles.resultText}>
          <p>Pool Volume:</p>
          <strong>{volume}</strong>
          <p> Gallons</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
