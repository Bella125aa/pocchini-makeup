import { HTTPClient } from "./client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async criarAsync(nome, email, senha) {
        try {
            const usuarioCriar = {
                nome: nome,
                email: email,
                senha: senha,
            };
            const response = await HTTPClient.post("/Usuario/Criar", usuarioCriar);
            return response.data;

        } catch (error) {
            console.error("Erro ao criar usuario:", error);
            throw error;
        }

    },

    async obterAsync(usuarioId) {
        try {
            const response = await HTTPClient.get(`/Usuario/Obter/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter usuario:", error);
            throw error;
        }
    },

    async listarAsync(ativo) {
        try {
            const response = await HTTPClient.get(`/Usuario/Listar?ativos=${ativo}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar usuarios:", error);
            throw error;
        }
    },

    async atualizarAsync(usuarioId, nome, email) {
        try {
            const usuarioAtualizar = {
                usuarioId: usuarioId,
                nome: nome,
                email: email,
                senha: senha,
            };
            const response = await HTTPClient.put(`/Usuario/Atualizar/${categoriaId} , usuarioAtualizar`)
            return response.data;
        } catch (error) {
            console.error("Error ao atualizar usuario:", error);
            throw error;
        }
    },

    async restaurarAsync(usuarioId) {
        try {
            const response = await HTTPClient.put(`/Usuario/Restaurar/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao restaurar usuario:", error);
            throw error;
        }
    },

    async deletarAsync(usuarioId) {
        try {
            const response = await HTTPClient.delete(`/Usuario/Deletar/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar usuario:", error);
            throw error;
        }
    },
}