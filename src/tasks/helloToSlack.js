import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import { defineTask } from "@bigidea/integration-connectors";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "Hello to Slack",
  description: "Send a message to Slack",
  run: async () => {
    await slack.postMessage({
      channel: "#general", // <-- you may want to change this before sending!
      text: "Hello Slack!",
    });
  },
});
