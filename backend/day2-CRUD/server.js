const exp = require("express");

const app = exp();

app.use(exp.json());

let port = 3000;

let users = [];

//create

app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("user create successfully");
});

//Read
app.get("/", (req, res) => {
  res.send(users);
});

//update

app.put("/update/:id", (req, res) => {
  let { name } = req.body;
  let { id } = req.params;

  let updateUser = users.map((elem) => {
    if (elem.id == id) return { ...elem, name };
    else return elem;
  });
  users = updateUser;
  res.send("user update successfully");
});

//delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let delUser = users.filter((elem) => {
    return elem.id != id;
  });
  users = delUser;
  res.send("user delete successfully");
});

app.listen(port, () => {
  console.log(`server is listen at port ${port}`);
});
