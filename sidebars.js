/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// By default, Docusaurus generates a sidebar from the docs folder structure
const sidebars = {
  conceptsSidebar: [{ type: "autogenerated", dirName: "concepts" }],
  contractsSidebar: [{ type: "autogenerated", dirName: "contracts" }],
  apiSidebar: [{ type: "autogenerated", dirName: "api" }],
  appSidebar: [{ type: "autogenerated", dirName: "apps" }],
  tokenSidebar: [{ type: "autogenerated", dirName: "token"}],
};

module.exports = sidebars;
