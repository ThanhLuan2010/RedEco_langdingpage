import Footer from "../../components/Footer";
import Banner from "./Banner";
import Commit from "./Commit";
import Content from "./content";
import Customer from "./Customer";
import Mission from "./Mission";
import ScopeOfService from "./ScopeOfService";
import StatisticalData from "./statisticalData";
import Vison from "./Vison.index";

import PhoneButton from "../../components/phoneButton";
function About() {
  return (
    <div className="pt-[10vh]">
      <Banner />
      <Content />
      <StatisticalData />
      <Vison />
      <Mission />
      <div id="scope-of-service" className="scroll-mt-[15vh]">
        <ScopeOfService />
      </div>
      <Customer />
      <Commit />
      <PhoneButton />
      <Footer />
    </div>
  );
}

export default About;
