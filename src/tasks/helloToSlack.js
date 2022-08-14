import { Slack } from "@bigidea/integration-connectors";
import slackAuth from "../auths/slackAuth";
import { defineTask } from "@bigidea/integration-connectors";
import { slackChannel } from "../variables/slack";

defineTask({
  name: "helloSlack",
  description: "Send a message to Slack",
  auths: {
    slack: slackAuth,
  },
  variables: {
    channel: slackChannel,
  },
  run: async ({ auths, variables }) => {
    const slack = new Slack({ auth: auths.slack });

    console.log("Ready to call slack.postMessage");
    await slack.postMessage({
      channel: variables.channel,
      text: "Hello Slack!",
    });
  },
});
