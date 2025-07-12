import React, { useEffect, useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import {
  BsCalendarHeart, BsClock, BsEye, BsPinMap, BsTelephone, BsEnvelope
} from 'react-icons/bs';
import Styles from './MeusAgendamentos.module.css';
import AgendamentoAPI from '../../services/AgendamentoAPI.js';

export function MeusAgendamentos() {

  const [selecionado, setSelecionado] = useState(null);
  const [statusSelecionado, setStatusSelecionado] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);


  const statusAgendamento = {
    "Marcado": 0,
    "Cancelado": 1,
    "Concluído": 2,
  };

  async function carregarAgendamentos(statusCodigo) {
    try {
      const listaAgendamentos = await AgendamentoAPI.listarPorStatusAsync(statusCodigo)

      const listaConvertida = listaAgendamentos.map(item => ({
        ...item,
        dataHora: new Date(item.dataHora)
      }));

      setAgendamentos(listaConvertida);
    } catch (error) {
      console.error("Erro ao carregar agendamentos:", error);
    }

  }

  useEffect(() => {
    const executar = async () => {
      await carregarAgendamentos(statusSelecionado);
    };

    executar();
  }, [statusSelecionado]);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.titulo}>Meus Agendamentos</h2>
      <p className={Styles.subtitulo}>Visualize e gerencie seus agendamentos de maquiagem</p>

      <div className={Styles.card}>
        <h4 className={Styles.cardTitulo}>Agendamentos</h4>
        <p className={Styles.cardSubtitulo}>Lista dos seus agendamentos de maquiagem</p>

        <Form.Select
          className="mb-3"
          value={statusSelecionado}
          onChange={(e) => setStatusSelecionado(e.target.value)}
        >
          {Object.entries(statusAgendamento).map(([nome, valor]) => (
            <option key={valor} value={valor}>{nome}</option>
          ))}
        </Form.Select>


        <Table responsive borderless hover className={Styles.tabela}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Serviço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td><BsCalendarHeart className={Styles.icone} /> {item.dataHora.toLocaleDateString()}</td>
                <td><BsClock className={Styles.icone} /> {item.dataHora.toLocaleTimeString()}</td>
                <td className={Styles.servico}>{item.tipoMaquiagem}</td>
                <td>
                  <span className={`${Styles.status} ${Styles[item.status.toLowerCase()]}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <Button
                    variant="light"
                    className={Styles.botaoVer}
                    onClick={() => setSelecionado(item)}
                  >
                    <BsEye /> Ver
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {selecionado && (
        <div className={Styles.cardDetalhes}>
          <h4 className={Styles.cardTitulo}>Detalhes</h4>

          <div className={Styles.linha}>
            <strong>Serviço</strong>
            <p>{selecionado.tipoMaquiagem}</p>
          </div>

          <div className={Styles.linha}>
            <strong>Data e Horário</strong>
            <p><BsCalendarHeart className={Styles.icone} /> {selecionado.dataHora.toLocaleDateString()}</p>
            <p><BsClock className={Styles.icone} /> {selecionado.dataHora.toLocaleTimeString()}</p>
          </div>

          <div className={Styles.linha}>
            <strong>Local</strong>
            <p><BsPinMap className={Styles.icone} /> {selecionado.local}</p>
          </div>

          <div className={Styles.linha}>
            <strong>Status</strong>
            <span className={`${Styles.status} ${Styles[selecionado.status.toLowerCase()]}`}>
              {selecionado.status}
            </span>
          </div>

          <div className={Styles.linha}>
            <strong>Observações</strong>
            <p>{selecionado.observacao}</p>
          </div>

          <hr />
          

          <div className={Styles.linha}>
            <strong>Contato</strong>
            <p><BsTelephone className={Styles.icone} /> {selecionado.telefone}</p>
            <p><BsEnvelope className={Styles.icone} /> {selecionado.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeusAgendamentos;
