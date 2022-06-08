const router = require("express").Router();
const Sequelize = require('sequelize');
const Op  =Sequelize.Op ;
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// search route
router.post("/search", (req, res) => {

  const term = req.body.techs;

  Post.findAll({
    where: {
      techs: { [Op.like]: '%' + term + '%' }
    }
  })
  .then(jobs => {
    if (!jobs) {
      res.status(404).json({ message: "No job found with this keyword" });
      return;
    }
    res.json(jobs)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get all users
router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "post_url",
      "title",
      "title_body",
      "techs",
      "budget",
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
      }
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/search", (req, res) => {
//   console.log(req);
//   const term = req.params.jobSearch
//   Post.findAll({
//     where: {
//       techs: { [Op.like]: '%' + term + '%' }
//     }
//   })
//   .then(jobs => res.render('jobs', {jobs}))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// })

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
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
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: User,
        attributes: ['email']
      }
    ]
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
    title: req.body.title,
    title_body: req.body.title_body,
    post_url: req.body.post_url,
    user_id: req.session.user_id,
    budget: req.body.budget,
    techs: req.body.techs
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
      title_body: req.body.title_body,
      budget: req.body.budget,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
