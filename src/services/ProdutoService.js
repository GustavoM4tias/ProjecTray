import http from "../http-common";

class ProdutoService {
    getAll() {
        return http.get("/produtos");
    }

    create(data) {
        return http.post("/produtos", data);
    }

    delete(id) {
        return http.delete(`/produtos/${id}`);
    }
    update(id, data) {
        return http.put(`/produtos/${id}`, data);
    }
}

export default new ProdutoService();