import { MongoClient } from "mongodb";
var { STRING_CON } = require('../../constants');

async function handler(req, res) {
  if (req.method === "GET") {
    // const { title, image, address } = data;

    const client = await MongoClient.connect(STRING_CON);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find();

    console.log(meetups);

    client.close();

    res.status(201).json({ meetups });
  }
}

export default handler;
