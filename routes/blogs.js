const router = require("express").Router();
const BlogsModel = require("../models/Blogs.model");
const UserModel = require("../models/User.model");
const authRoutes = require("./auth");

router.get("/blogs", async (req, res) => {
  BlogsModel.find()
    
    .then((blogs) => {
      res.status(200).json(blogs);
      
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.post("/blogs/add", (req, res) => {
  const { title, body, tags, image } = req.body;

  BlogsModel.create({
    title,
    body,
    tags,
    image,
    author: req.session.loggedInUser._id,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.patch("/blogs/:blogId", (req, res) => {
  const {blogId} = req.params
  const { title, body, tags, image } = req.body;

  BlogsModel.findByIdAndUpdate(blogId, {
    title,
    body,
    tags,
    image,
    author: req.session.loggedInUser._id,
  }, {new:true})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});



router.get("/blogs/:blogId", (req, res) => {
  BlogsModel.findById(req.params.blogId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.delete("/blogs/:blogId", (req, res) => {
  BlogsModel.finddByIdAndDelete(req.params.blogId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});




module.exports = router;
