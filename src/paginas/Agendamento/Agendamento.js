import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Componentes/Contexts/AuthContext';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Styles from './Agendamento.module.css';
import AgendamentoAPI from '../../services/AgendamentoAPI';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Agendamento() {

  const [agendamentos, setAgendamentos] = useState([]);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const { usuario } = useAuth();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [tipoMaquiagem, setTipoMaquiagem] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");

  useEffect(() => {
    async function carregar() {
      const lista = await AgendamentoAPI.listarTodosAsync();
      setAgendamentos(lista);
      setDiasIndisponiveis(extrairDiasIndisponiveis(lista));
    }

    carregar();
    console.log(usuario);
  }, []);

  useEffect(() => {
    if (dataSelecionada) {
      const horarios = obterHorariosDisponiveisParaData(agendamentos, dataSelecionada);
      setHorariosDisponiveis(horarios);
    }
  }, [dataSelecionada, agendamentos]);

  function extrairDiasIndisponiveis(lista) {
    const horariosPorDia = {};
    lista.forEach(ag => {
      const dataObj = new Date(ag.dataHora);
      const data = formatarDataLocalFromUTCString(dataObj);
      const hora = new Date(ag.dataHora).toTimeString().slice(0, 5);

      if (!horariosPorDia[data]) horariosPorDia[data] = new Set();
      horariosPorDia[data].add(hora);
    });

    const todosHorarios = ["08:00", "10:00", "14:00", "16:00"];
    const indisponiveis = [];

    for (const [data, horarios] of Object.entries(horariosPorDia)) {
      const todosOcupados = [...todosHorarios].every(h => horarios.has(h));
      if (todosOcupados) indisponiveis.push(data);
    }
    return indisponiveis;
  }

  function formatarDataLocalFromUTCString(dateStringUTC) {
    const utcDate = new Date(dateStringUTC);
    const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000)
    const ano = localDate.getFullYear();
    const mes = String(localDate.getMonth() + 1).padStart(2, '0');
    const dia = String(localDate.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  } 

  function obterHorariosDisponiveisParaData(lista, dataSelecionada) {
    const dataISO = formatarDataLocalFromUTCString(new Date(dataSelecionada));

    const ocupados = lista
      .filter(ag => formatarDataLocalFromUTCString(new Date(ag.dataHora)) === dataISO)
      .map(ag => new Date(ag.dataHora).toTimeString().slice(0, 5));

    const todos = ["08:00", "10:00", "14:00", "16:00"];
    return todos.filter(h => !ocupados.includes(h));
  }

  async function confirmarAgendamento() {
    if (
      !nome || !telefone || !tipoMaquiagem || !dataSelecionada || !horario
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const [hora, minuto] = horario.split(":").map(Number);

    const dataLocal = new Date(
      dataSelecionada.getFullYear(),
      dataSelecionada.getMonth(),
      dataSelecionada.getDate(),
      hora,
      minuto
    );

    const isoStringComTimezoneCorreto = new Date(dataLocal.getTime() - (dataLocal.getTimezoneOffset() * 60000)).toISOString();


    try {
      await AgendamentoAPI.criarAsync(isoStringComTimezoneCorreto, nome, email, telefone, tipoMaquiagem, local, usuario?.id);
      alert("Agendamento realizado com sucesso!");
      window.location.reload();

      setNome("");
      setTelefone("");
      setEmail("");
      setTipoMaquiagem("");
      setDataSelecionada("");
      setHorario("");
      setLocal("");
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      alert("Erro ao agendar. Verifique os dados e tente novamente.");

    }
  }


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
                        <Form.Control type="text" placeholder="Seu nome completo"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Telefone/WhatsApp *</Form.Label>
                        <Form.Control type="text" placeholder="(11) 99999-9999"
                          value={telefone}
                          onChange={(e) => setTelefone(e.target.value)}
                          required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de Maquiagem *</Form.Label>
                    <Form.Select
                      value={tipoMaquiagem}
                      onChange={(e) => setTipoMaquiagem(e.target.value)}
                      required>
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
                        <DatePicker
                          selected={dataSelecionada}
                          onChange={(date) => setDataSelecionada(date)}
                          excludeDates={diasIndisponiveis.map(d => new Date(d + "T00:00:00"))}
                          dateFormat={"dd/MM/yyyy"}
                          className="form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Horário Desejado *</Form.Label>
                        <Form.Select required value={horario} onChange={(e) => setHorario(e.target.value)}>
                          <option>Selecione o Horario</option>
                          {horariosDisponiveis.map(h => (
                            <option key={h} value={h}>{h}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Local da Maquiagem</Form.Label>
                    <Form.Control type="text" placeholder="Endereço onde será realizada a maquiagem" />
                  </Form.Group>

                  <Button className={Styles.botaoAgendarr} onClick={confirmarAgendamento}>
                    Confirmar Agendamento
                  </Button>
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
                  Segunda a Domingo: 8h às 18h</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default Agendamento;

