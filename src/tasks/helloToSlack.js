import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import { defineTask } from "@bigidea/integration-connectors";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "helloSlack",
  description: "Send a message to Slack",
  run: async () => {
    console.log("Ready to call slack.postMessage");
    await slack.postMessage({
      channel: "#general", // <-- you may want to change this before sending!
      text: "Hello Slack!",
    });
  },
});
