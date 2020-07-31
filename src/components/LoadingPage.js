import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingPage = () => {
  return (
    <Dimmer
      active
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        marginTop: "7.6vh",
        height: "92.4vh",
      }}
    >
      <Loader size="massive">Loading data</Loader>
    </Dimmer>
  );
};

export default LoadingPage;
