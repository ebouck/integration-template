// import { defineSlackAuth } from "@bigidea/integration-connectors";

const slackAuth = defineAuth({
  name: "slackAuth",
  app: "slack",
});

export default slackAuth;
