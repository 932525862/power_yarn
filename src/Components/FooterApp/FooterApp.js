import React from "react";
import "../FooterApp/FooterApp.css";
import Logo from "../../astets/navbar_img/icons8-thread-50 (2).png"
export const FooterApp = () => {
  return (
    <div className="footerbac">     
      <div className="flex flex-shrink-0 items-center pawer_centr">
        <h1 className="powers">POWER</h1>
        <img className="h-8 w-auto logos" src={Logo} alt="Your Company" />
        <h1 className="powers">YARN</h1>
      </div>

	  <h1 className="home_h1 text-wrap dsds    ...">
          Power Yarn - a guarantee of quality and reliability
        </h1>
    </div>
  );
};
