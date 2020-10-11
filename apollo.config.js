module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "https://zizopixels11-core.herokuapp.com/graphql/",
    },
  },
};
