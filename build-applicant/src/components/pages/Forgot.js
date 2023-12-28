import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { postSendForgetPassword } from "../../api/UserApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import NavBar from "../Navbarcomp";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const { mutate: sendForgetPasswordPost } = useMutation(
    () => postSendForgetPassword({ email: email }),
    {
      onSuccess: async (data) => {
        toast.success(`${data.message}, Please check your email`, {
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

  return (
    <>
      <NavBar></NavBar>
      <div className="change-password " style={{ background: "#FFFFFF" }}>
        <h1
          className="text-center"
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginTop: "150px",
          }}
        >
          VERIFIKASI EMAIL
        </h1>
        <Container className="container-change-pass">
          <Card className="wrap-change-pass">
            <div className="p-5">
              <form>
                <div className="mb-3">
                  <span
                    className="mb-3"
                    style={{ fontSize: "15px", fontFamily: "Roboto" }}
                  >
                    Enter the Related Email to Reset Password
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    onClick={() => sendForgetPasswordPost()}
                    style={{ marginBottom: "10px", fontFamily: "Roboto" }}
                  >
                    SEND VERIFIKASI
                  </Button>
                </div>
                <div className="d-grid">
                  <Button
                    href="/sign-in"
                    type="submit"
                    style={{ backgroundColor: "#9CB4CC", fontFamily: "Roboto" }}
                  >
                    BACK TO SIGN IN{" "}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Forgot;
