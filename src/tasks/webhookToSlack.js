import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import googleFormsWebhook from "../webhooks/googleFormsWebhook";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "Google Forms Webhook to Slack",
  description: "Trigger a message in Slack from a Google Forms Webhook",
  trigger: {
    webhook: googleFormsWebhook,
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
