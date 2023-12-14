import http from "./http-common";
export default class AdminService {

    postAdmin(admin) {
        return http.post("/auth/register", admin);
    }
    loginAdmin(admin) {
        return http.post("/auth/login", admin);
    }
    getAllAdmin() {
        return http.get("/users");
    }
    deleteAdmin(id){
        return http.delete("/users/"+id);

    }
    updateAdmin(id,admin) {
        return http.put("/users/"+id,admin);
    }
    getAdminByID(id) {
        return http.get("/users/"+id);
    }
}