import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Form,
  Button,
  Navbar as BsNavbar,
  Dropdown,
} from "react-bootstrap";
import { AuthContext } from "../App";
import "./Navbar.scss";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleProfileClick = () => navigate("/account");

  const handleCategoryClick = (category) => {
    const encoded = encodeURIComponent(category.toLowerCase());
    navigate(`/category/${encoded}`);
  };

  const categories = [
    "Karjäär & haridus",
    "Suhted",
    "Heaolu",
    "Finants",
    "Tehnoloogia",
    "Eneseareng",
  ];

  return (
    <BsNavbar
      expand="lg"
      collapseOnSelect
      className="navbar-light bg-transparent shadow-none border-0 mt-3"
    >
      <Container fluid className="align-items-center">
        <BsNavbar.Brand>Teejuht</BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="navbar-collapse"
          className="d-lg-none"
        />

        <BsNavbar.Collapse id="navbar-collapse" className="ms-auto">
          {/* Desktop */}
          <Stack
            direction="horizontal"
            gap={4}
            className="ms-auto d-none d-lg-flex align-items-center"
          >
            <a
              href="/style_guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              Stiiliraamat
            </a>
            <div style={{ maxWidth: "300px" }}>
              <Form className="d-flex custom-search-form">
                <Form.Control
                  type="text"
                  placeholder="Otsi postitust"
                  className="me-2"
                />
                <Button type="submit">Otsi</Button>
              </Form>
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Kategooriad
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((cat, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {isLoggedIn ? (
              <img
                src="https://i.pravatar.cc/40"
                alt="Profiilipilt"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={handleProfileClick}
              />
            ) : (
              <Button className="custom-button" onClick={handleLoginClick}>
                Logi sisse
              </Button>
            )}
          </Stack>

          {/* Mobile */}
          <Stack direction="vertical" gap={3} className="d-lg-none mt-3">
            <a
              href="/style_guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              Stiiliraamat
            </a>
            <Form className="d-flex custom-search-form">
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
                {categories.map((cat, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {isLoggedIn ? (
              <img
                src="https://i.pravatar.cc/40"
                alt="Profiilipilt"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={handleProfileClick}
              />
            ) : (
              <Button className="custom-button" onClick={handleLoginClick}>
                Logi sisse
              </Button>
            )}
          </Stack>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
