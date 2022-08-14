import {
  defineTask,
  defineWebhook,
  Github,
  Slack,
} from "@bigidea/integration-connectors";
import githubAuth from "../auths/githubAuth";
import slackAuth from "../auths/slackAuth";
import { githubOwner, githubRepo } from "../variables/github";
import { slackChannel } from "../variables/slack";

const githubWorkflowRun = defineWebhook({ name: "githubWorkflowRun" });

defineTask({
  name: "githubPushToSlack",
  trigger: {
    webhook: githubWorkflowRun,
  },
  auths: {
    github: githubAuth,
    slack: slackAuth,
  },

  variables: {
    owner: githubOwner,
    repo: githubRepo,
    channel: slackChannel,
  },
  deploy: async ({ auths, variables, webhook }) => {
    const { owner, repo } = variables;
    const github = new Github({ auth: auths.github });

    return new github.RepositoryWebhook({
      name: "githubPushToSlack:webhook",
      owner,
      repo,
      config: {
        url: webhook,
      },
      events: ["push"],
    });
  },
  run: async ({ data, auths, variables }) => {
    const { channel } = variables;
    const github = new Github({ auth: auths.github });
    const slack = new Slack({ auth: auths.slack });

    if (github.isWebhookEventType("ping", data)) {
      console.log("Skipping ping");
      return;
    }

    const payload = github.pushPayload(data);

    console.log("payload", payload);

    console.log("received push webhook");
    await slack.postMessage({
      channel,
      text: `Got a push from ${payload.pusher.email} on repo ${variables.repo}`,
    });
  },
});
