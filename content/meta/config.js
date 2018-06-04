const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://okkhor.org",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Arif Hasan",
  authorTwitterAccount: "okkhorx",
  // info
  infoTitle: "Arif Hasan",
  infoTitleNote: "My Blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "arif25169@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/arif25169" },
    { name: "twitter", url: "https://twitter.com/okkhorx" },
    { name: "facebook", url: "http://facebook.com/okkhor" }
   
  ]
};
