// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Roadmaps',
  tagline: 'Developer Roadmaps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fqws.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fqws', // Usually your GitHub org/user name.
  projectName: 'developer-roadmap', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DR',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Roadmaps',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'backendSidebar',
                label: 'Backend Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'computerScienceSidebar',
                label: 'Computer Science',
              },
              {
                type: 'docSidebar',
                sidebarId: 'frontendSidebar',
                label: 'Full Stack Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'fullStackSidebar',
                label: 'Frontend Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nodejsSidebar',
                label: 'Node.js Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'javascriptSidebar',
                label: 'JavaScript Roadmap',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
