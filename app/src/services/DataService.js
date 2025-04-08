import axios from "axios";

class DataService{

    async getProducts(){
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data;

    }

    async getCategories(){
        let response = await axios.get("http://127.0.0.1:5000/api/categories")
        return response.data;

    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }

}

export default new DataService();