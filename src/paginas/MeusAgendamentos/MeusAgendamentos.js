import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import {
  BsCalendarHeart, BsClock, BsEye, BsPinMap, BsTelephone, BsEnvelope
} from 'react-icons/bs';
import Styles from './MeusAgendamentos.module.css';

const agendamentos = [
  {
    data: '14/01/2024',
    horario: '14:00',
    servico: 'Maquiagem de Noiva',
    valor: 'R$ 250',
    status: 'Cancelado',
    local: 'Rua das Flores, 123 - Centro',
    observacoes: 'Maquiagem para casamento, estilo clássico',
    telefone: '(11) 99999-9999',
    email: 'maria@email.com'
  },
  {
    data: '19/01/2024',
    horario: '16:00',
    servico: 'Maquiagem Formal',
    valor: 'R$ 120',
    status: 'Pendente',
    local: 'Av. Principal, 456 - Centro',
    observacoes: 'Formatura à noite, estilo elegante',
    telefone: '(11) 98888-8888',
    email: 'joana@email.com'
  },
  {
    data: '11/01/2024',
    horario: '10:00',
    servico: 'Maquiagem Casual',
    valor: 'R$ 80',
    status: 'Concluído',
    local: 'Rua B, 789 - Bairro X',
    observacoes: 'Look leve para reunião de trabalho',
    telefone: '(11) 97777-7777',
    email: 'ana@email.com'
  },
];

function MeusAgendamentos() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.titulo}>Meus Agendamentos</h2>
      <p className={Styles.subtitulo}>Visualize e gerencie seus agendamentos de maquiagem</p>

      <div className={Styles.card}>
        <h4 className={Styles.cardTitulo}>Agendamentos</h4>
        <p className={Styles.cardSubtitulo}>Lista dos seus agendamentos de maquiagem</p>

        <Table responsive borderless hover className={Styles.tabela}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Horário</th>
              <th>Serviço</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item, index) => (
              <tr key={index}>
                <td><BsCalendarHeart className={Styles.icone} /> {item.data}</td>
                <td><BsClock className={Styles.icone} /> {item.horario}</td>
                <td className={Styles.servico}>{item.servico}</td>
                <td>{item.valor}</td>
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
            <p>{selecionado.servico}</p>
            <p className={Styles.valor}>{selecionado.valor}</p>
          </div>

          <div className={Styles.linha}>
            <strong>Data e Horário</strong>
            <p><BsCalendarHeart className={Styles.icone} /> {selecionado.data}</p>
            <p><BsClock className={Styles.icone} /> {selecionado.horario}</p>
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
            <p>{selecionado.observacoes}</p>
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
