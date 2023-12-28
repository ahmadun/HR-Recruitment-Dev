import { DataTypes } from "sequelize";
import db from "./../config/db.js";

const Document = db.define(
  "documents",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    nik: {
      type: DataTypes.STRING,
      unique: true,
    },
    jobs_id: {
      type: DataTypes.INTEGER,
    },
    application_letter: {
      type: DataTypes.TEXT,
    },
    cv: {
      type: DataTypes.TEXT,
    },
    ktp: {
      type: DataTypes.TEXT,
    },
    ijazah: {
      type: DataTypes.TEXT,
    },
    transkip: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    skck: {
      type: DataTypes.TEXT,
    },
    health_certificate: {
      type: DataTypes.TEXT,
    },
    kk: {
      type: DataTypes.TEXT,
    },
    sim: {
      type: DataTypes.TEXT,
    },
    work_experience_letter: {
      type: DataTypes.TEXT,
    },
    npwp_letter: {
      type: DataTypes.TEXT,
    },
    bpjs_kesehatan: {
      type: DataTypes.TEXT,
    },
    bpjs_ketenagakerjaan: {
      type: DataTypes.TEXT,
    },
    achievements_certificate: {
      type: DataTypes.TEXT,
    },
    competency_certificate: {
      type: DataTypes.TEXT,
    },
    follow_rulles_letter: {
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

export default Document;
