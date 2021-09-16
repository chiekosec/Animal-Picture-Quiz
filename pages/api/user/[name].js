import nextConnect from "next-connect";
import middleware from "../../../dbUtil/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { name } = req.query;

  let doc = await req.db.collection("users").findOne({ name });

  res.json({ data: doc.scores });
});

export default handler;
