// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import mongoose from "mongoose"

const connection = {};

async function dbConnect(){
  if(connection.isConnected){
    return;
  }

  const db = await mongoose.connect("mongodb+srv://tsaydam:1@testdb.f7wjvsl.mongodb.net/")
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
