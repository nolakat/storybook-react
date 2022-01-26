module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  refs: {
    'design-system': {
      title: "Vue Components",
      url: "https://sb-test-vue.netlify.app/",
      expanded: false // optional, true by default
    }
   }
};
