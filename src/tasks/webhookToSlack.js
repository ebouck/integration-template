import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import slackWebhook from "../webhooks/slackWebhook";
import { defineTask } from "@bigidea/integration-connectors";
import { slackChannel } from "../variables/slack";

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
  variables: {
    channel: slackChannel,
  },
  run: async ({ auths, variables }) => {
    const slack = new Slack({ auth: auths.slack });

    await slack.postMessage({
      channel: variables.channel,
      text: "Triggered by a webhook",
    });
  },
});
