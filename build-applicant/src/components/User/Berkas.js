/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarUser from "./NavBarUser";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useMutation } from "react-query";
import { postApplication } from "../../api/ApplicationApi";
import { toast } from "react-toastify";
import FooterUser from "./FooterUser";

const Berkas = () => {
  const { nik, name, email } = jwtDecode(
    window.localStorage.getItem("accessToken")
  );
  const { state } = useLocation();
  const [jobId, setJobId] = useState(state.state);
  const [position, setPosition] = useState(state.statePos);
  const [applicantNik, setApplicantNik] = useState(nik);
  const [applicantName, setApplicantName] = useState(name);
  const [applicantEmail, setApplicantEmail] = useState(email);
  const [documentNik, setDocumentNik] = useState(nik);
  const [applicationLetter, setApplicationLetter] = useState();
  const [cv, setCv] = useState();
  const [ktp, setKtp] = useState();
  const [ijazah, setIjazah] = useState();
  const [transkip, setTranskip] = useState();
  const [photo, setPhoto] = useState();
  const [skck, setSkck] = useState();
  const [healthCertificate, setHealthCertificate] = useState();
  const [kk, setKk] = useState();
  const [sim, setSim] = useState();
  const [workExperienceLetter, setWorkExperienceLetter] = useState();
  const [npwpLetter, setNpwpLetter] = useState();
  const [bpjsKesehatan, setBpjsKesehatan] = useState();
  const [bpjsKetenagakerjaan, setBpjsKetenagakerjaan] = useState();
  const [achievementsCertificate, setAchievementsCertificate] = useState();
  const [competencyCertificate, setCompetencyCertificate] = useState();
  const [followRullesLetter, setFollowRullesLetter] = useState();

  const { mutate: applicationPost } = useMutation(
    () =>
      postApplication({
        jobs_id: jobId,
        position: position,
        applicants_nik: applicantNik,
        name: applicantName,
        email: applicantEmail,
        documents_nik: documentNik,
        application_letter: applicationLetter,
        cv: cv,
        ktp: ktp,
        ijazah: ijazah,
        transkip: transkip,
        photo: photo,
        skck: skck,
        health_certificate: healthCertificate,
        kk: kk,
        sim: sim,
        work_experience_letter: workExperienceLetter,
        npwp_letter: npwpLetter,
        bpjs_kesehatan: bpjsKesehatan,
        bpjs_ketenagakerjaan: bpjsKetenagakerjaan,
        achievements_certificate: achievementsCertificate,
        competency_certificate: competencyCertificate,
        follow_rulles_letter: followRullesLetter,
      }),
    {
      onSuccess: async () => {
        toast.success("Lamaran Anda Berhasil terkirim", {
          autoClose: 1500,
        });
      },
      onError: (err) => {
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
      },
    }
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavBarUser></NavBarUser>
      <section id="" style={{ background: "#f3f5fa" }}>
        <div>
          <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
            <h4 className="text-uppercase">
              <b style={{ textAlign: "center" }}>
                <center>
                  <span
                    className="text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    UPLOAD
                  </span>
                  <span
                    style={{
                      backgroundPositionY: "100%",
                      paddingBottom: 10,
                      backgroundSize: "contain",
                      color: "#0D4C92",
                      fontFamily: "Roboto",
                    }}
                  >
                    {" "}
                    DOCUMENT
                  </span>
                </center>
              </b>
            </h4>
          </Container>
          <Container>
            <Row
              className="px-5 py-4 rounded"
              style={{ background: "#DDE6ED" }}
            >
              <Col data-aos="zoom-out" data-aos-delay="500" sm>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Surat Lamaran Kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setApplicationLetter(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Form CV PT SBI
                      <Form.Text className="text-black" column="true" sm={6}>
                        <p className="fst-italic">
                          Download Format CV SBI <a href="/">disini</a>
                        </p>
                      </Form.Text>
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setCv(e.target.files[0])}
                      />
                      <Form.Text className="text-danger" column="true" sm={6}>
                        *dokumen wajib di unggah sesuai format yang disediakan
                        (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Scan KTP
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setKtp(e.target.files[0])}
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Scan Ijazah
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setIjazah(e.target.files[0])}
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Transkrip Nilai
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setTranskip(e.target.files[0])}
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Pas Foto 3x4 Bewarna
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setPhoto(e.target.files[0])}
                      />

                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Scan surat pengalaman kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setWorkExperienceLetter(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Sertifikasi Kompetensi
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setCompetencyCertificate(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Sertifikat Prestasi
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setAchievementsCertificate(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>

              <Col data-aos="zoom-out" data-aos-delay="500" sm>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      NPWP
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setNpwpLetter(e.target.files[0])}
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      BPJS Kesehatan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setBpjsKesehatan(e.target.files[0])}
                      />
                      <Form.Text className="text-black">
                        *hanya diunggah bagi yang sudah terdaftar (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      BPJS Ketenaga Kerjaan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setBpjsKetenagakerjaan(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Kartu Keluarga
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setKk(e.target.files[0])}
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      SKCK Aktif
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setSkck(e.target.files[0])}
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Surat Keterangan Kesehatan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setHealthCertificate(e.target.files[0])
                        }
                      />
                      <Form.Text className="text-danger">
                        *dokumen wajib di unggah (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Form Komitmen
                      <Form.Text className="text-black" column="true" sm={6}>
                        <p className="fst-italic">
                          Download Format CV SVBI <a href="/">disini</a>
                        </p>
                      </Form.Text>
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) =>
                          setFollowRullesLetter(e.target.files[0])
                        }
                      />

                      <Form.Text className="text-danger" column="true" sm={6}>
                        *dokumen wajib di unggah sesuai format yang disediakan
                        (maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column="true" sm={4}>
                      Surat Izin Mengendarai
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={(e) => setSim(e.target.files[0])}
                      />
                      <Form.Text className="text-black">
                        *(maksimal 1MB)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                </Form>
                <Row>
                  <Col sm={7}></Col>
                  <Col sm={5}>
                    <ButtonToolbar aria-label="Toolbar with button groups ">
                      <div className="text-end">
                        {" "}
                        <ButtonGroup
                          className="me-2 mt-2"
                          aria-label="Second group"
                        >
                          <Button
                            style={{ width: "105px", fontFamily: "Roboto" }}
                            type="button"
                            id="btnCancel"
                            className="btn btn-secondary btn-sm"
                            aria-label="Second group"
                          >
                            Cancel
                          </Button>
                        </ButtonGroup>
                      </div>
                      <ButtonGroup
                        className="me-2 mt-2"
                        aria-label="First group"
                      >
                        <div className="text-end">
                          <Button
                            style={{
                              width: "105px",
                              background: "#0D4C92",
                              fontFamily: "Roboto",
                            }}
                            id="btnSubmit"
                            className="btn btn-sm"
                            onClick={() => {
                              applicationLetter === undefined ||
                              cv === undefined ||
                              ktp === undefined ||
                              ijazah === undefined ||
                              transkip === undefined ||
                              photo === undefined ||
                              healthCertificate === undefined ||
                              kk === undefined ||
                              followRullesLetter === undefined
                                ? toast.error(
                                    "Harap mengisi document yang wajib",
                                    {
                                      autoClose: 1500,
                                    }
                                  )
                                : applicationPost();
                            }}
                          >
                            Kirim
                          </Button>
                        </div>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <div style={{ marginTop: "100px" }}></div>
      <FooterUser></FooterUser>
    </div>
  );
};

export default Berkas;
