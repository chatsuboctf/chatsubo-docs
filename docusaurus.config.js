const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  themeConfig: {    
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    }
  },
  title: 'Chatsubo',
  tagline: '',
  url: 'https://docs.chatsubo.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'Chatsubo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Chatsubo Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction/index',
          position: 'left',
          label: 'Aperçu',
        },
        {
          type: 'doc',
          docId: 'Introduction/quickstart',
          position: 'left',
          label: 'Quickstart',
        },
        {
          type: 'doc',
          docId: 'Providers/index',
          position: 'left',
          label: 'Providers',
        },
        {
          type: 'doc',
          docId: 'Accès VPN/index',
          position: 'left',
          label: 'Accès VPN',
        },
        {
          type: 'doc',
          docId: 'interface',
          position: 'left',
          label: 'Interface',
        },        {
          type: 'doc',
          docId: 'Administration/settings',
          position: 'left',
          label: 'Administration',
        },
        {
          type: 'doc',
          docId: 'customisation',
          position: 'left',
          label: 'Personnalisation',
        },
        {
          href: 'https://github.com/chatsuboctf/chatsubo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Interface',
          items: [
            {
              label: 'Aperçu',
              to: '/docs/introduction/index',
            },
            {
              label: 'Personnalisation',
              to: '/docs/customisation',
            },
            {
              label: 'Interface',
              to: '/docs/interface',
            }
          ]
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Quickstart',
              to: '/docs/Introduction/index',
            },
            {
              label: 'Providers',
              to: '/docs/Providers/index',
            },
            {
              label: 'Accès VPN',
              to: '/docs/Accès VPN/index',
            },
            {
              label: 'Administration',
              to: '/docs/Administration/settings',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chatsubo`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/chatsuboctf/chatsubo',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chatsuboctf/chatsubo',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
