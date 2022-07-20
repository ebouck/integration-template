import { defineTask } from "@bigidea/integration-connectors";

console.log("defining task Hello World!");

defineTask({
  name: "Hello World!",
  description: "Working on Say hello to the console",
  run: async () => {
    console.log("Hello World has been updated!");
  },
});
