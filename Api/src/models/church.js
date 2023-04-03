const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "church",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      architectural: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      style: {
        type: DataTypes.ENUM(
          "Indefinido",
          "Barroco",
          "Neoclasico",
          "Neogotico",
          "Replublicano",
          "Romano"
        ),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image360: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
