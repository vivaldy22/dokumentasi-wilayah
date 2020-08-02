import React from "react";
import SegmentContainer from "../components/SegmentContainer";

const HomePage = (props) => {
  return (
    <div className="background-home-container">
      <SegmentContainer
        h1="Welcome Admin!"
        h2="Don't forget to always wash your hands!"
        linkTo="/provinces"
        name="provinces"
        btnName="See Provinces List"
      />
    </div>
  );
};

export default HomePage;
