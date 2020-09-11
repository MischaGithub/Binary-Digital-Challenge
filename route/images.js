const express = require("express");
const router = express.Router();
const { validationResult , check} = require("express-validator");

const Slide = require("../model/Slide");

// @route           GET api/images
// @desc            Save image and desciption
// @access          Public
router.get("/", async (req, res) => {
    try {
      const slides = await Slide.find({});
      res.json(slides);
    } catch (err) {
      console.error(err.message);5
      res.status(500).send("Server Error");
    }
  });

// @route           POST api/images
// @desc            Save image and desciption
// @access          Public
router.post(
    "/",
    [
      [
        check("description", "Description is required").not().isEmpty(),
       
      ],
    ],
    async (req, res) => {
      //  Errors
      const errors = validationResult(req);
  
      // Check errors
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Pulling out the info
      const {
        image_url,
        name,
        description,
      } = req.body;
  
      try {
        const newSlide = new Slide({
          image_url,
          name,
          description,
        });
  
        const slide = await newSlide.save();
        res.json(slide);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );

// @route           PUT api/images/:id
// @desc            Update or change of image and description
// @acess           Private
router.put("/:id", (req, res) => {
    res.send("Update Image");
});



module.exports = router;