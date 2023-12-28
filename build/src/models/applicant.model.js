import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Applicant = db.define(
  "applicants",
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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name can not be empty",
        },
      },
    },
    place_of_birth: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.ENUM("Laki-laki", "Perempuan"),
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    marital_status: {
      type: DataTypes.ENUM("Belum Menikah", "Sudah Menikah"),
    },
    address_ktp: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    religion: {
      type: DataTypes.STRING,
    },
    biological_mother_name: {
      type: DataTypes.STRING,
    },
    father_name: {
      type: DataTypes.STRING,
    },
    mother_name: {
      type: DataTypes.STRING,
    },
    npwp: {
      type: DataTypes.STRING,
    },
    last_education: {
      type: DataTypes.STRING,
    },
    school_name: {
      type: DataTypes.STRING,
    },
    major: {
      type: DataTypes.STRING,
    },
    graduation_year: {
      type: DataTypes.INTEGER,
    },
    ipk: {
      type: DataTypes.STRING,
    },
    work_experience_pt: {
      type: DataTypes.STRING,
    },
    work_experience: {
      type: DataTypes.STRING,
    },
    total_work_experience: {
      type: DataTypes.STRING,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    experience_description: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.STRING,
    },
    certification: {
      type: DataTypes.STRING,
    },
    expected_salary: {
      type: DataTypes.STRING,
    },
    expected_working_time: {
      type: DataTypes.STRING,
    },
    ready_shift: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    ready_any_department: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    is_studying: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    is_working: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    vehicle: {
      type: DataTypes.STRING,
    },
    have_sim: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    nail_long: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    hospitalized: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    have_disease: {
      type: DataTypes.STRING,
    },
    smoking: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    left_handed: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    distinguish_colors: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    is_worked_sbi: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    ever_worked_sbi: {
      type: DataTypes.STRING,
    },
    ready_follow_rulles: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    hobby: {
      type: DataTypes.STRING,
    },
    special_achievements: {
      type: DataTypes.STRING,
    },
    motivation: {
      type: DataTypes.STRING,
    },
    tribe: {
      type: DataTypes.STRING,
    },
    no_hp: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [9, 13],
          msg: "no hp value length is 9-13",
        },
      },
    },
    no_wa: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [9, 13],
          msg: "no wa value length is 9-13",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Applicant;
