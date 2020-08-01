import React from "react";
import SegmentContainer from "./SegmentContainer";

const InternalServerError = () => {
  return (
    <SegmentContainer
      h1="500 Internal Server Error!"
      h2="Sorry there's something wrong, we'll be back soon!"
      linkTo="/home"
      name="home"
      btnName="Go Back To Home"
    />
  );
};

export default InternalServerError;
