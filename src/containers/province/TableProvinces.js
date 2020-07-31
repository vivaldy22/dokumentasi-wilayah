import React, { useEffect, useState } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import ShowDetail from "./ShowDetail";
import { getDistricts } from "../../api/api";

const TableProvinces = ({ provinces, setDistrictsData, search }) => {
  const token = sessionStorage.getItem("token");
  const [filtered, setFiltered] = useState(provinces);

  const loadDistricts = (id) => {
    getDistricts(token, id)
      .then((res) => {
        if (res.code == 200) {
          setDistrictsData(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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

const mapStateToProps = (state) => {
  return {
    provinces: state.province.provinces,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDistrictsData: (districts) => {
      dispatch({ type: "SET_DISTRICTS", districts });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableProvinces);
