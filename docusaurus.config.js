// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Roadmaps',
  tagline: 'Developer Roadmaps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fqws.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/developer-roadmap/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fqws', // Usually your GitHub org/user name.
  projectName: 'developer-roadmap', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'DR',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Role based Roadmaps',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'frontendSidebar',
                label: 'Full Stack Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'backendSidebar',
                label: 'Backend Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'devopsSidebar',
                label: 'DevOps Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'fullStackSidebar',
                label: 'Frontend Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'postgresqlDbaSidebar',
                label: 'PostgreSQL DBA',
              },
              {
                type: 'docSidebar',
                sidebarId: 'qaSidebar',
                label: 'QA Engineer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'softwareArchitectSidebar',
                label: 'Software Architect',
              },
              {
                type: 'docSidebar',
                sidebarId: 'cppSidebar',
                label: 'C++ Developer Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'flutterSidebar',
                label: 'Flutter Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'cyberSecuritySidebar',
                label: 'Cyber Security Expert',
              },
              {
                type: 'docSidebar',
                sidebarId: 'uxDesignSidebar',
                label: 'UX Design',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Skill based Roadmaps',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'computerScienceSidebar',
                label: 'Computer Science',
              },
              {
                type: 'docSidebar',
                sidebarId: 'reactSidebar',
                label: 'React Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'angularSidebar',
                label: 'Angular Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'vueSidebar',
                label: 'Vue Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'javascriptSidebar',
                label: 'JavaScript Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nodejsSidebar',
                label: 'Node.js Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'typescriptSidebar',
                label: 'TypeScript',
              },
              {
                type: 'docSidebar',
                sidebarId: 'pythonSidebar',
                label: 'Python Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sqlSidebar',
                label: 'SQL Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'systemDesignSidebar',
                label: 'System Design',
              },
              {
                type: 'docSidebar',
                sidebarId: 'javaSidebar',
                label: 'Java Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'springBootSidebar',
                label: 'Spring Boot Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'golangSidebar',
                label: 'Go Developer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'graphqlSidebar',
                label: 'GraphQL',
              },
              {
                type: 'docSidebar',
                sidebarId: 'softwareDesignArchitectureSidebar',
                label: 'Software Design and Architecture',
              },
              {
                type: 'docSidebar',
                sidebarId: 'designSystemSidebar',
                label: 'Design System',
              },
              {
                type: 'docSidebar',
                sidebarId: 'dockerSidebar',
                label: 'Docker Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'kubernetesSidebar',
                label: 'Kubernetes Roadmap',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mongodbSidebar',
                label: 'MongoDB Roadmap',
              },

              {
                type: 'docSidebar',
                sidebarId: 'promptEngineeringSidebar',
                label: 'Prompt Engineering Roadmap',
              },
            ]
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
