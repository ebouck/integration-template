import {
  defineTask,
  defineWebhook,
  defineVariable,
  Github,
  Slack,
} from "@bigidea/integration-connectors";

const githubAuth = Github.defineAuth({
  name: "github",
});
const slackAuth = Slack.defineAuth({
  name: "slack",
});
const owner = defineVariable({ name: "owner" });
const repo = defineVariable({ name: "repo" });
const slackChannel = defineVariable({ name: "slackChannel" });
const webhook = defineWebhook({ name: "github" });

Github.defineSubscription({
  name: "githubWorkflowRun",
  auth: githubAuth,
  variables: {
    owner,
    repo,
  },
  webhook,
  subscribeArgs: ({ variables, webhook }) =>
    Github.subscribeArgs({
      owner: variables.owner,
      repo: variables.repo,
      config: {
        url: webhook,
      },
      events: ["workflow_run"],
    }),
});

defineTask({
  name: "githubPushToSlack",
  trigger: {
    webhook,
  },
  auths: {
    github: githubAuth,
    slack: slackAuth,
  },
  variables: {
    owner,
    repo,
    slackChannel,
  },
  run: async ({ data, auths, variables }) => {
    const github = new Github({ auth: auths.github });
    const slack = new Slack({ auth: auths.slack });

    if (github.isWebhookEventType("ping", data)) {
      console.log("Skipping ping");
      return;
    }

    const payload = github.pushPayload(data);

    await slack.postMessage({
      slackChannel,
      text: `Got a push from ${payload.pusher.email} on repo ${variables.repo}`,
    });
  },
});
