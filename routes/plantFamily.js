const router = require("express").Router();
const PlantFamilyModel = require("../models/PlantFamily.model");
const UserModel = require("../models/User.model");
const authRoutes = require("./auth");

router.get("/plantFamily", async (req, res) => {
  PlantFamilyModel.find()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.post("/plantFamily/add", (req, res) => {
  const {
    nickname,
    price,
    image,
    details,
    scientific_name,
    care_routine,
    date_bought,
    } = req.body;
    
  PlantFamilyModel.create({
    nickname,
    price,
    image,
    details,
    scientific_name,
    care_routine,
    date_bought: new Date(date_bought),
    author: req.session.loggedInUser._id
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



router.get('/plantFamily/:plantId', (req, res) => {
    PlantFamilyModel.findById(req.params.plantId)
    .then((respose) => {
        res.status(200).json(response)
    }).catch((err) => {
          res.status(500).json({
            error: "Something went wrong",
            message: err,
          });
    });
})


router.delete("/plantFamily/:plantId", (req, res) => {
  PlantFamilyModel.findByIdAndDelete(req.params.id)
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
