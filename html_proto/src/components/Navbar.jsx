import React from "react";
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
    <BsNavbar
      expand="lg"
      className="justify-content-between bg-transparent shadow-none border-0 mt-3"
      style={{ boxShadow: "none", borderBottom: "none" }}
    >
      <Container>
        <Stack
          direction="horizontal"
          gap={4}
          className="w-100 justify-content-between"
        >
          {/* Brand */}
          <BsNavbar.Brand style={{ fontFamily: "Borel", fontSize: "40px" }}>
            Teejuht
          </BsNavbar.Brand>

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Otsi postitust"
              className="me-2"
            />
            <Button type="submit">Otsi</Button>
          </Form>

          {/* Category Dropdown */}
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

          {/* Login Button */}
          <Button className="custom-button" onClick={handleLoginClick}>
            Logi sisse
          </Button>
        </Stack>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
