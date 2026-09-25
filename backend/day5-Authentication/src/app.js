const exp = require("express");
const jwt = require("jsonwebtoken");
const app = exp();

app.use(exp.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "hellow world",
  });
});

app.post("/api/auth/register", (req, res) => {
  let { email, name, password } = req.body;
  //save to db
  const token = jwt.sign(
    { email, name },
    "0a545b0f5219e6e0e0c62d48e5253057b9211c80e03e8d991c365811cd425e90526a2c1c43908b0ca8ed0cfa3d615ee8ba275c810a1ce778",
  );

  res.status(201).json({
    message: "user register successfully",
    data: {
      user: {
        email,
        name,
      },
      token,
    },
  });
});

module.exports = app;
