import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Teams.css'
import doctors from '../assest/anoth/doctors.json';
import { Doctor } from "./Doctor";

export const Teams = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="team" id="teams">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="team-bx wow zoomIn">
                            <h2>Наші лікарі</h2>
                            <p>Спеціалісти нашої клініки<br></br> </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme team-slider">
                                {doctors.map(doctor => (
                                    <Doctor
                                        img={doctor.img}
                                        name={doctor.name}
                                        speciality={doctor.speciality}
                                    />))
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={''} alt="" />
        </section>
    )
}