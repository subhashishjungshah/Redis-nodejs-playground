const express = require("express");
const redisClient = require("./client");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const cacheData = await redisClient.get("cachedata");
  console.log(cacheData);
  if (cacheData) return res.json(JSON.parse(cacheData));

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await redisClient.set("cachedata", JSON.stringify(data));
  await redisClient.expire("cachedata", 10);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
