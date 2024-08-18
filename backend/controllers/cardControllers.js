import cardSchema from "../models/cardSchema.js";

// Create Card
const createCardController = async (req, res) => {
  try {
    const { title, description } = req.body;

    // validation
    if (title === "" || description === "") {
      return res.status(500).send({
        success: false,
        message: "Title and Description both required",
      });
    }

    // check card already exists or not
    const existingTitle = await cardSchema.findOne({ title });
    if (existingTitle) {
      return res.status(500).send({
        success: false,
        message:
          "The title already is in the database | change the title to create new card",
      });
    }

    // save the card
    const card = await new cardSchema({
      title,
      description,
    }).save();

    res.status(201).send({
      success: true,
      message: "Card saved successfully",
      data: card,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Creation of a Card",
      error: err,
    });
  }
};

// Get all cards
const getCardsController = async (req, res) => {
  try {
    const data = await cardSchema.find();
    if (data.length === 0) {
      return res.status(500).send({
        success: false,
        message: "No data found",
      });
    }
    res.status(201).send({
      success: true,
      message: "All cards featched successfully",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in getting all cards",
      error: err,
    });
  }
};

// Get get specific card
const getCardController = async (req, res) => {
  const title = req.params.title;
  try {
    const data = await cardSchema.find({
      title: { $regex: title, $options: "i" },
    });
    // console.log(data);
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "No data found",
      });
    }
    res.status(201).send({
      success: true,
      message: "Card featched successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in featching card using title",
      error: err,
    });
  }
};

export { createCardController, getCardController, getCardsController };
