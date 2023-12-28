/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarUser from "./NavBarUser";
import Table from "react-bootstrap/Table";
import "aos/dist/aos.css";
import AOS from "aos";
import { getApplicationByApplicant } from "../../api/ApplicationApi";
import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import FooterUser from "./FooterUser";

const InfoPelamar = () => {
  const { nik } = jwtDecode(window.localStorage.getItem("accessToken"));
  const [applicantNik, setApplicantNik] = useState(nik);
  const [application, setApplication] = useState([]);

  // get application
  useQuery("application-applicant", async () => {
    const data = await getApplicationByApplicant(applicantNik);
    setApplication(data);
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section id="" style={{ background: "#f3f5fa" }}>
        <NavBarUser></NavBarUser>
        <div style={{ height: "100vh", marginTop: "100px" }} className="pb-5">
          <Container>
            <h4 className="text-uppercase">
              <b style={{ textAlign: "center" }}>
                <center>
                  <span
                    className="text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    APPLICATION
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
                    LIST
                  </span>
                </center>
              </b>
            </h4>
            <Row className="px-5 py-4 pt-5 pb-5 rounded">
              <Col sm>
                <Table
                  striped
                  bordered
                  hover
                  style={{ background: "#A5C0DD" }}
                  responsive="xl"
                >
                  <thead>
                    <tr className="text-center">
                      <th style={{ width: "50px", fontFamily: "Roboto" }}>
                        No
                      </th>
                      <th style={{ width: "180px", fontFamily: "Roboto" }}>
                        No Pendaftaran
                      </th>
                      <th style={{ width: "180px", fontFamily: "Roboto" }}>
                        NIK
                      </th>
                      <th style={{ width: "180px", fontFamily: "Roboto" }}>
                        Nama{" "}
                      </th>
                      <th style={{ width: "200px", fontFamily: "Roboto" }}>
                        Posisi{" "}
                      </th>
                      <th style={{ width: "200px", fontFamily: "Roboto" }}>
                        Section{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {application.length > 0 ? (
                      application.map((application, i) => (
                        <tr className="text-center" key={i}>
                          <td>{i + 1}</td>
                          <td>{application.no_test}</td>
                          <td>{application.applicants_nik}</td>
                          <td>{application.name}</td>
                          <td>{application.position}</td>
                          <td>{application.section}</td>
                        </tr>
                      ))
                    ) : (
                      <tr className="text-center" aria-colspan={6}>
                        <td colSpan={6} style={{ fontFamily: "Roboto" }}>
                          No data Record
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <FooterUser></FooterUser>
    </div>
  );
};

export default InfoPelamar;
