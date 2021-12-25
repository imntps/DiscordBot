const { db } = require("../config.json");
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb://${db.host}:${db.port}/${db.dbName}`;

var menuList;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("[Database] created!");
  var dbo = db.db(db.dbName);
  dbo
    .collection("foodlsit")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      menuList = result;
      db.close();
      console.log("[Database] success!");
    });
});

exports.getMenuList = () => {
  return menuList;
};
