import { defineTask } from "@bigidea/integration-connectors";
import { defineShortcutAuth, Shortcut } from "../shortcut/Shortcut";

const shortcutAuth = defineShortcutAuth({ name: "shortcut" });

const shortcut = new Shortcut({ auth: shortcutAuth });

defineTask({
  name: "createShortcutStory",
  run: async () => {
    console.log("about to create story");
    // await shortcut.createStory({ name: "foo" });

    await shortcut.createStory({
      archived: true,
      comments: [
        {
          author_id: "12345678-9012-3456-7890-123456789012",
          created_at: "2016-12-31T12:30:00Z",
          external_id: "foo",
          parent_id: 123,
          text: null,
          updated_at: "2016-12-31T12:30:00Z",
        },
      ],
      completed_at_override: "2016-12-31T12:30:00Z",
      created_at: "2016-12-31T12:30:00Z",
      custom_fields: [
        {
          field_id: "12345678-9012-3456-7890-123456789012",
          value: "foo",
          value_id: "12345678-9012-3456-7890-123456789012",
        },
      ],
      deadline: "2016-12-31T12:30:00Z",
      description: null,
      epic_id: 123,
      estimate: 123,
      external_id: "foo",
      external_links: [],
      file_ids: [123],
      follower_ids: ["12345678-9012-3456-7890-123456789012"],
      group_id: "12345678-9012-3456-7890-123456789012",
      iteration_id: 123,
      labels: [
        {
          color: "#6515dd",
          description: "foo",
          external_id: "foo",
          name: null,
        },
      ],
      linked_file_ids: [123],
      move_to: "first",
      name: null,
      owner_ids: ["12345678-9012-3456-7890-123456789012"],
      project_id: 123,
      requested_by_id: "12345678-9012-3456-7890-123456789012",
      started_at_override: "2016-12-31T12:30:00Z",
      story_links: [{ object_id: 123, subject_id: 123, verb: "blocks" }],
      story_template_id: "12345678-9012-3456-7890-123456789012",
      story_type: "bug",
      tasks: [
        {
          complete: true,
          created_at: "2016-12-31T12:30:00Z",
          description: null,
          external_id: "foo",
          owner_ids: ["12345678-9012-3456-7890-123456789012"],
          updated_at: "2016-12-31T12:30:00Z",
        },
      ],
      updated_at: "2016-12-31T12:30:00Z",
      workflow_state_id: 123,
    });
    console.log("created story successfully");
  },
});
