export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c347072e0ba81ce5efc0d1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-demo-studio",
                  apiId: "82f99ad5-1034-403f-8296-7a1af5279ffd",
                },
                {
                  buildHookId: "60c347085280721c4cc9c961",
                  title: "Blog Website",
                  name: "sanity-gatsby-demo-web",
                  apiId: "be4dd050-2636-4cb4-b223-1ef6aa88222e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ankitrathi1/sanity-gatsby-demo",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-demo-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
