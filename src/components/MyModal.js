import React from "react";
import { Form, Modal, Label, Dropdown } from "semantic-ui-react";

const MyModal = ({
  button,
  optionsDist,
  optionsSubDist,
  optionsVillages,
  provName,
  handleDistChange,
  handleSubDistChange,
}) => {
  return (
    <Modal openOnTriggerClick trigger={button} closeIcon>
      <Modal.Header>{provName}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label>Kabupaten / Kota</Label>
              <Dropdown
                fluid
                selection
                search
                options={optionsDist}
                placeholder={"--Select a district--"}
                onChange={handleDistChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Kecamatan</Label>
              <Dropdown
                fluid
                selection
                search
                options={optionsSubDist}
                placeholder={"--Select a sub district--"}
                onChange={handleSubDistChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Kelurahan / Desa</Label>
              <Dropdown
                fluid
                selection
                search
                options={optionsVillages}
                placeholder={"--Select a village--"}
                // onChange={handleTypeChange}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default MyModal;
