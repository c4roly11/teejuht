import React from "react";
import {
  Card,
  Button,
  Image,
  ListGroup,
  Nav,
  Navbar,
  Container,
  Stack,
  Form,
} from "react-bootstrap";
import "./MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="justify-content-between">
        <Container>
          <Stack
            direction="horizontal"
            gap={4}
            className="w-100 justify-content-between"
          >
            {/* Brand */}
            <Navbar.Brand style={{ fontFamily: "Borel", fontSize: "40px" }}>
              Teejuht
            </Navbar.Brand>

            {/* Search Form */}
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Otsi postitust"
                className="me-2"
              />
              <Button type="submit">Submit</Button>
            </Form>

            <Image
              src="https://picsum.photos/id/31/50"
              roundedCircle
              className="profile-pic"
            />
          </Stack>
        </Container>
      </Navbar>
      <div className="my-account-page">
        <div className="content-wrapper">
          <header className="align-items-center mb-4">
            <h2>Minu konto</h2>
          </header>

          <Card className="account-info mb-4">
            <Card.Body className="text-center">
              <Image
                src="https://picsum.photos/id/31/100"
                roundedCircle
                className="main-profile-pic mb-3"
              />
              <h5>@pardike123</h5>
              <p>Part Mustamäelt</p>
            </Card.Body>
          </Card>

          <Card className="posts-section">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>Minu postitused</span>
              <div>
                <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                <i className="bi bi-list"></i>
              </div>
            </Card.Header>

            <ListGroup variant="flush">
              <ListGroup.Item className="post-item d-flex">
                <Image
                  src="https://picsum.photos/id/103/70"
                  thumbnail
                  className="post-thumbnail"
                />
                <div className="post-content ms-3">
                  <small className="text-primary">HEAOLU</small>
                  <h6>Kuidas taltsutada lohet?</h6>
                  <div className="post-meta d-flex align-items-center mt-2">
                    <i className="bi bi-hand-thumbs-up me-1"></i> 2.1k
                    <i className="bi bi-clock ms-3 me-1"></i> 1hr ago
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="post-item d-flex">
                <Image
                  src="https://picsum.photos/id/169/70"
                  thumbnail
                  className="post-thumbnail"
                />
                <div className="post-content ms-3">
                  <small className="text-primary">TEHNOLOOGIA</small>
                  <h6>Sprite pudelist lennuk</h6>
                  <div className="post-meta d-flex align-items-center mt-2">
                    <i className="bi bi-hand-thumbs-up me-1"></i> 2.1k
                    <i className="bi bi-clock ms-3 me-1"></i> 1hr ago
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Button variant="primary" className="new-post-btn">
            <i className="bi bi-plus-circle"></i> Uus postitus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
