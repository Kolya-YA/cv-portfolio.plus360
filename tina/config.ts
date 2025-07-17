import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "Portfolio",
        path: "src/content/portfolio",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            fields: [
              {
                type: "string",
                name: "github",
                label: "GitHub Link",
              },
              {
                type: "string",
                name: "preview",
                label: "Preview Link",
              },
            ],
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery Images",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.alt || "Untitled image",
                };
              },
            },
            fields: [
              {
                type: "string",
                name: "file",
                label: "Image File",
              },
              {
                type: "string",
                name: "alt",
                label: "Image Alt Text",
              },
            ],
          },
          {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          },
        ],
      },
    ],
  },
});
