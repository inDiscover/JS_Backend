const express = require('express');
const app = express();
const PORT = 10000;

app.get("/", handler);
app.get("/cust", (req, res) => res.send("Customer requested"));

function handler(req, res) {
  console.log("Request", req.method, req.url);
  res.send("Hello Express!");
}

app.listen(PORT, () => console.log(`My app started at port ${PORT}`));
