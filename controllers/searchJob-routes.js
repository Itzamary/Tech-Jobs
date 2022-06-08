const router = require("express").Router();
const Sequelize = require('sequelize');
const Op  =Sequelize.Op ;
const {Post, Comment, User} = require('../models');

router.get("/:jobSearch", (req, res) => {
    const jobSearch = req.params.jobSearch

    Post.findAll({
        where: {
          techs: { [Op.like]: '%' + jobSearch + '%' }
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
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
              model: User,
              attributes: ["username", "email"],
            },
          }
        ]
      })
      .then(jobs => {
        if (!jobs) {
          res.status(404).json({ message: "No job found with this keyword" });
          return;
        }
        const jobPosts = jobs.map((jobPost) => jobPost.get({ plain: true }));
        console.log(jobPosts, 'job posts')
        res.render('job-search', {jobPosts});
    
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
module.exports = router;
