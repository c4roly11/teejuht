import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Form,
  Button,
  Navbar as BsNavbar,
  Dropdown,
} from "react-bootstrap";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <BsNavbar expand="lg" className="bg-transparent shadow-none border-0 mt-3">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <BsNavbar.Brand style={{ fontFamily: "Borel", fontSize: "40px" }}>
            Teejuht
          </BsNavbar.Brand>
        </div>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>

      <BsNavbar.Collapse id="navbar-collapse">
        <Stack
          direction="horizontal"
          gap={4}
          className="ms-auto d-none d-lg-flex align-items-center"
        >
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Otsi postitust"
              className="me-2"
            />
            <Button type="submit">Otsi</Button>
          </Form>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Kategooriad
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Karjäär & haridus</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Suhted</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Heaolu</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Finants</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Tehnoloogia</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Eneseareng</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className="custom-button" onClick={handleLoginClick}>
            Logi sisse
          </Button>
        </Stack>

        <Stack direction="vertical" gap={3} className="d-lg-none mt-3">
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Otsi postitust"
              className="me-2"
            />
            <Button type="submit">Otsi</Button>
          </Form>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic-mobile">
              Kategooriad
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Karjäär & haridus</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Suhted</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Heaolu</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Finants</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Tehnoloogia</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Eneseareng</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className="custom-button" onClick={handleLoginClick}>
            Logi sisse
          </Button>
        </Stack>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
