import {
  AuthData,
  RestConnector,
  AuthConnectorOptions,
  defineAuth,
} from "@bigidea/integration-connectors";

export function defineShortcutAuth({ name }: { name: string }) {
  return defineAuth({ name, customApp: "shortcut" });
}

export type UUID = string;
export type Date = string;

export type CreateStoryCommentParams = {
  authorId?: UUID;
  createdAt?: Date;
  externalId?: string;
  parentId?: number | string;
  text?: string;
  updatedAt?: Date;
};

export type CustomFieldValueParams = {
  fieldId?: UUID;
  value?: string;
  valueId?: UUID;
};

export type Color = string;

export type CreateLabelParams = {
  color: Color;
  description: string;
  externalId: string;
  name: string;
};

export type CreateStoryLinkParams = {
  objectId: number;
  subjectId: number;
  verb: "blocks" | "duplicates" | "relates to";
};

export type CreateTaskParams = {
  complete?: boolean;
  createdAt?: Date;
  description?: string;
  externalId?: string;
  ownerIds?: Array<UUID>;
  updatedAt?: Date;
};

export interface CreateStoryParams {
  name: string;
  ownerIds: Array<UUID>;
  archived?: boolean;
  comments?: Array<CreateStoryCommentParams>;
  completedAtOverride?: Date;
  createdAt?: Date;
  customFields?: Array<CustomFieldValueParams>;
  deadline?: Date | null;
  description?: string;
  epicId?: number | null;
  estimate?: number | null;
  externalId?: string;
  externalLinks?: Array<string>;
  fileIds?: Array<number>;
  followerIds?: Array<UUID>;
  groupId?: UUID | null;
  iterationId?: number | null;
  labels?: Array<CreateLabelParams>;
  linkedFileIds?: Array<number>;
  projectId?: number | null;
  requestedById?: UUID;
  startedAtOverride?: Date;
  storyLinks: Array<CreateStoryLinkParams>;
  storyTemplateId?: UUID | null;
  storyType?: "bug" | "chore" | "feature";
  tasks: Array<CreateTaskParams>;
  updatedAt: Date;
  workflowStateId: number;
}

export class Shortcut extends RestConnector {
  constructor(options: AuthConnectorOptions) {
    super({ ...options, baseUrl: "https://api.app.shortcut.com/api/v3" });
  }

  authorizationHeaders(authData: AuthData): { [p: string]: string } {
    const { apiKey } = authData;

    return {
      "Shortcut-Token": String(apiKey),
      "Content-Type": "application/json",
    };
  }

  async createStory({
    archived,
    comments,
    completedAtOverride,
    createdAt,
    customFields,
    deadline,
    description,
    epicId,
    estimate,
    externalId,
    externalLinks,
    fileIds,
    followerIds,
    groupId,
    iterationId,
    labels,
    linkedFileIds,
    name,
    ownerIds,
    projectId,
    requestedById,
    startedAtOverride,
    storyLinks,
    storyTemplateId,
    storyType,
    tasks,
    updatedAt,
    workflowStateId,
  }: CreateStoryParams) {
    return this.post({
      url: "/stories",
      data: {
        archived,
        comments,
        completedAtOverride,
        createdAt,
        customFields,
        deadline,
        description,
        epicId,
        estimate,
        externalId,
        externalLinks,
        fileIds,
        followerIds,
        groupId,
        iterationId,
        labels,
        linkedFileIds,
        name,
        ownerIds,
        projectId,
        requestedById,
        startedAtOverride,
        storyLinks,
        storyTemplateId,
        storyType,
        tasks,
        updatedAt,
        workflowStateId,
      },
    });
  }

  async createMultipleStories({
    stories,
  }: {
    stories: Array<CreateStoryParams>;
  }) {
    return this.post({
      url: "/stories/bulk",
      data: {
        stories,
      },
    });
  }
}
