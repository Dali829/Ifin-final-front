import http from "./http-common";
export default class BankService {

    AddBank(bank) {
        return http.post("/bank", bank);
    }
    getAllBank() {
        return http.get("/bank");
    }
    deleteBank(id){
        return http.delete("/bank/"+id);

    }
    getBankById(id) {
        return http.get("/bank/"+id);
    }

    updateBankBy(id,form) {
        return http.put("/bank/"+id,form);
    }

}