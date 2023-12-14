import http from "./http-common";
export default class ClientService {

    postClient(form) {
        return http.post("/client", form);
    }
    getAllClient() {
        return http.get("/client");
    }
}