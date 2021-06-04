// import { MongoClient } from "mongodb";
// var { STRING_CON } = require('../../constants');
let products = [
  { name: "Antivirus", price: 10, category: "software" },
  { name: "Mouse", price: 5, category: "hardware" },
  { name: "Keyboard", price: 10, category: "hardware" },
  { name: "Monitor", price: 330, category: "hardware" },
];

async function handler(req, res) {
  console.log(req)
  if (req.method === "POST" && req.body.method === "addProduct") {
    console.log(products);
    products.push(req.body);
    console.log(products);
    res.status(201).json({ message: "Product inserted!" });
    // const { title, image, address } = data;

    // const client = await MongoClient.connect(STRING_CON, {useNewUrlParser: true, useUnifiedTopology: true});

    // const db = client.db();

    // const meetupsCollection = db.collection("products");
    // const result = await meetupsCollection.insertOne(data);

    // console.log(result);

    // client.close();
  } else if (req.method === "GET" && req.query.method === 'getAll') {
    console.log(products)
    res.status(200).json({ products });
  }
}

export default handler;
