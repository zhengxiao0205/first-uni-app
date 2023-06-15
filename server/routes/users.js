var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/api/sendCode", function (req, res, next) {
  res.send({ data: 1234 });
});

router.post("/api/login", function (req, res, next) {
  const { username, password } = req.body;
  if (username === "璃音" && password === "520") {
    res.send({
      data: {
        success: true,
        msg: "登录成功",
        data: {
          username: "璃音",
          password: 520,
          tel: 13041460957,
          imgUrl: "../../static/image/liyin.png",
        },
      },
    });
  } else {
    res.send({
      data: {
        success: false,
        msg: "登录失败",
      },
    });
  }
});

module.exports = router;
