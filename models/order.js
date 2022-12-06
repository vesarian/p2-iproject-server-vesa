"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      DevId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Devs",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: `price is required` },
          notEmpty: { msg: `price is required` },
          isIn: { msg: `must be in integer format` },
        },
      },
      status: DataTypes.STRING,
      info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
