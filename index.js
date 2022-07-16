import invariant from "tiny-invariant";
import { deploy, run } from "@bigidea/integration-connectors";
import "./src";

export async function handler(event, context, callback) {
  const { action, taskName, params } = event;

  invariant(action, "Required action missing");
  invariant(
    action === "deploy" || action === "run",
    `Invalid action, must be 'deploy' or 'run': ${action}`
  );

  if (action === "deploy") {
    await deploy();
  } else if (action === "run") {
    invariant(taskName, "Missing taskName");
    await run(taskName, params);
  }

  callback("testing");
}
