import React from "react";
import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
      <Container text className="home-container">
        <Header
          as="h1"
          content="Welcome Admin!"
          style={{
            fontSize: "3em",
            fontWeight: "normal",
            marginBottom: 0,
            // marginTop: "3.5em",
          }}
        />
        <Header
          as="h2"
          content="Don't forget to always wash your hands!"
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        <Button
          as={NavLink}
          to="/provinces"
          name="provinces"
          color="orange"
          size="large"
        >
          See Provinces List
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
