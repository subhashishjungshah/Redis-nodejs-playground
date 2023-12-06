const client = require('./client');

async function init(){
	await client.expire("user:1", 10);
	const result = await client.get("user:1");
	console.log("Result",result);
}
init();
