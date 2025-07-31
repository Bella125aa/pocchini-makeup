import { HTTPClient } from "./client";

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    async EnviarPrompt (prompt) {
        try {
           const response = await HTTPClient.post(
                "/Ai/completar",
                JSON.stringify(prompt),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error("Erro ao enviar Prompt", error);
            throw error;
        }
    }
}
