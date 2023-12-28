import React, { useState } from "react";
import "./../../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { signup } from "../../api/UserApi";
import { toast } from "react-toastify";
import NavBar from "../Navbarcomp";

const Register = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { mutate: signupPost } = useMutation(
    () =>
      signup({
        nik: nik,
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      }),
    {
      onSuccess: async (data) => {
        setNik("");
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        toast.success(data.message, {
          autoClose: 2000,
        });
      },
      onError: (err) => {
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
      },
    }
  );

  return (
    <>
      <NavBar></NavBar>
      <div
        className="register"
        style={{ background: "#FFFFFF", height: "110vh" }}
      >
        <h1
          className="text-center "
          style={{
            fontSize: "18pt",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginTop: "150px",
          }}
        >
          ACCOUNT REGISTER
        </h1>
        <Container className="container-register">
          <Card className="wrap-register my-regis">
            <div className="ps-5 pt-5 pe-5 pb-5">
              <Row>
                <Col md>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>NIK</label>
                    <div
                      className="fst-italic"
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Population Identification Number)
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter number NIK"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>Full Name</label>
                    <div
                      className="fst-italic"
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Name as per Identification Card)
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>
                      Email Address
                    </label>
                    <div
                      className="fst-italic "
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Please provide an active email address)
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <Button
                      className="btn btn-primary"
                      onClick={() => {
                        signupPost();
                      }}
                      style={{ fontFamily: "Roboto", marginTop: "20px" }}
                    >
                      REGISTER
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Container>
      </div>

      {/* <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="my-3">
          <div className="text-field">
            <h1>Privacy Policy for Recruitment SBI</h1>

            <p>
              At Recruitment SBI, accessible from 0, one of our main priorities
              is the privacy of our visitors. This Privacy Policy document
              contains types of information that is collected and recorded by
              Recruitment SBI and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2>Log Files</h2>

            <p>
              Recruitment SBI follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information. Our Privacy Policy
              was created with the help of the{" "}
              <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
                Privacy Policy Generator
              </a>
              .
            </p>

            <h2>Cookies and Web Beacons</h2>

            <p>
              Like any other website, Recruitment SBI uses 'cookies'. These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>

            <p>
              For more general information on cookies, please read{" "}
              <a href="https://www.privacypolicyonline.com/what-are-cookies/">
                the "Cookies" article from the Privacy Policy Generator
              </a>
              .
            </p>

            <h2>Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Recruitment SBI.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Recruitment
              SBI, which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>

            <p>
              Note that Recruitment SBI has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Recruitment SBI's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.{" "}
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites. What Are Cookies?
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Recruitment SBI does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>

            <h2>Online Privacy Policy Only</h2>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Recruitment SBI. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>

            <Form>
              {["checkbox"].map((type) => (
                <div key={type} className="mb-3">
                  <Form.Check type={type} id={`check-api-${type}`}>
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label> I Agree</Form.Check.Label>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                  </Form.Check>
                </div>
              ))}
            </Form>
          </div>
          <div className="text-end">
            <Button
              href="/register"
              variant="primary"
              onClick={handleClose}
              style={{ width: "100px" }}
              className="Button-end"
            >
              Accept
            </Button>
          </div>
        </Modal.Body>
      </Modal> */}
      <>
        <>
          <>
            <>
              <>
                <></>
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default Register;
