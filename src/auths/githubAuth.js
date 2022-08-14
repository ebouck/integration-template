import { Github } from "@bigidea/integration-connectors";

const githubAuth = Github.defineAuth({
  name: "githubAuth",
});

export default githubAuth;
