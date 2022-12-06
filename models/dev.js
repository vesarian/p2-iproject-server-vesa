"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dev extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dev.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `dev name is required` },
          notEmpty: { msg: `dev name is required` },
        },
      },
      LanguageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Languages",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      MasteryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Masteries",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Dev",
    }
  );
  return Dev;
};
