import http from "../http-common";

class CategoriaProdutoService {
    getAll() {
        return http.get("/categorias-produto");
    }

    create(data) {
        return http.post("/categorias-produto", data);
    }

    delete(id) {
        return http.delete(`/categorias-produto/${id}`);
    }
    update(id, data) {
        return http.put(`/categorias-produto/${id}`, data);
    }
}

export default new CategoriaProdutoService();