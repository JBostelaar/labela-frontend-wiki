// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Label A - Frontend Wiki',
  tagline: 'Prime!',
  url: 'https://labela-frontend-wiki.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LabelA', // Usually your GitHub org/user name.
  projectName: 'frontend-wiki', // Usually your repo name.

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {},
    ],
    [
      require.resolve('docusaurus-plugin-sass'),
      {},
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sandervspl/frontend-wiki/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/sandervspl/frontend-wiki/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Label A - Frontend Wiki',
        logo: {
          alt: 'Label A',
          src: 'img/prime-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'react-web',
            label: 'React Web',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'react-mobile',
            label: 'React Mobile',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'hooks',
            label: 'Hooks',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'troubleshooting',
            label: 'Troubleshooting',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/sandervspl/frontend-wiki',
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
                label: 'React Web',
                to: '/docs/react-web/intro',
              },
              {
                label: 'React Mobile',
                to: '/docs/react-mobile/intro',
              },
              {
                label: 'Hooks',
                to: '/docs/hooks/intro',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting/intro',
              },
            ],
          },
          {
            title: 'Frontend Team',
            items: [
              {
                label: 'GitLab',
                href: 'https://gitlab.labela.nl/front-end',
              },
              {
                label: 'GitHub Label A',
                href: 'https://github.com/LabelA',
              },
              {
                label: 'GitHub React Prime',
                href: 'https://github.com/react-prime',
              },
              {
                label: 'Prime Monorepo',
                href: 'https://github.com/LabelA/prime-monorepo',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Website',
                href: 'https://labela.nl',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/labelanl',
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
