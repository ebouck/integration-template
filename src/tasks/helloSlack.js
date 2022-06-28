import Slack from "@bigidea/integration-connectors/src/connectors/slack/Slack";
import slackAuth from "../auths/slackAuth";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "Hello Slack",
  description: "Say Hello to Slack",
  run: async () => {
    console.log("About to say hello to Slack");
    await slack.postMessage({
      channel: "#general", // <-- you may want to change this before sending!
      text: "Hello Slack",
    });
    console.log("Sent message to Slack successfully!");
  },
});
