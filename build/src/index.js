import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

import applicationRouter from "./routes/application.router.js";
import applicantRouter from "./routes/applicant.router.js";
import documentRouter from "./routes/document.router.js";
import interviewerRouter from "./routes/interviewer.router.js";
import jobRouter from "./routes/job.router.js";
import sectionRouter from "./routes/section.router.js";
import selectionRouter from "./routes/selection.router.js";
import userRouter from "./routes/user.router.js";
import runningTextRouter from "./routes/runningText.router.js";
import certificationRouter from "./routes/certification.router.js";
import majorRouter from "./routes/major.router.js";
import skillRouter from "./routes/skill.router.js";
import universityRouter from "./routes/university.router.js";

import { verifyToken } from "./middleware/auth.js";

import db from "./config/db.js";
db.authenticate()
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((error) => {
    console.log("Unable Connect:", error);
  });

const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const api = "/api/v1";

const whitelist = [
  `http://localhost:8081`,
  `http://localhost:8082`,
  `http://localhost:3000`,
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(api, userRouter);
app.use(api, jobRouter);
app.use(api, documentRouter);
app.use(api, applicantRouter);
app.use(api, applicationRouter);
app.use(api, sectionRouter);
app.use(api, selectionRouter);
app.use(api, interviewerRouter);
app.use(api, runningTextRouter);
app.use(api, certificationRouter);
app.use(api, majorRouter);
app.use(api, skillRouter);
app.use(api, universityRouter);
app.use("/public", express.static("public"));
app.use("/api/v1/uploads", verifyToken, express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Api website recruitment sumitomo" });
});

app.listen(PORT, HOST, () => {
  console.log(`App running on http://${HOST}:${PORT}`);
});
