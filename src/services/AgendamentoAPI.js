import { HTTPClient } from "./client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async criarAsync(dataHora, nome, email, telefone, tipoMaquiagem, local) {
        try {
            const agendamentoCriar = {
                dataHora: dataHora,
                nome: nome,
                email: email,
                telefone: telefone,
                tipoMaquiagem: tipoMaquiagem,
                local: local,
            };
            const response = await HTTPClient.post("/Agendamento/Criar", agendamentoCriar);
            return response.data;

        } catch (error) {
            console.error("Erro ao criar agendamento:", error);
            throw error;
        }

    },

    async obterAsync(agendamentoId) {
        try {
            const response = await HTTPClient.get(`/Agendamento/Obter/${agendamentoId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter agendamento:", error);
            throw error;
        }
    },

    async listarPorStatusAsync(status) {
        try {
            const response = await HTTPClient.get(`/Agendamento/ListarPorStatus?status=${status}` );
            return response.data;
        } catch (error) {
            console.error("Erro ao listar agendamentos:", error);
            throw error;
        }
    },

    async listarTodosAsync() {
        try {
            const response = await HTTPClient.get("/Agendamento/ListarTodos");
            return response.data;
        } catch (error) {
            console.error("Erro ao listar todos os agendamentos:", error);
            throw error;
        }
    },

    async atualizarAsync(agendamentoId, status) {
        try {
            const agendamentoAtualizar = {
                agendamentoId: agendamentoId,
                status: status,
            };
            const response = await HTTPClient.put("/Agendamento/Atualizar/", agendamentoAtualizar);
            return response.data;
        } catch (error) {
            console.error("Error ao atualizar agendamento:", error);
            throw error;
        }
    },
}