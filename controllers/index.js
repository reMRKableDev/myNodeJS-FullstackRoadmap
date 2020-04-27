module.exports = {
  getLandingPage: (req, res) => {
    res.status(200).render("index");
  },

  getFrontendPage: (req, res) => {
    res.status(200).render("frontend");
  },

  getBackendPage: (req, res) => {
    res.status(200).render("backend");
  },

  getNotFoundPage: (req, res) => {
    res.status(404).render("404");
  },
};
