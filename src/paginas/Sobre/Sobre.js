import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Sobre.module.css';
import fotoJuliana from '../assetsss/fotojuliana.jpeg';
import { Image } from 'react-bootstrap';
import { BsStarFill, BsPeopleFill, BsAwardFill, BsHeart, BsStar, BsPerson} from 'react-icons/bs';
import { GiDiamondRing, GiPartyPopper, GiLipstick } from 'react-icons/gi';
import { Link } from 'react-router-dom';


// blob:https://web.whatsapp.com/32c46ffa-ea3c-4aab-95ad-55e099d16c95

function SobreJuliana() {
  return (
    <section className={styles.sobre}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className={styles.titulo}>
              Conheça <span className={styles.nome}>Juliana Pocchini</span>
            </h2>
            <p className={styles.texto}>
              Olá! Sou Juliana, maquiadora profissional apaixonada por realçar a beleza única de cada mulher.
              Acredito que a maquiagem é uma forma de arte que vai além da estética – é sobre autoestima, confiança
              e o poder de se sentir incrível.
            </p>
            <p className={styles.texto}>
              Com mais de 5 anos de experiência, especializo-me em criar looks personalizados que respeitam
              a personalidade e estilo de cada cliente, desde o natural do dia a dia até o glamour de ocasiões especiais.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <Image
              src={fotoJuliana}
              alt="Juliana Pocchini"
              rounded
              className={styles.imagem}
              fluid
            />
          </Col>
        </Row>
      </Container>
      <section className={styles.jornada}>
        <Container>
          <h2 className={styles.titulo}>Minha Jornada</h2>
          <p className={styles.subtitulo}>
            Cada conquista representa o compromisso com a excelência e a satisfação das minhas clientes
          </p>

          <Row className="mt-5">
            <Col md={3} sm={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconeFundo}><BsStarFill className={styles.icone} /></div>
                <h5 className={styles.cardTitulo}>5+ Anos de Experiência</h5>
                <p className={styles.cardTexto}>Especializando-se em realçar a beleza natural de cada cliente</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconeFundo}><BsPeopleFill className={styles.icone} /></div>
                <h5 className={styles.cardTitulo}>500+ Clientes Satisfeitas</h5>
                <p className={styles.cardTexto}>Transformando sorrisos e elevando a autoestima</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconeFundo}><BsAwardFill className={styles.icone} /></div>
                <h5 className={styles.cardTitulo}>Certificações Profissionais</h5>
                <p className={styles.cardTexto}>Formação em técnicas avançadas de maquiagem</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconeFundo}><BsHeart className={styles.icone} /></div>
                <h5 className={styles.cardTitulo}>Paixão pela Arte</h5>
                <p className={styles.cardTexto}>Cada maquiagem é criada com amor e dedicação</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.secao}>
      <Container>
        <Row>
          {/* Coluna da Filosofia */}
          <Col md={6}>
            <h2 className={styles.titulo}>Minha Filosofia</h2>

            <div className={styles.item}>
              <span className={`${styles.icone} ${styles.rosa}`}><BsHeart /></span>
              <div>
                <h5 className={styles.subtitulo}>Beleza Autêntica</h5>
                <p>Acredito que cada mulher tem sua beleza única. Meu trabalho é realçar essa autenticidade, não mascarar ou transformar completamente.</p>
              </div>
            </div>

            <div className={styles.item}>
              <span className={`${styles.icone} ${styles.marrom}`}><BsStar /></span>
              <div>
                <h5 className={styles.subtitulo}>Qualidade Superior</h5>
                <p>Utilizo apenas produtos de alta qualidade, que garantem durabilidade, conforto e um acabamento impecável.</p>
              </div>
            </div>

            <div className={styles.item}>
              <span className={`${styles.icone} ${styles.rosa}`}><BsPerson /></span>
              <div>
                <h5 className={styles.subtitulo}>Atendimento Personalizado</h5>
                <p>Cada cliente é única, por isso dedico tempo para entender suas necessidades, estilo e expectativas antes de começar qualquer trabalho.</p>
              </div>
            </div>
          </Col>

          {/* Coluna das Especialidades */}
          <Col md={6}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitulo}>Especialidades</Card.Title>

                <div className={styles.especialidade}>
                  <span className={styles.especialIcone}><GiDiamondRing /></span>
                  <div>
                    <h6 className={styles.espTitulo}>Maquiagem de Noiva</h6>
                    <p className={styles.espTexto}>Criação de looks únicos e duradouros para o dia mais especial, incluindo teste prévio e acompanhamento no local.</p>
                  </div>
                </div>

                <div className={styles.especialidade}>
                  <span className={styles.especialIcone}><GiPartyPopper /></span>
                  <div>
                    <h6 className={styles.espTitulo}>Maquiagem para Eventos</h6>
                    <p className={styles.espTexto}>Looks sofisticados para festas, formaturas, aniversários e outras ocasiões especiais.</p>
                  </div>
                </div>

                <div className={styles.especialidade}>
                  <span className={styles.especialIcone}><GiLipstick /></span>
                  <div>
                    <h6 className={styles.espTitulo}>Maquiagem Natural</h6>
                    <p className={styles.espTexto}>Técnicas que realçam a beleza natural para o dia a dia, trabalho ou eventos casuais.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    <section className={styles.bottomSection}>
                <Container className="text-center">
                    <h3>Vamos Conversar?</h3>
                    <p>Estou aqui para tornar seus momentos especiais ainda mais memoráveis. Entre em contato e vamos juntas te deixar ainda mais maravilhosa</p>
                    <Button className={styles.botaoAgendar} as={Link} to="/agendamento">Agendar Minha Maquiagem</Button>
                </Container>
            </section>

    </section>
  );
}

export default SobreJuliana;
