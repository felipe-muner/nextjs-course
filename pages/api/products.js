// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let id = 1;
let products = [
  { id: id++, name: "Antivirus", price: 10, category: "software", amount: 30 },
  { id: id++, name: "Mouse", price: 5, category: "hardware", amount: 40 },
  { id: id++, name: "Keyboard", price: 10, category: "hardware", amount: 50 },
  { id: id++, name: "Monitor", price: 330, category: "hardware", amount: 60 },
];

async function handler(req, res) {
  if (req.method === "POST") {
    req.body.id = id++;
    console.log(products);
    products.push(req.body);
    console.log(products);
    res.status(201).json({ message: "Product inserted!", product: req.body });
  } else if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "PUT") {
    console.log("putinz");
    console.log(req.body);
    const updated = products.map((p) =>
      p.id === req.body.id ? { ...req.body, updated: true } : p
    );
    products = [...updated]
    res.status(201).json({ message: "Product updated!", product: req.body });
  } else if (req.method === "DELETE") {
    console.log("DELETE");
    console.log(req.query);
    res.status(200).json(products);
  }
}

export default handler;
