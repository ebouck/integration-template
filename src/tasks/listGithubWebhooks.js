import { defineTask, Github } from "@bigidea/integration-connectors";
import githubAuth from "../auths/githubAuth";

const github = new Github({ auth: githubAuth });

defineTask({
  name: "listGithubWebhooks",
  run: async () => {
    console.log("about to list webhooks");
    const response =
      await github.webhooks.repositoryWebhooks.listRepositoryWebhook({
        owner: "ebouck",
        repo: "integration-template",
      });

    const webhooks = response.data;

    const repoNames = webhooks.map((repo) => repo.name);

    console.log("repoNames", repoNames);
  },
});
