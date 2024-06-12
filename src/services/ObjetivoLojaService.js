import http from "../http-common";

class ObjetivoLojaService {
    getAll() {
        return http.get("/Objetivo-Loja");
    }

    create(data) {
        return http.post("/Objetivo-Loja", data);
    }

    delete(id) {
        return http.delete(`/Objetivo-Loja/${id}`);
    }
    update(id, data) {
        return http.put(`/Objetivo-Loja/${id}`, data);
    }
}

export default new ObjetivoLojaService();