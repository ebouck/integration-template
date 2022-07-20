const index = require("../build/index");

console.log("Hi there");

console.log(process.argv[2]);

const taskName = process.argv[2];
if (!taskName) {
  throw new Error("Missing task name");
}

const promise = index.handler({ action: "run", taskName });

console.log("promise", promise);

promise.then((result) => {
  const processedResult = { ...result, body: JSON.parse(result.body) };
  console.log("result", processedResult);
});
