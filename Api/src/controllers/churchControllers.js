const { Church, Image } = require("../db");

const createChurch = async (
  name,
  description,
  architectural,
  style,
  location,
  image360
) => {
  if (!name) throw Error("El parametro Nombre es necesario");
  const verify = await Church.findOne({ where: { name } });
  if (verify) throw Error("Esta iglesia ya existe");
  if (!style) throw Error("El parametro Estilo es necesario");
  if (!location) throw Error("El parametro Locacion es necesario");
  if (
    ![
      "Indefinido",
      "Barroco",
      "Neoclasico",
      "Neogotico",
      "Replublicano",
      "Romano",
    ].includes(style)
  ) {
    throw Error("Ingrese el Estilo correcto");
  }
  const church = await Church.create({
    name,
    description,
    architectural,
    style,
    location,
    image360,
  });
  return { mesage: "Iglesia creada correctamente", church };
};

const addImage = async (id, img) => {
  if (!img) throw Error("Debes cargar la imagen");
  const church = await Church.findByPk(id);
  if (!church) throw Error("Iglesia inexistente");
  const image = await Image.create({ image: img, churchId: church.id });
  await church.addImage(image);
  return { mesage: `Imagen agregada a ${church.name}` };
};

const list = async () => {
  const listChurch = await Church.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Image,
        attributes: ["image"],
        limit: 1,
      },
    ],
  });
  return listChurch;
};

const churchById = async (id) => {
  const listChurch = await Church.findByPk(id, {
    include: [
      {
        model: Image,
        attributes: ["image"],
      },
    ],
  });
  return listChurch;
};

module.exports = { createChurch, addImage, list, churchById };
