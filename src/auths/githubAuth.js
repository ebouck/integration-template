import { Github } from "@bigidea/integration-connectors";

const githubAuth = Github.defineAuth({ name: "github" });

export default githubAuth;
