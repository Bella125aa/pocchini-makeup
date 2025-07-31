import React, { useState } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import './paginaIA.module.css';
import { HiOutlineSparkles } from "react-icons/hi";
import AIServiceAPI from "../../services/AIServiceAPI"
import Style from './paginaIA.module.css';

function ChatIA() {
    const [mensagem, setMensagem] = useState('');
    const [resposta, setResposta] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mensagem.trim()) return;

        try {
            const respostaAPI = await AIServiceAPI.EnviarPrompt(mensagem);
            setResposta(respostaAPI);
        } catch (error) {
            setResposta("Erro ao conectar com a IA. Tente novamente mais tarde.");
            console.error(error);
        }

        setMensagem('');
    };

    return (
        <div className={Style.chatiabg + "py-5"}>
            <Container className="text-center">
                <h2 className="mb-2"> <HiOutlineSparkles /> Assistente IA</h2>
                <p className="mb-4">
                    Converse com nossa assistente inteligente especializada em beleza e estética
                </p>

                <Card className={Style.chatiacard + " mx-auto shadow-sm"}>
                    <Card.Body>
                        <h5 className="text-start"> <HiOutlineSparkles /> Chat com IA</h5>
                        <p className="text-start text-muted small mb-4">
                            Faça perguntas sobre procedimentos, cuidados ou agende seu atendimento
                        </p>

                        <div className={Style.chatiaempty + "mb-4"}>
                            {resposta ? (
                                <p className="text-start text-muted">{resposta}</p>
                            ) : (
                                <>
                                    <div className= {Style.chatiaicons}><HiOutlineSparkles /></div>
                                    <p className="text-muted">Inicie uma conversa com nossa IA especializada</p>
                                </>
                            )}
                        </div>

                        <Form className="d-flex chatia-form" onSubmit={handleSubmit}>
                            <Form.Control
                                type="text"
                                placeholder="Digite sua mensagem..."
                                className="chatia-input"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                            />
                            <button type="submit" className={Style.botaoprimarioo}>
                                Enviar
                            </button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default ChatIA;
