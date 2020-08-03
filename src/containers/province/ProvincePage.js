import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingPage from "../../components/LoadingPage";
import TableProvinces from "./TableProvinces";
import "./province.css";
import { Input } from "semantic-ui-react";
import { fetchProvinces } from "../../redux/actions";
import Pagination from "../../components/Pagination";

const ProvincePage = () => {
  // const token = sessionStorage.getItem("token");

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProvinces());
    setIsLoaded(true);
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (!isLoaded) {
    return <LoadingPage />;
  }

  return (
    <div className="background-table-container">
      <div className="input-search">
        <Input
          className="search"
          icon="search"
          placeholder="Search Province..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <TableProvinces isLoaded={isLoaded} search={search} />
      {/*<Pagination />*/}
    </div>
  );
};

export default ProvincePage;
