import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
