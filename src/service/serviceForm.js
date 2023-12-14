import http from "./http-common";
export default class FormService {

    getAllForm() {
        return http.get("/form");
    }
    postForm(form) {
        return http.post("/form", form);
    }
    deleteForm(id) {
        return http.delete("/form/"+id);
    }

    getFormById(id) {
        return http.get("/form/"+id);
    }

    updateFormBy(id,form) {
        return http.put("/form/"+id,form);
    }
    
    

}