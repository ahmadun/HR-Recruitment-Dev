import Application from "../models/application.model.js";
import Randomstring from "randomstring";
import Document from "../models/document.model.js";
import { UploadUser, ImportData } from "../middleware/upload.js";
import db from "../config/db.js";
import { sendEmailApplication } from "../utils/sendEmail.js";

const upload = UploadUser.fields([
  {
    name: "application_letter",
    maxCount: 1,
  },
  {
    name: "cv",
    maxCount: 1,
  },
  {
    name: "ktp",
    maxCount: 1,
  },
  {
    name: "ijazah",
    maxCount: 1,
  },
  {
    name: "transkip",
    maxCount: 1,
  },
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "skck",
    maxCount: 1,
  },
  {
    name: "health_certificate",
    maxCount: 1,
  },
  {
    name: "kk",
    maxCount: 1,
  },
  {
    name: "sim",
    maxCount: 1,
  },
  {
    name: "work_experience_letter",
    maxCount: 1,
  },
  {
    name: "npwp_letter",
    maxCount: 1,
  },
  {
    name: "bpjs_kesehatan",
    maxCount: 1,
  },
  {
    name: "bpjs_ketenagakerjaan",
    maxCount: 1,
  },
  {
    name: "achievements_certificate",
    maxCount: 1,
  },
  {
    name: "competency_certificate",
    maxCount: 1,
  },
  {
    name: "follow_rulles_letter",
    maxCount: 1,
  },
]);

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    console.log(applications);
    res.status(200).send(applications);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//dashboard
export const getApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!application)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(application);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJob = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT 
      applications.id,
      jobs.position, 
      applications.no_test, 
      applications.jobs_id, 
      applications.applicants_nik, 
      applications.name, 
      applications.documents_nik, 
      applications.status, 
      applications.grade, 
      applications.next_selection, 
      applications.time_selection, 
      applications.time, 
      applications.place, 
      applications.timetable, 
      applications.createdAt, 
      applications.updatedAt, 
      applicants.email,
      applicants.*
      FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "";   
      `
    );
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJobAtten = async (req, res) => {
  try {
    const [ya, metaya] = await db.query(
      `SELECT applications.id, applications.no_test,  applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applications.kehadiran, applications.domisili, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik AND applications.kehadiran = "Ya"`
    );

    const [tidak, metatidak] = await db.query(
      `SELECT applications.id, applications.no_test,  applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applications.kehadiran, applications.domisili, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik   AND applications.kehadiran = "Tidak"`
    );

    res.status(200).send({
      ya: ya,
      tidak: tidak,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByAttenYa = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applications.domisili, applications.kehadiran FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.kehadiran = "Ya" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByAttenTidak = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applications.domisili, applications.kehadiran FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.kehadiran = "Tidak" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJobStatus = async (req, res) => {
  try {
    const [lulus, metalulus] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section, applications.next_selection, applications.grade, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applications.kehadiran, applications.domisili, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Lulus" AND applications.tahap_seleksi != "Induction"`
    );

    const [gagal, metagagal] = await db.query(
      `SELECT applications.id, applications.no_test, applications.tahap_seleksi, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Tidak Lulus"`
    );

    res.status(200).send({
      lulus: lulus,
      gagal: gagal,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByStatusLulus = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id  AND applications.status ="Lulus" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByStatusGagal = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.tahap_seleksi, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.status = "Tidak Lulus" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicant = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicantByNik = async (req, res) => {
  try {
    const { nik } = req.params;
    const [results, metadata] = await db.query(
      `SELECT applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik}`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicantByNikJob = async (req, res) => {
  try {
    const { nik, job_id } = req.params;
    const [results, metadata] = await db.query(
      `SELECT applications.id,applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} and applications.jobs_id=${job_id}`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationInterviewer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.jobs_id, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.next_selection = "Wawancara" AND applications.interviewer_id = ${id};`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAnnouncement = async (req, res) => {
  try {
    const { nik, no_test } = req.params;
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.name,  jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.domisili, applications.kehadiran, applications.status, applications.tahap_seleksi, applications.timetable FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} AND applications.no_test=${no_test}`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAnnouncementByAtten = async (req, res) => {
  try {
    const { nik, no_test } = req.params;
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.name,  jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.domisili, applications.kehadiran, applications.status, applications.tahap_seleksi, applications.timetable FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} AND applications.no_test=${no_test}`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postApplication = (req, res) => {
  try {
    upload(req, res, async (err) => {
      const { jobs_id, position, applicants_nik, name, documents_nik, email } =
        req.body;
      if (err) return res.status(400).send({ message: err.message });
      const files = req.files;
      console.log(files);
      const check = await Application.findAll({
        where: {
          jobs_id: jobs_id,
          applicants_nik: applicants_nik,
        },
      });
      if (check != 0)
        return res
          .status(404)
          .send({ message: "You have applied for this job" });
      const data = {
        nik: documents_nik,
        jobs_id: jobs_id,
        position: position,
        application_letter: files.application_letter
          ? files.application_letter[0].filename
          : "",
        cv: files.cv ? files.cv[0].filename : "",
        ktp: files.ktp ? files.ktp[0].filename : "",
        ijazah: files.ijazah ? files.ijazah[0].filename : "",
        transkip: files.transkip ? files.transkip[0].filename : "",
        photo: files.photo ? files.photo[0].filename : "",
        skck: files.skck ? files.skck[0].filename : "",
        health_certificate: files.health_certificate
          ? files.health_certificate[0].filename
          : "",
        kk: files.kk ? files.kk[0].filename : "",
        sim: files.sim ? files.sim[0].filename : "",
        work_experience_letter: files.work_experience_letter
          ? files.work_experience_letter[0].filename
          : "",
        npwp_letter: files.npwp_letter ? files.npwp_letter[0].filename : "",
        bpjs_kesehatan: files.bpjs_kesehatan
          ? files.bpjs_kesehatan[0].filename
          : "",
        bpjs_ketenagakerjaan: files.bpjs_ketenagakerjaan
          ? files.bpjs_ketenagakerjaan[0].filename
          : "",
        achievements_certificate: files.achievements_certificate
          ? files.achievements_certificate[0].filename
          : "",
        competency_certificate: files.competency_certificate
          ? files.competency_certificate[0].filename
          : "",
        follow_rulles_letter: files.follow_rulles_letter
          ? files.follow_rulles_letter[0].filename
          : "",
      };
      Application.create({
        no_test: Randomstring.generate(6).toUpperCase(),
        jobs_id: jobs_id,
        position: position,
        applicants_nik: applicants_nik,
        name: name,
        documents_nik: documents_nik,
        email: email,
      });
      const doc = Document.create(data);
      if (!doc) return req.status(400).send({ message: "Failed Upload" });
      return res.status(200).send({
        message: "Successfully send application",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const { id, ...updates } = item;

      await Application.update(updates, {
        where: { no_test: id },
      });

      const result = await Application.findOne({ where: { no_test: id } });
      console.log(result);
    }

    res.status(200).send({ message: "Update Application Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error.message });
  }
};

//putatten
export const updateApplicationByAtten = async (req, res) => {
  const { domisili, kehadiran } = req.body;
  try {
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, applications.tahap_seleksi, applications.domisili, applications.kehadiran, jobs.position, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.no_test = :no_test`,
      {
        replacements: {
          no_test: req.params.no_test,
        },
        type: db.QueryTypes.SELECT,
      }
    );
    const application = await Application.update(
      {
        domisili: domisili,
        kehadiran: kehadiran,
      },
      {
        where: {
          no_test: req.params.no_test,
        },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateApplicationbyJob = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const { id, ...updates } = item;

      await Application.update(updates, {
        where: { no_test: id },
      });

      const result = await Application.findOne({ where: { no_test: id } });
      console.log(result);

      if (updates.status === "Lulus") {
        const { email, name, no_test, position, time_selection, time, place } =
          result;

        sendEmailApplication(
          email,
          "Informasi Undangan Test",
          name,
          no_test,
          position,
          time_selection,
          time,
          place
        );
      } else {
        console.error("Email recipient is missing or invalid.");
      }
    }

    res.status(200).send({ message: "Update Application Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error.message });
  }
};
