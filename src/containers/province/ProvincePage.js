import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingPage from "../../components/LoadingPage";
import TableProvinces from "./TableProvinces";
import "./province.css";
import { Input } from "semantic-ui-react";
import { fetchProvinces } from "../../redux/actions/actions";

const ProvincePage = () => {
  const token = sessionStorage.getItem("token");

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = () => {
    dispatch(fetchProvinces(token));
    setIsLoaded(true);
  };

  useEffect(() => {
    loadData().then();
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

export default ProvincePage;
