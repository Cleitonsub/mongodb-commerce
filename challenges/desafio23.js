db.produtos
  .updateMany({},
    { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
    { $inc: { "vendasPorDia.6": 120 } });

db.produtos
  .find({}, { _id: 0, nome: 1, tags: 1 });