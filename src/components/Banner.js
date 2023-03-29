import React from "react";
import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

import dogBanner from '../assest/images/Dog_banner.png'
import '../styles/Banner.css'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(1);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["ветеринарна клініка", "дружня команда", "професіонали"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 3) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Вітаємо в АртВет</span>
                                    <h1>Привіт! Ми <span className="txt-rotate" dataperiod="1000" data-rotate='["ветеринарна клініка", "дружня команда", "професіонали"]'>
                                        <span className="wrap">{text}</span>
                                    </span></h1>
                                    <p>У нас є все необхідне, щоб у максимально короткі терміни провести комплексне апаратне та лабораторне обстеження вихованця, адже чим раніше поставлено діагноз, тим ефективнішим буде лікування. 
                                        УЗД (у тому числі складні обстеження серця), цифрова рентгенографія, 
                                        електрокардіографія, офтальмо- та отоскопія (обстеження вух тварини), лабораторні дослідження, включаючи високоточні експрес-тести на інфекційні захворювання.</p>
                                    <button onClick={() => console.log('connect')}>Продовжимо знайомство <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div style={{'overflow': 'hidden'}} 
                                className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                >
                                    <img src={dogBanner} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}