import nextConnect from "next-connect";
import middleware from "../../dbUtil/database";

const handler = nextConnect();

handler.use(middleware);

// handler.get(async (req, res) => {
//   let doc = await req.db.collection("users").findOne({ name: "lol" });
// if (doc) {
//   await req.db
//     .collection("users")
//     .updateOne({ name: "lol" }, { $set: { score: 99 } });
// }

//   console.log(doc);
//   res.json(doc);
// });

handler.post(async (req, res) => {
  let doc = await req.db.collection("users").findOne({ name: req.body.name });
  if (!doc) {
    await req.db.collection("users").insertOne(req.body);
  }
  return res.status(201);
});

handler.put(async (req, res) => {
  await req.db.collection("users").updateOne(
    { name: req.body.name },
    {
      $set: { ...req.body },
    }
  );

  return res.status(200);
});

export default handler;
