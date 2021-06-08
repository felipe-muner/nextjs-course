// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let id = 1
let products = [
  { id: id++, name: "Antivirus", price: 10, category: "software" },
  { id: id++, name: "Mouse", price: 5, category: "hardware" },
  { id: id++, name: "Keyboard", price: 10, category: "hardware" },
  { id: id++, name: "Monitor", price: 330, category: "hardware" },
];

console.log(id)

async function handler(req, res) {
  if (req.method === "POST" && req.body.method === "addProduct") {
    delete req.body.method
    req.body.id = id++
    console.log(req.body)
    products.push(req.body)
    console.log(products)
    res.status(201).json({ message: "Product inserted!" });    
  } else if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "PUT") {
    console.log('putinz')
    console.log(req.body)
    res.status(200).json(products);
  } else if (req.method === "DELETE") {
    console.log('DELETE')
    console.log(req.query)
    res.status(200).json(products);
  }
}

export default handler;
