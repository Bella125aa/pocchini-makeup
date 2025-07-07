import { Form, Button, Container, Card, } from 'react-bootstrap';
import { BsPersonCircle, BsBoxArrowInRight, BsEye } from 'react-icons/bs';
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { RiUserHeartLine } from "react-icons/ri";
function Login() {
  return (
    <div className={Styles.login_page}>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <RiUserHeartLine size={45} className={`mb-3 ${Styles.icon_top}`} />
        <h2 className={`text-center ${Styles.welcome_title}`}>Bem-vinda de volta</h2>
        <p className={`text-center ${Styles.subtitle}`}>Entre na sua conta para agendar seus serviços</p>

        <Card className={`p-4 mt-3 ${Styles.login_card}`}>
          <h3 className={`text-center ${Styles.login_title}`}>Login</h3>
          <p className={`text-center ${Styles.login_subtitle}`}>Digite suas credenciais para acessar sua conta</p>

          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="seu@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" />
                <BsEye className={Styles.eye_icon} />
              </div>
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Lembrar de mim" />
            </div>

            <Button type="submit" className={`w-100 ${Styles.custom_button}`} as={Link} to="/home">
              <BsBoxArrowInRight className="me-2" />
              Entrar
            </Button>

            <hr />
            <p className="text-center text-muted mb-0">Ainda não tem conta?</p>
            <div className="text-center mt-1">
              <a href="/cadastro" className={Styles.register_link}>Cadastre-se aqui</a>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
