module.exports = {
  getLandingPage: (req, res) => {
    res.render("index");
  },

  getFrontendPage: (req, res) => {
    res.render("frontend");
  },

  getBackendPage: (req, res) => {
    res.render("backend");
  },
};
