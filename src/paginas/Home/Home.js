import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Home.module.css';
import { BsStarFill, BsHeartFill, BsCheckCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

function SobreMim() {
    return (
        <div>
            <section className={styles.hero}>
                <Container className="text-center">
                    <h1 className={styles.title}>
                        Juliana Pocchini <span className={styles.highlight}>Makeup</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Transformando sua beleza natural em arte. Especialista em maquiagem para todas as ocasiões,
                        do casual ao dia mais especial da sua vida.
                    </p>
                    <div className={styles.botoess}>
                        <Button className={styles.botaoprimarioo} as={Link} to="/agendamento"  >Agendar Agora</Button>
                        <Button variant="outline" className={styles.botaosecundario} as={Link} to="/sobre" >Conhecer Juliana</Button>
                    </div>
                </Container>
            </section>
            <section className={styles.servicosSection}>
                <Container>
                    <h2 className={styles.title}>Nossos Serviços</h2>
                    <p className={styles.subtitle}>
                        Oferecemos diferentes tipos de maquiagem para cada momento especial da sua vida
                    </p>

                    <Row className="mt-5 text-center">
                        {/* Maquiagem Casual */}
                        <Col md={4}>
                            <div className={styles.card}>
                                <h4>Maquiagem Casual</h4>
                                <p>Para o dia a dia, trabalho ou eventos casuais</p>
                                <h3>R$ 150</h3>
                                <ul>
                                    <li><BsCheckCircle className={styles.icon} /> Preparação da pele</li>
                                    <li><BsCheckCircle className={styles.icon} /> Maquiagem natural</li>
                                    <li><BsCheckCircle className={styles.icon} /> Duração: 1h</li>
                                    <li><BsCheckCircle className={styles.icon} /> Retoques inclusos</li>
                                </ul>
                                <Button className={styles.agendarBtn} as={Link} to="/agendamento">Agendar Agora</Button>

                            </div>
                        </Col>

                        {/* Maquiagem Formal */}
                        <Col md={4}>
                            <div className={`${styles.card} ${styles.destacado}`}>
                                <div className={styles.tag}>Mais Popular</div>
                                <h4>Maquiagem Formal</h4>
                                <p>Para eventos especiais, festas e ocasiões importantes</p>
                                <h3>R$ 250</h3>
                                <ul>
                                    <li><BsCheckCircle className={styles.icon} /> Preparação completa da pele</li>
                                    <li><BsCheckCircle className={styles.icon} /> Maquiagem elaborada</li>
                                    <li><BsCheckCircle className={styles.icon} /> Duração: 1h30</li>
                                    <li><BsCheckCircle className={styles.icon} /> Produtos de alta qualidade</li>
                                    <li><BsCheckCircle className={styles.icon} /> Fixação prolongada</li>
                                </ul>
                                <Button className={styles.agendarBtn} as={Link} to="/agendamento">Agendar Agora</Button>
                            </div>
                        </Col>

                        {/* Maquiagem de Noiva */}
                        <Col md={4}>
                            <div className={styles.card}>
                                <h4>Maquiagem de Noiva</h4>
                                <p>O dia mais especial da sua vida merece uma maquiagem única</p>
                                <h3>R$ 500</h3>
                                <ul>
                                    <li><BsCheckCircle className={styles.icon} /> Teste de maquiagem</li>
                                    <li><BsCheckCircle className={styles.icon} /> Preparação premium da pele</li>
                                    <li><BsCheckCircle className={styles.icon} /> Maquiagem personalizada</li>
                                    <li><BsCheckCircle className={styles.icon} /> Acompanhamento no local</li>
                                    <li><BsCheckCircle className={styles.icon} /> Retoques durante o evento</li>
                                    <li><BsCheckCircle className={styles.icon} /> Produtos waterproof</li>
                                </ul>
                                <Button className={styles.agendarBtn} as={Link} to="/agendamento">Agendar Agora</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={styles.topSection}>
                <Container>
                    <h2 className={styles.title}>Por que escolher Juliana Pocchini?</h2>
                    <Row className="text-center">
                        <Col md={4} className={styles.feature}>
                            <BsStarFill className={styles.icon} />
                            <h4>Experiência Profissional</h4>
                            <p>Anos de experiência criando looks únicos para cada cliente</p>
                        </Col>
                        <Col md={4} className={styles.feature}>
                            <BsHeartFill className={styles.icon} />
                            <h4>Atendimento Personalizado</h4>
                            <p>Cada maquiagem é única, adaptada ao seu estilo e ocasião</p>
                        </Col>
                        <Col md={4} className={styles.feature}>
                            <BsCheckCircleFill className={styles.icon} />
                            <h4>Produtos Premium</h4>
                            <p>Utilizamos apenas produtos de alta qualidade e longa duração</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.bottomSection}>
                <Container className="text-center">
                    <h3>Pronta para se sentir ainda mais linda?</h3>
                    <p>Agende sua maquiagem e descubra o poder de se sentir confiante e radiante</p>
                    <Button className={styles.botaoAgendar} as={Link} to="/agendamento">Agendar Minha Maquiagem</Button>
                </Container>
            </section>
        </div>
    );
}

export default SobreMim;

