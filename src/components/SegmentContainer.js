import React from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SegmentContainer = ({ h1, h2, linkTo, name, btnName }) => {
  return (
    <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
      <Container text className="home-container">
        <Header
          as="h1"
          content={h1}
          style={{
            fontSize: "3em",
            fontWeight: "normal",
            marginBottom: 0,
            // marginTop: "3.5em",
          }}
        />
        <Header
          as="h2"
          content={h2}
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        <Button
          as={NavLink}
          to={linkTo}
          name={name}
          color="orange"
          size="large"
        >
          {btnName}
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
};

export default SegmentContainer;
