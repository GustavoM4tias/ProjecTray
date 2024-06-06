import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7205",
    headers: {
        "Content-type": "application/json",
    }
});
