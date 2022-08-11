import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import { defineTask } from "@bigidea/integration-connectors";
import slackChannel from "../secrets/slackChannel";

defineTask({
  name: "helloSlack",
  description: "Send a message to Slack",
  auths: {
    slack: slackAuth,
  },
  secrets: {
    channel: slackChannel,
  },
  run: async ({ auths, secrets }) => {
    const slack = new Slack({ auth: auths.slack });

    console.log("Ready to call slack.postMessage");
    await slack.postMessage({
      channel: secrets.channel,
      text: "Hello Slack!",
    });
  },
});
