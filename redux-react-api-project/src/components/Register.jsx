import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../store/authSlice";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleRegister = () => {
    // Handle registration logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    dispatch(signUpUser({ firstName, lastName, email, password }));
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 mb-4">Register</p>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="First name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Last name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  label="Email"
                  type="email"
                  className="mb-4"
                  style={{ outline: "red" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  label="Password"
                  className="mb-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-center mt-4">
                  <MDBBtn
                    color="primary"
                    type="button"
                    onClick={handleRegister}
                  >
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
