import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import ProvincePage from "./province/ProvincePage";
import Navbar from "../components/Navbar";
import LoginPage from "./login/LoginPage";
import NotFound from "./NotFound";
import HomePage from "./HomePage";
import { getToken } from "../api/api";

const routes = [
  { id: 1, path: "/home", component: HomePage },
  { id: 2, path: "/provinces", component: ProvincePage },
];

const Nav = (props) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      setAuth(true);
      props.history.push({
        pathname: props.location.pathname,
      });
    } else {
      sessionStorage.removeItem("token");
    }
  }, []);

  const onLogin = () => {
    getToken()
      .then((res) => {
        setAuth(true);
        sessionStorage.setItem("token", res.token);
        props.history.push({
          pathname: "/home",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onLogout = () => {
    setAuth(false);
    sessionStorage.removeItem("token");
    props.history.push({
      pathname: "/",
    });
  };

  const routeList = routes.map((route) => {
    return (
      <Route
        key={route.id}
        path={route.path}
        render={(props) => {
          return auth ? <route.component {...props} /> : <Redirect to="/" />;
        }}
      />
    );
  });

  return (
    <div>
      <div className="background-image-home">
        <Navbar onLogout={onLogout} auth={auth} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              if (sessionStorage.getItem("auth") === "loggedIn") {
                onLogin();
              } else {
                return <LoginPage onLogin={onLogin} />;
              }
            }}
          />
          {routeList}
          <Route
            path="*"
            render={(props) => {
              return <NotFound />;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Nav);
