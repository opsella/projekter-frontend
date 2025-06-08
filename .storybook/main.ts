import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  previewHead: (head) => {
    return `
      ${head}
      ${'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />'}
    `;
  }
};
export default config;
