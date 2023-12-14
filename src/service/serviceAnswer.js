import http from "./http-common";
export default class AnswerService {

    getAllAnswer() {
        return http.get("/answer");
    }
    

}