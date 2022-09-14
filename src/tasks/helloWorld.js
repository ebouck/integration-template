import { defineTask } from "@bigidea/integration-connectors";

defineTask({
  name: "helloWorld",
  run: async () => {
    console.log("Hello World!");
  },
});
