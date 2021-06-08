// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let id = 1
let users = [
  { id: id++, name: "Antivirus", price: 10, category: "software" },
  { id: id++, name: "Mouse", price: 5, category: "hardware" },
  { id: id++, name: "Keyboard", price: 10, category: "hardware" },
  { id: id++, name: "Monitor", price: 330, category: "hardware" },
];

console.log(id)

async function handler(req, res) {  
  debugger
  if (req.method === "POST") {
    //new user (register)
    users.push(req.body)
    res.status(201).json({ message: "Product inserted!" });    
  } else if (req.method === "GET") {
    res.status(200).json(products);
  }
}

export default handler;
