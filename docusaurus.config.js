/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Portfolio',
  tagline: 'A React-based static github website template.',
  url: 'https://krsbx.github.io/',
  baseUrl: '/',
  organizationName: 'krsbx', // Usually your GitHub org/user name.
  projectName: 'krsbx.github.io', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/krsbx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Muhammad Firdaus Sati',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/krsbx',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'krsbx',
        path: '/',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {
          fullname: 'Muhammad Firdaus Sati',
        },
        repoOptions: {
          type: 'public',
          sort: 'pushed',
          direction: 'desc',
          numRepos: 20,
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/krsbx/krsbx.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/krsbx/krsbx.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
