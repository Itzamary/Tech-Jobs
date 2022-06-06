const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/alljobs", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "post_url",
      "title",
      "title_body",
      "budget",
      "techs",
      "created_at",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("alljobs", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/', (req,res) => {
  res.render('homepage')
})

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
