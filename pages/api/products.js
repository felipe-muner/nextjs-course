// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let products = [
  { name: "Antivirus", price: 10, category: "software" },
  { name: "Mouse", price: 5, category: "hardware" },
  { name: "Keyboard", price: 10, category: "hardware" },
  { name: "Monitor", price: 330, category: "hardware" },
];

async function handler(req, res) {
  if (req.method === "POST" && req.body.method === "addProduct") {
    delete req.body.method
    products.push(req.body)   
    res.status(201).json({ message: "Product inserted!" });    
  } else if (req.method === "GET" && req.query.method === 'getAll') {
    res.status(200).json({ products });
  }
}

export default handler;
