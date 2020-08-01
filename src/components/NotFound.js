import React from "react";
import SegmentContainer from "./SegmentContainer";

const NotFound = () => {
  return (
    <SegmentContainer
      h1="404 Not Found"
      h2="The page you are looking for is not exist!"
      linkTo="/home"
      name="home"
      btnName="Go Back To Home"
    />
  );
};

export default NotFound;
