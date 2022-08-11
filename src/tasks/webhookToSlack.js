import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import slackWebhook from "../webhooks/slackWebhook";
import { defineTask } from "@bigidea/integration-connectors";
import slackChannel from "../secrets/slackChannel";

const slack = new Slack({ auth: slackAuth });

defineTask({
  name: "webhookToSlack",
  description: "Trigger a message in Slack from a Google Forms Webhook",
  trigger: {
    webhook: slackWebhook,
  },
  auths: {
    slack: slackAuth,
  },
  secrets: {
    channel: slackChannel,
  },
  run: async ({ auths, secrets }) => {
    const slack = new Slack({ auth: auths.slack });

    await slack.postMessage({
      channel: secrets.channel, // <-- you may want to change this before sending!
      text: "Triggered by a webhook",
    });
  },
});
