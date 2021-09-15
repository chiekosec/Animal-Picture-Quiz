import nextConnect from "next-connect";
import middleware from "../../dbUtil/database";

const handler = nextConnect();

handler.use(middleware);

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

handler.get(async (req, res) => {
  let doc = await req.db.collection("data").find().toArray();
  let data = shuffleArray(doc);
  data = data.slice(0, 5);
  res.json({ data });
});

export default handler;
