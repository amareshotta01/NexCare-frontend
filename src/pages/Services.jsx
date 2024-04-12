import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Services = () => {
  return (
    <>
    <Header/>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
};

export default Services;
