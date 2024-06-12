import http from "../http-common";

class MetodosEntregaService {
    getAll() {
        return http.get("/metodos-entrega");
    }

    create(data) {
        return http.post("/metodos-entrega", data);
    }

    delete(id) {
        return http.delete(`/metodos-entrega/${id}`);
    }
    update(id, data) {
        return http.put(`/metodos-entrega/${id}`, data);
    }
}

export default new MetodosEntregaService();