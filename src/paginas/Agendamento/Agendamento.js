import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Styles from './Agendamento.module.css';

function Agendamento() {
  return (
    <div className={Styles.agendamentoSection}>
      <h2 className={Styles.tituloPrincipal}>Agendar Maquiagem</h2>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className={Styles.cardFormulario}>
              <Card.Body>
                <Card.Title className={Styles.cardTitulo}>Informações do Agendamento</Card.Title>
                <Card.Subtitle className={Styles.cardSubtitulo}>Todos os campos marcados com <strong>*</strong> são obrigatórios</Card.Subtitle>

                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nome Completo *</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome completo" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Telefone/WhatsApp *</Form.Label>
                        <Form.Control type="text" placeholder="(11) 99999-9999" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="seu.email@exemplo.com" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de Maquiagem *</Form.Label>
                    <Form.Select required>
                      <option>Selecione o tipo de maquiagem</option>
                      <option>Casual</option>
                      <option>Formal</option>
                      <option>Noiva</option>
                    </Form.Select>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Data Desejada *</Form.Label>
                        <Form.Control type="date" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Horário Desejado *</Form.Label>
                        <Form.Select required>
                          <option>Selecione o horário</option>
                          <option>8h</option>
                          <option>10h</option>
                          <option>14h</option>
                          <option>16h</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Local da Maquiagem</Form.Label>
                    <Form.Control type="text" placeholder="Endereço onde será realizada a maquiagem" />
                  </Form.Group>

                  <Button className={Styles.botaoAgendarr}>Confirmar Agendamento</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={Styles.cardServicos}>
              <Card.Body>
                <Card.Title className={Styles.cardTituloLateral}>Nossos Serviços</Card.Title>
                <div className={Styles.servicoItem}><strong>Casual</strong><span>R$ 80</span></div>
                <div className={Styles.servicoItem}><strong>Formal</strong><span>R$ 120</span></div>
                <div className={Styles.servicoItem}><strong>Noiva</strong><span>R$ 250</span></div>
              </Card.Body>
            </Card>

            <Card className={Styles.cardServicos}>
              <Card.Body>
                <Card.Title className={Styles.cardTituloLateral}>Informações</Card.Title>
                <p><strong>Horário de Funcionamento</strong><br />
                  Segunda a Sábado: 8h às 18h</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Agendamento;

