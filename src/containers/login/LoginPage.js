import React, { useEffect, useState } from "react";
import InputLogin from "../../components/InputLogin";
import "./loginPage.css";
import {
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  FormControl,
} from "@material-ui/core";
import mySwal from "../../components/MySwal";

// const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const LoginPage = (props) => {
  const initialStateUserInput = {
    email: "",
    password: "",
  };
  const [userInput, setUserInput] = useState(initialStateUserInput);
  const [remember, setRemember] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      props.onLogin();
    }
  }, []);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
    if (!userInput.email) {
      setIsEmailValid(true);
    }
    if (!userInput.password) {
      setIsPasswordValid(true);
    }
  };

  const handleCheckbox = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmitBtn = () => {
    if (!userInput.email && !userInput.password) {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    } else if (!userInput.email && !userInput.password) {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    } else if (userInput.email && !userInput.password) {
      setIsEmailValid(true);
      setIsPasswordValid(false);
    } else if (userInput.email && userInput.password) {
      if (userInput.email === "root" && userInput.password === "root") {
        mySwal({
          title: "Login success",
          text: "Wow you made it!",
          icon: "success",
          confirmText: "Let's go to the next page!",
          doNext: () => {
            setIsEmailValid(true);
            setIsPasswordValid(true);
            props.onLogin();
          },
        });
      } else {
        mySwal({
          title: "Oops",
          text:
            "Looks like your username or password doesn't meant to be together!",
          icon: "error",
          confirmText: "Try Again! Don't give up yet!",
          doNext: () => {
            setUserInput(initialStateUserInput);
          },
        });
      }
    } else {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    }
  };

  const handleKeyUp = (e) => {
    if (e.charCode === 13) {
      handleSubmitBtn();
    }
  };

  return (
    <div className="background-image">
      <div className="form-container">
        <div className="empty-container" />
        <div className="lock-icon" />
        <Typography
          component="h1"
          variant="h5"
          style={{ alignSelf: "center", marginBottom: "30px" }}
        >
          Sign in
        </Typography>
        <FormControl>
          <label>Email address or Username</label>
          <InputLogin
            onTextChange={handleChange}
            onKeyPress={handleKeyUp}
            value={userInput.email}
            placeholder="Your email or username"
            type="text"
            name="email"
            valid={isEmailValid}
          />
        </FormControl>
        <FormControl>
          <label style={{ marginTop: "10px" }}>Password</label>
          <InputLogin
            onTextChange={handleChange}
            onKeyPress={handleKeyUp}
            value={userInput.password}
            placeholder="Your password"
            type="password"
            name="password"
            valid={isPasswordValid}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              color="primary"
              name="remember"
              onChange={handleCheckbox}
            />
          }
          label="Remember me"
        />
        <Button
          onClick={handleSubmitBtn}
          color="primary"
          variant="contained"
          disableElevation
          className="button-submit"
          style={{ marginTop: "6px" }}
          disabled={!(userInput.email && userInput.password)}
        >
          Sign in
        </Button>
        <div className="sign-in-link-container">
          <Link href="#" variant="body2">
            {"Forgot your password?"}
          </Link>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign up here!"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
