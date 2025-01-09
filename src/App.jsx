import { useState } from "react";
import AboutUs from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicemain from "./Components/Servicemain";
import OurProjects from "./Components/OurProjects";
import ContactUs from "./Components/Contact";
import ScrollToTop from "./Components/Scroll"; 


import HOME from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Servicemain" element={<Servicemain />} />
          <Route path="/OurProjects" element={<OurProjects />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
