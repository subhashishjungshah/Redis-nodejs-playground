/*
    hashmaps are similar to js object which has key value pairs   
*/

const client = require("./client");

async function init() {
  const student = await client.hset("student-1", {
    name: "Subhashish Jung Shah",
    age: 23,
    sex: "male",
  });
  const studentName = await client.hget("student-1", "name");
  console.log(studentName);

  const studentInfo = await client.hmget("student-1", ["name", "age"]);
  console.log(studentInfo);

  const newAge = await client.hincrby("student-1", "age", 1);
  console.log(newAge);
}

init();
