import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login_Signup.css";
import axios from "axios";
import { showToastMessage } from "../Toast/Toast";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(6, "Password length must be greater than 6 letters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_AUTH_API}/signup`, {
          email: formik.values.email,
          password: formik.values.password,
          name: formik.values.name,
          phone: formik.values.phone,
        })
        .then(function (response) {
          localStorage.setItem("logstat", true);
          localStorage.setItem("token", response.data.authToken);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          props.close_modal();
          navigate("/profile");
          showToastMessage("User is Successfully Registered", "positive");
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            showToastMessage(error.response.data.error, "negative");
          } else {
            showToastMessage("Internal Server Error", "negative");
          }
        });
    },
  });
  return (
    <>
      <div className="form-box1">
        <h2>Sign Up</h2>

        <form className="signin" onSubmit={formik.handleSubmit}>
          <div className="inputfield">
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
            <label>Name:</label>
            <input
              name="name"
              type="name"
              required
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <div className="inputfield">
            <label>Phone:</label>
            <input
              name="phone"
              type="text"
              autoComplete="off"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <p>{formik.errors.phone}</p>
          ) : null}

          <div className="inputfield">
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
            Sign Up
          </button>
        </form>
        <p>
          Already Have an account ?{" "}
          <p
            onClick={() => {
              props.LoginModalTrigger();
            }}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Login
          </p>
        </p>
      </div>
    </>
  );
}

export default Signup;
