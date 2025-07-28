import { Form, Button, Container, Card, } from 'react-bootstrap';
import { BsBoxArrowInRight, BsEye, BsEyeSlash  } from 'react-icons/bs';
import Styles from './Cadastro.module.css';
import { Link } from 'react-router-dom';
import { RiUserHeartLine } from "react-icons/ri";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import UsuarioAPI from "../../services/UsuarioAPI"

function Cadastro() {

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [mostrarSenha, setMostrarSenha] = useState(false);
const navigate = useNavigate();

async function handleCadastro(e){
  e.preventDefault();

  if(!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  try{
    await UsuarioAPI.criarAsync(nome,email,senha);
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  }catch(erro){
    console.error(erro);
    alert("Erro ao cadastrar, Verifique os dadaos.")
  }
}


  return (
    <div className={Styles.cadrastro_page}>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <RiUserHeartLine size={45} className={`mb-3 ${Styles.icon_top}`} />
        <h2 className={`text-center ${Styles.welcome_title}`}>Bem-vinda</h2>
        <p className={`text-center ${Styles.subtitle}`}>Crie uma conta para agendar seus serviços</p>

        <Card className={`p-4 mt-3 ${Styles.cadastro_card}`}>
          <h3 className={`text-center ${Styles.cadastro_title}`}>Cadastro</h3>
          <p className={`text-center ${Styles.cadastro_subtitle}`}>Digite suas credenciais para criar sua conta</p>

          <Form onSubmit={handleCadastro}>
              <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="Nome" placeholder="Nome Completo" value={nome} onChange = {(n) => setNome(n.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="seu@email.com" value={email} onChange ={(e) => setEmail(e.target.value)} />
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

            <Button type="submit" className={`w-100 ${Styles.custom_button}`}>
              <BsBoxArrowInRight className="me-2" />
              Cadastrar
            </Button>

            <hr />
            <p className="text-center text-muted mb-0">Ja tem uma conta?</p>
            <div className="text-center mt-1">
              <a href="/login" className={Styles.register_link}>Logue-se aqui</a>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Cadastro;
