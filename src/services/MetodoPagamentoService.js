import http from "../http-common";

class MetodoPagamentoService {
    getAll() {
        return http.get("/metodos-pagamento");
    }

    create(data) {
        return http.post("/metodos-pagamento", data);
    }

    delete(id) {
        return http.delete(`/metodos-pagamento/${id}`);
    }
    update(id, data) {
        return http.put(`/metodos-pagamento/${id}`, data);
    }
}

export default new MetodoPagamentoService();