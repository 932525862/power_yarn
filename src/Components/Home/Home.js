import Image from "react-bootstrap/Image";
import "../Home/Home.css";
import React from "react";
import Homebacimg from "../../astets/home_img/machine-industry-factory-equipment.jpg";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <div className="homei">
        <img className="home_img" src={Homebacimg} />
      </div>
      <div className="home_text ">
        <h1 className="home_h1 text-wrap    ...">
          Power Yarn - a guarantee of quality and reliability
        </h1>
        <p className="home_p">
          We are committed to offering Cotton Yarns, Poly Cotton Yarns, Dyed
          Yarns,
          <br /> Fancy Yarns, Towel, Bed Sheets, Textile Waste / Spinning Waste{" "}
          <br />
          (hard waste and soft waste) on competitive rates
        </p>
        <div className="btn-all">
          <div className="bt1">
            <Button variant="primary" className="mx-2 fdn">
              <a href="#About">Know More</a>
            </Button>
          </div>
          <div className="bt1">
            <Button variant="secondary" className="mx-1 fdn">
              <a href="#Leave">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
