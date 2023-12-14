import http from "./http-common";
export default class CategoryService {


    getAllCatogory() {
        return http.get("/categorie");
    }

}