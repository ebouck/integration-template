const index = require("../build/index");

const action = process.argv[2];
if (!action) {
  throw new Error("Missing action. Must be either 'deploy' or 'run'");
}
if (!["deploy", "run"].includes(action)) {
  throw new Error(
    `"Unknown action: ${action}. Must be either 'deploy' or 'run'"`
  );
}

const taskName = process.argv[3];
if (action === "run" && !taskName) {
  throw new Error("Missing task name");
}

const promise = index.handler({ action, taskName });

promise.then((result) => {
  const processedResult = { ...result, body: JSON.parse(result.body) };
  console.log("result", processedResult);
});
