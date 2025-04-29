import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Form,
  Button,
  Navbar as BsNavbar,
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
            <Button type="submit">Submit</Button>
          </Form>

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
