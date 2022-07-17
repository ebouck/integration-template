import { deploy } from "@bigidea/integration-connectors";
import { run } from "@bigidea/integration-connectors";
import "./src";

exports.handler = async (event, context, callback) => {
  const { action, taskName, params } = event;

  if (!action) {
    callback("Required action missing");
  }

  if (!["deploy", "run"].includes(action)) {
    callback(`Invalid action, must be 'deploy' or 'run': ${action}`);
  }

  if (action === "deploy") {
    await deploy();
  } else if (action === "run") {
    if (!taskName) {
      callback("Missing taskName");
    }
    await run(taskName, params);
  }
};
