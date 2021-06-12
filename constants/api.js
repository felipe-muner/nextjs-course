import Product from "./product";

const server = "http://localhost:3000";

export default {  
  product: new Product(server),  
};