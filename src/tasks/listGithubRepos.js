import { defineTask, Github } from "@bigidea/integration-connectors";
import githubAuth from "../auths/githubAuth";

const github = new Github({ auth: githubAuth });

defineTask({
  name: "listGithubRepos",
  run: async () => {
    console.log("about to list repos for ebouck");
    const response =
      await github.repositories.listRepositoriesForAuthenticatedUser({
        perPage: 100,
      });

    const repos = response.data;

    const repoNames = repos.map((repo) => repo.name);

    console.log("repoNames", repoNames);
  },
});
