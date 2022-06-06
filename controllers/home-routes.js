const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    post_url: "https://handlebarsjs.com/guide/",
    title: "Looking for a react Developer",
    title_body: "The description of job is here",
    budget: 50000,
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: "darlinblessing",
    },
  });
});

module.exports = router;
