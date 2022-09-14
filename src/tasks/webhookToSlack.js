import {
  defineTask,
  defineWebhook,
  Slack,
} from "@bigidea/integration-connectors";

defineTask({
  name: "webhookToSlack",
  description: "Trigger a message in Slack from a Webhook",
  trigger: {
    webhook: defineWebhook({ name: "slack" }),
  },
  auths: {
    slack: Slack.defineAuth({
      name: "slack",
    }),
  },
  run: async ({ auths }) => {
    const slack = new Slack({ auth: auths.slack });

    await slack.postMessage({
      channel: "#general", // <-- Might want to change!
      text: "Triggered by a webhook",
    });
  },
});
