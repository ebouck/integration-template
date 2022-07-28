import { Hubspot } from "@bigidea/integration-connectors";
import hubspotAuth from "../auths/hubspotAuth";
import { defineTask } from "@bigidea/integration-connectors";

const hubspot = new Hubspot({ auth: hubspotAuth });

defineTask({
  name: "createHubspotDeal",
  description: "Create a deal in Hubspot",
  run: async () => {
    console.log("about to create deal");
    await hubspot.createDeal({ name: `New Deal ${new Date()}` });
  },
});
