import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsHeartArrow } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import styles from './Navbar/NavbarComponent.module.css';

function BotaoSair() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const navegar = useNavigate();

    const abrirModal = () => setMostrarModal(true);
    const fecharModal = () => setMostrarModal(false);
    const confirmarSaida = () => {
        fecharModal();
        navegar('/login');
    };

    return (
        <>
            {/* BOTÃO NA NAVBAR */}
            <Nav.Link onClick={abrirModal} className={styles['nav_link']}>
                <BsHeartArrow style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                Sair
            </Nav.Link>

            {/* MODAL DE CONFIRMAÇÃO */}
            <Modal show={mostrarModal} onHide={fecharModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja sair?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja sair da sua conta?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={fecharModal}>
                        Não
                    </Button>
                    <Button variant="danger" onClick={confirmarSaida}>
                        Sim, sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BotaoSair;
