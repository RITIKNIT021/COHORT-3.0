const dns=require("node:dns");

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = require("./src/app");

let port = 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
