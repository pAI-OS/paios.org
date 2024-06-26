import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'pAI-OS',
  tagline: 'Personal Artificial Intelligence Operating System',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://paios.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pAI-OS', // Usually your GitHub org/user name.
  projectName: 'paios.org', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kwaai-ai-lab/paios',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kwaai-ai-lab/paios',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: "paios-ed",
      content:
        'Early demo of pAI-OS is now available &mdash; <a href="blog/paios-early-demo/">learn more</a>.',
      backgroundColor: "#ffda18",
      textColor: "#1b1d20",
      isCloseable: true,
    },
    navbar: {
      title: 'pAI-OS',
      logo: {
        alt: 'pAI-OS Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Intro',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: 'https://github.com/kwaai-ai-lab/paios',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Kwaai',
              to: 'https://www.kwaai.ai',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/kwaailab',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/kwaai-ai-lab/paios',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kwaai, a California 501(c)3 non-profit.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
