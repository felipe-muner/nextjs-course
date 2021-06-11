import Product from "./product";

const server = "http://localhost:8081";

export default {  
  product: new Product(server),  
};