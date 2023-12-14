import http from "./http-common";
export default class ProductService {

    getAllProduct() {
        return http.get("/product");
    }
    postProduct(form) {
        return http.post("/product", form);
    }
    deleteProduct(id){
        return http.delete("/product/"+id);

    }
    getProduct(id) {
        return http.get("/product/"+id);
    }
    getProductById(id) {
        return http.get("/product/"+id);
    }

    updateProductBy(id,form) {
        return http.put("/product/"+id,form);
    }
    

}