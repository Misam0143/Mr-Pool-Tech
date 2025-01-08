import { useState } from "react";
import Header from "./Header";
import Builders from "./Builders";
import Services from "./Services";
import Models from "./Models";
import Brands from "./Brands";
import Green from "./Green";
import Serve from "./Serve";
import Footer from "./Footer";
import Guide from "./Guide";
import Calcpool from "./calculator";


function HOME() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        page={"home"}
        heroText={"Build Your Dream Swimming Pool"}
        descript={
          "Capture the beauty, luxury, and joy of your perfect swimming pool with Mr. Pool. Our services are designed to transform your backyard into a breathtaking oasis that you’ll treasure for years to come."
        }
      />

      <Builders />
      <Services />
      <Serve />
      <Models />
      <Brands />
      <Guide />
      <Green />
      <Calcpool />


      <Footer />
    </>
  );
}

export default HOME;
