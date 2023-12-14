import http from "./http-common";
export default class CompaigneService {

    AddCompaigne(compaigne) {
        return http.post("/compaigne", compaigne);
    }
    getAllCompaigne() {
        return http.get("/compaigne");
    }
    deleteCompaigne(id){
        return http.delete("/compaigne/"+id);
    }

    getCompaigneById(id) {
        return http.get("/compaigne/"+id);
    }

    updateCompaigneBy(id,form) {
        return http.put("/compaigne/"+id,form);
    }
    
}