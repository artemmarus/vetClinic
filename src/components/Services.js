import React from "react";
import { Row, Container, Tab, Nav, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ServiceCard } from "./ServiceCard";
import prices from "../assest/anoth/price";
import "../styles/Services.css";

export const Services = () => {

    return (
        <section className="service" id="service">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Послуги ВетКлініки</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id="services-tabs" defaultActiveKey="antonovich">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="antonovich">вул. Антоновича, 125В</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="miloslavska">вул. Милославська, 43А</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sivashska">вул. Сивашська, 1 </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="antonovich">
                                                <Row className="service-box">
                                                    {
                                                        prices.map((file, index) => {
                                                            return (
                                                                <ServiceCard
                                                                    key = {index}
                                                                    name = {file.name}
                                                                    description = {file.description}
                                                                    icon = {file.icon}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="miloslavska">
                                                <Row>
                                                    {
                                                        prices.map((file, index) => {
                                                            return (
                                                                <ServiceCard
                                                                    key = {index}
                                                                    name = {file.name}
                                                                    description = {file.description}
                                                                    icon = {file.icon}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sivashska">
                                                <Row>
                                                    {
                                                        prices.map((file, index) => {
                                                            return (
                                                                <ServiceCard
                                                                    key = {index}
                                                                    name = {file.name}
                                                                    description = {file.description}
                                                                    icon = {file.icon}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={""} alt=""></img>
        </section>
    )
}