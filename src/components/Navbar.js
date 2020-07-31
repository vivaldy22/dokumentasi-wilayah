import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { onLogout, auth } = props;

  return (
    <div style={{ backgroundColor: "white" }}>
      {auth ? (
        <Menu attached="top" tabular size="massive" color="orange">
          <Menu.Item as={NavLink} to="/home" name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/provinces" name="provinces">
            <Icon name="compass" />
            Provinces
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={onLogout}>
              <Icon name="log out" />
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
