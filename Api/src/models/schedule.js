const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "schedule",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      day: {
        type: DataTypes.ENUM(
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo"
        ),
        allowNull: false,
      },
      initial: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      finish: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
