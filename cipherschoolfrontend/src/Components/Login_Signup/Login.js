import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login_Signup.css";
import { showToastMessage } from "../Toast/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(6, "Password length must be greater than 6 letters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_AUTH_API}/login`, {
          email: formik.values.email,
          password: formik.values.password,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.authtoken);
          localStorage.setItem("email", response.data.user.email);
          showToastMessage(response.data.message, "positive");
          navigate("/profile")
          props.close_modal();
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },
  });
  return (
    <>
      <div className="form-box1">
        <h2>Sign In</h2>

        <form className="signin" onSubmit={formik.handleSubmit}>
          <div className="inputfield">
            <span></span>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              required
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}

          <div className="inputfield">
            <span></span>
            <label>Password:</label>
            <input
              name="password"
              type="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}

          <br />
          <button className="sgnbutton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          Don't Have an account ?{" "}
          <p
            onClick={() => {
              props.SignupModalTrigger();
            }}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Signup
          </p>
        </p>
      </div>
    </>
  );
}

export default Login;
