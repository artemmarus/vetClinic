import React from "react";
import { Col } from "react-bootstrap";
// import logoSyringe from "../assest/images/syringe.svg"

import "../styles/Services.css";

export const ServiceCard = ({name, description, icon}) => {


    return(
        <Col size={12} sm={6} md={4}>
      <div className="service-imgbx">
        <img src={icon} className = "img-icon" alt="icon"/>
        <div className="service-txtx">
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}