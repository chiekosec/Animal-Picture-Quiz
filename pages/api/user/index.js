import nextConnect from "next-connect";
import middleware from "../../../dbUtil/database";

const handler = nextConnect();

handler.use(middleware);

// handler.get(async (req, res) => {
//   // let doc = await req.db.collection("users").findOne({ name: "tammy" });
//   // if (doc) {
//   //   await req.db
//   //     .collection("users")
//   //     .updateOne({ name: "lol" }, { $set: { score: 99 } });
//   // }

//   console.log(req.query);
//   // res.json({});
// });

handler.post(async (req, res) => {
  let doc = await req.db.collection("users").findOne({ name: req.body.name });
  if (!doc) {
    await req.db
      .collection("users")
      .insertOne({ name: req.body.name, scores: [] });
  }
  return res.status(201);
});

handler.put(async (req, res) => {
  const { mistakes, time } = req.body;
  const updateData = { mistakes, time };

  await req.db.collection("users").updateOne(
    { name: req.body.name },
    {
      $push: { scores: updateData },
    }
  );

  return res.status(200).json({ success: true });
});

export default handler;
