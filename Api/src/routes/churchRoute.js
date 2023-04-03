const { Router } = require("express");
const {
  createChurch,
  addImage,
  list,
  churchById,
} = require("../controllers/churchControllers");
const church = Router();

church.get("/list", async (req, res) => {
  try {
    res.status(200).send(await list());
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

church.post("/", async (req, res) => {
  try {
    const { name, description, architectural, style, location, image360 } =
      req.body;

    res
      .status(200)
      .send(
        await createChurch(
          name,
          description,
          architectural,
          style,
          location,
          image360
        )
      );
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

church.post("/addImage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.body;
    res.status(200).send(await addImage(id, img));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
church.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await churchById(id));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = church;
