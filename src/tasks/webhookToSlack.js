import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import slackWebhook from "../webhooks/slackWebhook";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "Webhook to Slack",
  description: "Trigger a message in Slack from a Webhook",
  trigger: {
    webhook: slackWebhook,
  },
  run: async () => {
    console.log("About to say hello to Slack");
    await slack.postMessage({
      channel: "#general", // <-- you may want to change this before sending!
      text: "Triggered by a webhook",
    });
    console.log("Sent message to Slack successfully!");
  },
});
