import { defineTask } from "@bigidea/integration-connectors";

defineTask({
  name: "Hello World!",
  description: "Deployed: Say hello to the console",
  run: async () => {
    console.log("Hello World has been updated!");
  },
});
