/* 
   List can be used both as queue and stack
   lpush messages "hello world" -> added messages to left side of the list
   rpush messages "hello world" -> added messages to right side of the list

   Stack Implementation -> Left insert and R-remove
   Queue Implementation -> Left insert and Left remove

   lpop messages -> remove left side of the list
   rpop messages -> remove right side of the list

   To find the length of the list -> llen messages

   blop messages 20 -> waits for message to arrive till 20 sec if no message exists then returns nil

*/
const client = require("./client");

async function init() {
  //   await client.lpush("messages", "hello world");
  //   await client.lpush("messages", "hello there");
  //   await client.lpush("messages", "hello again");
  const result = await client.lrange("messages", 0, -1); // gives range of messages
  const length = await client.llen("messages");
  await client.del("messages"); // deletes the list
  console.log(result, length);
}

init();
