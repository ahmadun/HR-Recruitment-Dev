import { DataTypes } from "sequelize";
import db from "../config/db.js";

const SWS = db.define(
  "sws",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    photo: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default SWS;
