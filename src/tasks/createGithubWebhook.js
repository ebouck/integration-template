import {
  defineTask,
  defineWebhook,
  getWebhookData,
  Github,
} from "@bigidea/integration-connectors";
import githubAuth from "../auths/githubAuth";

const github = new Github({ auth: githubAuth });

const testWebhook = defineWebhook({ name: "testWebhook" });

defineTask({
  name: "createGithubWebhook",
  run: async () => {
    const { url } = await getWebhookData(testWebhook);

    console.log("webhook url", url);

    console.log("about to create webhook");
    const response =
      await github.webhooks.repositoryWebhooks.createRepositoryWebhook({
        owner: "ebouck",
        repo: "integration-template",
        config: {
          url,
          contentType: "json",
        },
      });

    const webhooks = response.data;

    console.log("data", data);
  },
});
