import React from 'react'
import '../styles/NavBar.css'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import ModIcon from './ModIcon';

import logo from "../assest/images/LogoArtVet.png";

import instLogo from '../assest/icons/icon-instagram.svg';
import faceLogo from '../assest/icons/icon-facebook.svg';


export function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router className="baseNavBar">
      <Navbar className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand >
            <a href="/">
              <img src={logo}
                alt="Ветеринра клініка АртВет"
                className='nav-logo' />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>Головна</Nav.Link>
              <Nav.Link href="#doctors"
                className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('team')}>Наша команда</Nav.Link>
              <Nav.Link href="#price"
                className={activeLink === 'price' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('price')}>Послуги та вартість</Nav.Link>
              <Nav.Link href="#patien"
                className={activeLink === 'patien' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('patien')}>Пацієнту</Nav.Link>
              <Nav.Link href="#contacts"
                className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('contacts')}>Контакти</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.instagram.com/vetclinic_artvet/"><img src={instLogo} alt="" /></a>
                <a href="https://www.facebook.com/artvet.kiev.ua/"><img src={faceLogo} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button onClick={() => setIsOpen(true)}
                        className="vvd"><span>Записатися на прийом</span></button>
                        {isOpen && <ModIcon setIsOpen={setIsOpen} />}
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}