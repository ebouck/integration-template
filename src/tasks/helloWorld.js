import { defineTask } from "@bigidea/integration-connectors";

console.log("defining task Hello World!");

defineTask({
  name: "helloWorld",
  description: "Try this locally",
  run: async () => {
    console.log("Hello World run locally!");
  },
});
