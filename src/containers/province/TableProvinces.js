import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import ShowDetail from "./ShowDetail";
import { fetchDistricts } from "../../redux/actions";

const TableProvinces = ({ setDistrictsData, search }) => {
  const token = sessionStorage.getItem("token");

  const provinces = useSelector((state) => state.province.provinces);
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState(provinces);

  const loadDistricts = (id) => {
    dispatch(fetchDistricts(token, id));
  };

  useEffect(() => {
    setFiltered(
      provinces.filter((prov) => {
        return prov.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  const showTableContent = filtered.map((prov, i) => {
    return (
      <Table.Row>
        <Table.Cell className="center">{i + 1}</Table.Cell>
        <Table.Cell selectable>
          <ShowDetail
            selName={prov.name}
            button={
              <a
                onClick={() => {
                  loadDistricts(prov.id);
                }}
              >
                {prov.name}
              </a>
            }
          />
        </Table.Cell>
        <Table.Cell className="center">
          <ShowDetail
            selName={prov.name}
            button={
              <Button
                color="orange"
                circular
                icon="magnify"
                onClick={() => {
                  loadDistricts(prov.id);
                }}
              />
            }
          />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div className="table-container">
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3" textAlign={"center"}>
              Data Dokumentasi Wilayah Indonesia
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="table-no">No.</Table.HeaderCell>
            <Table.HeaderCell>Province Name</Table.HeaderCell>
            <Table.HeaderCell className="table-actions">
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{showTableContent}</Table.Body>
      </Table>
    </div>
  );
};

export default TableProvinces;
