const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/logo.png",
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName: "poolshark-labs",
  projectName: "poolshark-docs",
  tagline: "Documentation and guides for Poolshark",
  title: "Poolshark Docs",
  url: "https://docs.poolshark.fi",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          editUrl: "https://github.com/poolshark-protocol/documentation/tree/main/",
          rehypePlugins: [katex],
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [math],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./src/css/sablier.css"), require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      // V1 redirects
      {
        redirects: [
          {
            from: "/protocol/faq/basics",
            to: "/concepts/what-is-poolshark",
          },
          {
            from: "/protocol/guides/getting-started",
            to: "/contracts/v1/guides/getting-started",
          },
          {
            from: "/protocol/guides/chains",
            to: "/contracts/v1/deployments",
          },
          {
            from: "/protocol/introduction",
            to: "/concepts/what-is-poolshark",
          },
          {
            from: "/protocol/subgraphs/endpoints",
            to: "/api/subgraphs/overview",
          },
        ],
      },
    ],
  ],
  scripts: [
    {
      src: "/js/crisp-chat.js",
      async: false,
    },
  ],
  stylesheets: [
    {
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      type: "text/css",
    },
  ],
  staticDirectories: ["static"],
  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-github-codeblock"],
  themeConfig:
    // @type {import('@docusaurus/preset-classic').ThemeConfig}
    {
      algolia: {
        appId: "9L7N2RKHWE",
        apiKey: "4fc960889335dad720b725a02667d46a",
        indexName: "sablierdocs",
      },
      codeblock: {
        showGithubLink: false,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: "dark",

        // Support multiple color modes.
        disableSwitch: false,

        // Whether we should use the `prefers-color-scheme media-query` using user system preferences, instead of the
        // hard-coded `defaultMode`.
        respectPrefersColorScheme: true,
      },
      footer: {
        links: [
          // {
          //   title: "Company",
          //   items: [
          //     {
          //       label: "About",
          //       href: "https://sablierlabs.co.uk",
          //     },
          //     {
          //       label: "Risk Notice",
          //       href: "https://sablier.com/risk-notice",
          //     },
          //     {
          //       label: "Terms of Service",
          //       href: "https://sablier.com/terms-of-service",
          //     },
          //     {
          //       label: "Privacy Policy",
          //       href: "https://docs.google.com/document/d/10OgbKJkoLnZ_pJtF6SAfcP7ufOC18K3N39MH538XeiI",
          //     },
          //   ],
          // },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/PoolsharkLabs",
              },
              {
                label: "Discord",
                href: "https://discord.gg/poolshark-896196350310514739",
              },
              {
                label: "Blog",
                href: "https://mirror.xyz/pshark.eth",
              },
              {
                label: "Branding",
                href: "https://www.figma.com/file/m5ztM0gd1psACKNrMB6ck1/PoolShark?type=design&node-id=22-818&mode=design",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Limit Pools",
                href: "https://github.com/poolshark-protocol/limit/tree/arb-mainnet",
              },
              {
                label: "Cover Pools",
                href: "https://github.com/poolshark-protocol/cover",
              },
              // {
              //   label: "V2 Integration Template",
              //   href: "https://github.com/sablier-labs/sablier-v2-integration-template",
              // },
              {
                label: "Subgraph",
                href: "https://github.com/poolshark-protocol/limit/tree/arb-mainnet/subgraph",
              },
            ],
          },
        ],
        style: "dark",
      },
      image: "img/open-graph.png",
      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
      metadata: [
        {
          name: "keywords",
          content:
            "blockchain, DAO, decentralized finance, defi, docs, Ethereum, foundry, money streaming, NFT, open source, payments, payroll, Poolshark, Safe, smart contracts, solidity, token distribution, token streaming, vesting, web3",
        },
      ],
      navbar: {
        items: [
          {
            label: "Concepts",
            position: "left",
            to: "/concepts/what-is-poolshark",
          },
          {
            label: "Contracts",
            position: "left",
            to: "/contracts/limit/overview",
          },
          {
            label: "Token",
            position: "left",
            to: "/token/tokenomics",
          },
          // {
          //   label: "Apps",
          //   position: "left",
          //   to: "/apps/overview",
          // },
          // {
          //   label: "APIs",
          //   position: "left",
          //   to: "/api/subgraphs/overview",
          // },
          {
            label: "Discord",
            position: "right",
            to: "http://discord.poolshark.fi",
          },
          {
            label: "GitHub",
            position: "right",
            to: "https://github.com/sablier-labs",
          },
          {
            label: "Links",
            position: "right",
            to: "https://link3.to/poolshark",
          },
        ],
        logo: {
          alt: "Poolshark Logo",
          height: "22",
          src: "img/logo.png",
          width: "31",
        },
        title: "Poolshark Docs",
      },
      prism: {
        additionalLanguages: ["solidity"],
        darkTheme: require("prism-react-renderer/themes/palenight"),
        theme: require("prism-react-renderer/themes/github"),
      },
    },
};

module.exports = config;
