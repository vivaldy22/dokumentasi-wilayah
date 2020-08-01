import React from "react";
import SegmentContainer from "../components/SegmentContainer";

const HomePage = (props) => {
  return (
    <SegmentContainer
      h1="Welcome Admin!"
      h2="Don't forget to always wash your hands!"
      linkTo="/provinces"
      name="provinces"
      btnName="See Provinces List"
    />
  );
};

export default HomePage;
