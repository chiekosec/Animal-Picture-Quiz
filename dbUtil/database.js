import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
const dbUrl = process.env.DB_URL;
const client = new MongoClient(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let isConnected;

async function database(req, res, next) {
  if (!isConnected) {
    isConnected = await client.connect();
  }
  req.dbClient = client;
  req.db = client.db("KidsDb");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
