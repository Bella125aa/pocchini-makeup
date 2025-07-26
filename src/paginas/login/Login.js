import { Form, Button, Container, Card, } from 'react-bootstrap';
import { BsBoxArrowInRight, BsEye, BsEyeSlash  } from 'react-icons/bs';
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { RiUserHeartLine } from "react-icons/ri";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioAPI from '../../services/UsuarioAPI';
import { useAuth } from '../../Componentes/Contexts/AuthContext';

function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();

    if(!email || !senha)
    {
      alert("Preencha Todos os Campos");
      return;
    }

    try{
      const dadosUsuario = isAdmin ? await UsuarioAPI.logarAdmAsync(email, senha)
                                   : await UsuarioAPI.logarAsync(email, senha);
      login({ ...dadosUsuario, isAdmin});

      alert("Login realizado com sucesso!")
      navigate("/home")
    }catch(erro)
    {
      console.error(erro);
      alert("Erro ao Logar. Verifique seu e-mail e senha");
    }
  };



  return (
    <div className={Styles.login_page}>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <RiUserHeartLine size={45} className={`mb-3 ${Styles.icon_top}`} />
        <h2 className={`text-center ${Styles.welcome_title}`}>Bem-vinda de volta</h2>
        <p className={`text-center ${Styles.subtitle}`}>Entre na sua conta para agendar seus serviços</p>

        <Card className={`p-4 mt-3 ${Styles.login_card}`}>
          <h3 className={`text-center ${Styles.login_title}`}>Login</h3>
          <p className={`text-center ${Styles.login_subtitle}`}>Digite suas credenciais para acessar sua conta</p>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <div className="position-relative">
                <Form.Control 
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha} 
                  onChange={(s) => setSenha(s.target.value)} 
                />
                  {mostrarSenha ? (<BsEyeSlash onClick={() => setMostrarSenha(false)} className={Styles.eye_icon}/>)
                                : (<BsEye onClick={() => setMostrarSenha(true)} className={Styles.eye_icon}/>)
                  }                     
              </div>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Sou Administrador"
              onChange={(e) => setIsAdmin(e.target.value)}
              className='mb-3'
            />

            <Button type="submit" className={`w-100 ${Styles.custom_button}`}>
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
