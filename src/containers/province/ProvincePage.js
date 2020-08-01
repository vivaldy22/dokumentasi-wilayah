import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProvince } from "../../api/api";
import LoadingPage from "../../components/LoadingPage";
import TableProvinces from "./TableProvinces";
import "./province.css";
import { Input } from "semantic-ui-react";

const ProvincePage = (props) => {
  const { setProvincesData } = props;
  const token = sessionStorage.getItem("token");
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = () => {
    getProvince(token)
      .then((res) => {
        if (res.code == 200) {
          setProvincesData(res.data);
          setIsLoaded(true);
        }
      })
      .catch((e) => {
        throw e;
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (!isLoaded) {
    return <LoadingPage />;
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "20px",
        background: "rgba(0,0,0,0.2)",
        maxHeight: "100%",
      }}
    >
      <div className="input-search">
        <Input
          className="search"
          icon="search"
          placeholder="Search Province..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <TableProvinces search={search} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProvincesData: (provinces) => {
      dispatch({ type: "SET_PROVINCES", provinces });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProvincePage);
