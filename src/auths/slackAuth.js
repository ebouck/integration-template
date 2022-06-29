import { defineSlackAuth } from "@bigidea/integration-connectors";

const slackAuth = defineSlackAuth({
  name: "slackAuth",
  app: "slack",
});

export default slackAuth;
