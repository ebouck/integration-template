import { deploy } from "@bigidea/integration-connectors";
import { run } from "@bigidea/integration-connectors";
import "./src";

const handler = async (event, context, callback) => {
  console.log("In handler");
  const { action, taskName, params } = event;

  if (!action) {
    callback("Required action missing");
  }

  if (!["deploy", "run"].includes(action)) {
    callback(`Invalid action, must be 'deploy' or 'run': ${action}`);
  }

  if (action === "deploy") {
    console.log("About to deploy");
    await deploy();
  } else if (action === "run") {
    if (!taskName) {
      callback("Missing taskName");
    }
    console.log(`About to run task ${taskName}`);
    await run(taskName, params);
  }
};

exports.handler = handler;
window.handler = handler;
