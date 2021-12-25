const express = require("express");
const router = express.Router();

const path = require("path");

const { Team } = require("../models/team");

/// file upload start
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/logos");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.teamname.replace(new RegExp(" ", "g"), "_") + ".png");
  },
});

const upload = multer({ storage: storage });
/// file upload end

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/logincheck", (req, res) => {
  const user = req.body.user;
  const pass = req.body.secret;
  const cookietime = 30 * 60000;

  Team.find(
    { $or: [{ owner1: user }, { owner2: user }], $and: [{ secret: pass }] },
    function (err, arr) {
      if (Array.isArray(arr) && arr.length) {
        res.cookie("user", user, { maxAge: cookietime });
        res.cookie("pass", pass, { maxAge: cookietime });
        res.cookie("login", true, { maxAge: cookietime });
        res.redirect("/manageteam");
      } else {
        res.render("login", {
          notify: {
            status: "danger",
            msg: "Login ไม่สำเร็จ ดิสคอร์ดไอดี หรือรหัส ไม่ถูกต้อง",
          },
        });
      }
    }
  );
});

router.get("/createteam", (req, res) => {
  res.render("createteam");
});

router.post("/createsave", upload.single("logo"), (req, res) => {
  let data = new Team({
    team: req.body.teamname,
    tag: req.body.teamtag,
    players: {
      player1: req.body.player1,
      player2: req.body.player2,
      player3: req.body.player3,
      player4: req.body.player4,
      player5: req.body.player5,
      player6: req.body.player6,
    },
    owner1: req.body.owner1,
    owner2: req.body.owner2,
    logo: req.file.filename,
    secret: req.body.secret,
    ban: {
      status: false,
      time: 0,
    },
  });
  Team.saveTeam(data, (err) => {
    if (err) console.log(err);
    res.redirect("/index");
  });
});

router.get("/manageteam", (req, res) => {
  if (!req.cookies.login) return res.render("login");

  Team.find(
    { $or: [{ owner1: req.cookies.user }, { owner2: req.cookies.user }] },
    function (err, arr) {
      if (Array.isArray(arr) && arr.length) {
        res.render("manageteam", { data: arr[0] });
      } else {
        res.render("login");
      }
    }
  );
});

// EDIT
router.post("/teamnameedit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  Team.findByIdAndUpdate(
    req.body._id,
    { team: req.body.teamname },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/logoedit", upload.single("logo"), (req, res) => {
  if (!req.cookies.login) return res.render("login");
  Team.findByIdAndUpdate(
    req.body._id,
    { logo: req.file.filename },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/teamdelete", (req, res) => {
  if (!req.cookies.login) return res.render("login");

  if (req.cookies.pass !== req.body.secret) return res.redirect("/manageteam");

  Team.findByIdAndDelete(req.body._id, { useFindAndModify: false }).exec(
    (err) => {
      res.clearCookie("user");
      res.clearCookie("pass");
      res.clearCookie("login");
      res.redirect("/index");
    }
  );
});

router.post("/teamtagedit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  Team.findByIdAndUpdate(
    req.body._id,
    { tag: req.body.teamtag },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/owner1edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  Team.findByIdAndUpdate(
    req.body._id,
    { owner1: req.body.owner1 },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/owner2edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  Team.findByIdAndUpdate(
    req.body._id,
    { owner2: req.body.owner2 },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player1edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 1);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player1": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player2edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 2);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player2": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player3edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 3);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player3": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player4edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 4);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player4": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player5edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 5);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player5": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

router.post("/player6edit", (req, res) => {
  if (!req.cookies.login) return res.render("login");
  let player = eval("req.body.player" + 6);
  Team.findByIdAndUpdate(
    req.body._id,
    { $set: { "players.player6": player } },
    { useFindAndModify: false }
  ).exec((err) => {
    res.redirect("/manageteam");
  });
});

module.exports = router;
