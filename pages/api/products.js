import { MongoClient } from "mongodb";
var { STRING_CON } = require('../../constants');

async function handler(req, res) {
  if (req.method === "POST") {
    console.log('felipeeee')
    const data = req.body;
    // const { title, image, address } = data;
  
    const client = await MongoClient.connect(STRING_CON, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = client.db();

    const meetupsCollection = db.collection("products");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Product inserted!" });
  }
}

export default handler;
