// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let id = 1;
let products = [
  {
    id: id++,
    name: "Antivirus",
    price: 10,
    category: "software",
    amount: 30,
    active: true,
  },
  {
    id: id++,
    name: "Mouse",
    price: 5,
    category: "hardware",
    amount: 40,
    active: true,
  },
  // {
  //   id: id++,
  //   name: "Keyboard",
  //   price: 10,
  //   category: "hardware",
  //   amount: 50,
  //   active: false,
  // },
  // {
  //   id: id++,
  //   name: "Monitor",
  //   price: 330,
  //   category: "hardware",
  //   amount: 1,
  //   active: true,
  // },
  // {
  //   id: id++,
  //   name: "Monitor2",
  //   price: 22,
  //   category: "hardware2",
  //   amount: 60,
  //   active: true,
  // },
  // {
  //   id: id++,
  //   name: "Monitor2",
  //   price: 3303,
  //   category: "hardware2",
  //   amount: 60,
  //   active: true,
  // },
];

async function handler(req, res) {
  if (req.method === "POST") {
    req.body.id = id++;
    req.body.active = true;
    products.push(req.body);
    res.status(201).json({ message: "Product inserted!", product: req.body });
  } else if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "PUT") {
    console.log("putinz");
    console.log(req.body);
    const updated = products.map((p) =>
      p.id === req.body.id ? { ...req.body } : p
    );
    products = [...updated];
    res.status(201).json({ message: "Product updated!", product: req.body });
  } else if (req.method === "DELETE") {
    console.log("DELETE");
    console.log(req.query);
    res.status(200).json(products);
  }
}

export default handler;
