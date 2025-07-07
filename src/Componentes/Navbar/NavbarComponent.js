import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavbarComponent.module.css';
import { BsHouseHeart } from "react-icons/bs";
import { BsSearchHeart } from "react-icons/bs";
import { BsCalendarHeart } from "react-icons/bs";
import { BsHearts } from "react-icons/bs";
import BotaoSair from '../SairComponent';
import { BsCalendarHeartFill } from "react-icons/bs";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className={styles['navbar_custom']}>
      <Container>
        <Navbar.Brand as={Link} to="/home" className={styles['navbar_brand']}>
          <BsHearts style={{ marginRight: '8px', fontSize: '1.5rem' }} />
          Juliana Pocchini Makeup
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic_navbar_nav" className={styles['navbar_toggler']} />
        <Navbar.Collapse id="basic_navbar_nav">
          <Nav className="ms_auto">
            <Nav.Link as={Link} to="/home" className={styles['nav_link']}>
              <BsHouseHeart style={{ marginRight: '8px', fontSize: '1.7rem' }} />
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/agendamento" className={styles['nav_link']}>
              <BsCalendarHeart style={{ marginRight: '8px', fontSize: '1.5rem' }} />
              Agendamento
            </Nav.Link>
            <Nav.Link as={Link} to="/meusagendamentos" className={styles['nav_link']}>
              <BsCalendarHeartFill style={{ marginRight: '8px', fontSize: '1.5rem' }} />
              Meus Agendamentos
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre" className={styles['nav_link']}>
              <BsSearchHeart style={{ marginRight: '8px', fontSize: '1.5rem' }} />
              Sobre Mim
            </Nav.Link>
            {/* Botao Sair */}
            <BotaoSair />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
