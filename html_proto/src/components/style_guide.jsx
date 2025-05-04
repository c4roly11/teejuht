import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import './style_guide.scss';
import { Card, Col, Row, Image, ListGroup, Form } from "react-bootstrap";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

function StyleGuide() {
  return (
    <div className="container py-5">
      <h1 className="mb-5 fw-bold">Stiiliraamat</h1>

      {/* 1. Tüpograafia */}
      <section className="mb-5">
  <h2 className="h4 border-bottom pb-2 mb-3">1. Tüpograafia</h2>

  {/* Teksti tüübid */}
  <p>See on tavaline lõigutekst.</p>
  <p className="small">See on väiksem tekst (small).</p>
  <p className="text-muted">See on hajutatud (muted) tekst.</p>
  <Card.Title className="card-title">Bootstrap Card.Title</Card.Title>
  <Card.Subtitle className="card-subtitle">
                    Bootstrap Card.Subtitle
                  </Card.Subtitle>
                  <Card.Text className="card-text">Bootstrap Card.Text</Card.Text>
                  <small className="text-primary">small text-primary</small>


  {/* Pealkirjad */}
  <h1 className="h1">H1 – Pealkiri</h1>
  <h2 className="h2">H2 – Alapealkiri</h2>
  <h3 className="h3">H3 – Väiksem pealkiri</h3>
  <h4 className="h4">H4 – Veel väiksem pealkiri</h4>
  <h5 className="h5">H5 – Väike pealkiri</h5>
  <h6 className="h6">H6 – Väikseim pealkiri</h6>

</section>

      {/* 2. Nupud */}
      <section className="mb-5">
        <h2 className="h4 border-bottom pb-2 mb-3">2. Nupud</h2>
        <button className="btn btn-primary me-2">Primary</button>
        <button className="btn btn-secondary me-2">Secondary</button>
        <button className="btn btn-outline-primary me-2">Outline</button>
        <Button variant="outline-secondary me-2">Outline secondary</Button>
        <Button variant="outline-dark me-2">Outline dark</Button>
        <Button variant="outline-success me-2">Outline success</Button>
      </section>

      {/* 3. Värvipalett */}
      <section className="mb-5">
        <h2 className="h4 border-bottom pb-2 mb-3">3. Värvipalett</h2>
        <div className="d-flex gap-3">
          <div className="rounded bg-primary" style={{ width: '3rem', height: '3rem' }}></div>
          <div className="rounded bg-secondary" style={{ width: '3rem', height: '3rem' }}></div>
          <div className="rounded border border-secondary" style={{width: '3rem', height: '3rem', backgroundColor: '#DBE7F0'}}></div>
          <div className="rounded border border-secondary" style={{width: '3rem', height: '3rem', backgroundColor: 'white'}}></div>
          </div>
      </section>

      {/* 4. Ikonograafia */}
      <section className="mb-5">
        <h2 className="h4 border-bottom pb-2 mb-3">4. Ikonograafia</h2>
        {/* Bootstrap Icons peavad olema eraldi lisatud */}
        <i className="bi bi-house-door fs-4 me-2"></i>
        <i className="bi-plus-circle fs-4 me-2"></i>
        <i className="bi bi-person fs-4 me-2"></i>
        <i className="bi bi-hand-thumbs-up fs-4 me-2"></i>
        <i className="bi bi-clock fs-4 me-2"></i>
        <i className="bi bi-bookmark fs-4 me-2"></i>
        <i className="bi bi-hand-thumbs-down fs-4 me-2"></i>
        <i className="bi bi-chat-left-text fs-4 me-2"></i>
        <i className="bi bi-send fs-4 me-2"></i>
        <i className="bi bi-image fs-4 me-2"></i>
        <i className="bi bi-link-45deg fs-4 me-2"></i>
        <i className="bi bi-text-paragraph fs-4 me-2"></i>
        <i className="bi bi-grid-3x3-gap-fill fs-4 me-2"></i>
        <i className="bi bi-list fs-4"></i>
      </section>

      {/* 5. Komponendid */}
      <section className="mb-5">
  <h2 className="h4 border-bottom pb-2 mb-3">5. Komponendid</h2>
  
  <div className="row g-4">
    {/* Login/Register vorm (staatiline) */}
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 p-3">
        <MDBContainer>
          <MDBTabs pills justify>
            <MDBTabsItem>
              <MDBTabsLink active>Logi sisse</MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink>Registreeru</MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane open>
              <h5 className="text-center mt-3">Tere tulemast tagasi!</h5>
              <p className="text-center small text-muted">
                Logi sisse oma kontoga. <br /> Sinu anonüümsus on tagatud.
              </p>
              <MDBInput wrapperClass="mb-3" label="Kasutajanimi" type="text" />
              <MDBInput wrapperClass="mb-3" label="Parool" type="password" />
              <MDBBtn block>Logi sisse</MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>

    {/* Tulevased komponendid siia */}
    <div className="col-md-6 col-lg-4">
        <div className="card h-100 p-3">
        <div className="d-flex w-100">
          <Card
            className="post-card w-100 d-flex flex-column"
            style={{ cursor: "pointer" }}
          >
            <Row className="g-0 flex-grow-1 align-items-stretch">
              <Col xs={4}>
                <Card.Img
                  src="https://picsum.photos/id/237/100/130"
                  className="card-img h-100"
                />
              </Col>
              <Col xs={8}>
                <Card.Body className="card-body h-100">
                  <Card.Title className="card-title">KATEGOORIA</Card.Title>
                  <Card.Subtitle className="card-subtitle">
                    Kasutajanimi
                  </Card.Subtitle>
                  <Card.Text className="card-text">Pealkiri</Card.Text>
                  <div className="card-footer mt-auto">
                    <div>
                      <i className="bi bi-hand-thumbs-up"></i> 0
                    </div>
                    <div>
                      <i className="bi bi-clock"></i> 0
                    </div>
                    <div>
                      <i className="bi bi-bookmark"></i>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 p-3">
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
      </div>
    </div>

    <div className="col-md-6 col-lg-4">
      <div className="card h-100 p-3">
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
      </div>
    </div>

    <div className="col-md-6 col-lg-4">
    <div className="card h-100 p-3">
    <div className="new-post-page">
      <h2 className="page-title">Uus postitus</h2>

      <Card className="post-card">
        <Card.Body>
          <Form>
            <Form.Group controlId="postTitle" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Pealkiri"
              />
            </Form.Group>

            <Form.Group controlId="postCategory" className="mb-3">
              <Form.Select>
              <option value="">Vali kategooria</option>
                <option value="HEAOLU">HEAOLU</option>
                <option value="FINANTS">FINANTS</option>
                <option value="TEHNOLOOGIA">TEHNOLOOGIA</option>
                <option value="SUHTED">SUHTED</option>
              </Form.Select>
            </Form.Group>

            <div className="toolbar mb-3">
              <Button variant="light" size="sm">
                X
              </Button>
              <Button variant="light" size="sm">
                <i className="bi bi-image"></i>
              </Button>
              <Button variant="light" size="sm">
                <i className="bi bi-link-45deg"></i>
              </Button>
              <Button variant="light" size="sm">
                <i className="bi bi-text-paragraph"></i>
              </Button>
            </div>

            <Form.Group controlId="postContent" className="mb-3">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Sisu"
              />
            </Form.Group>

            <div className="button-group">
              <Button variant="primary" type="submit">
                Postita
              </Button>
              <Button
                variant="secondary"
                type="button"
                className="ms-2"
                
              >
                Salvesta mustand
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>

    <div className="col-md-6 col-lg-4">
      <div className="card h-100 p-3">
      <Card className="mb-4 p-3 post">
                    <h4 className="mb-2">Pealkiri</h4>
                    <p className="text-primary mb-3">KATEGOORIA</p>
                    <div className="d-flex align-items-center mb-3">
                      <div>
                        <strong>Kasutajanimi</strong>
                        <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                          aeg
                        </div>
                      </div>
                    </div>
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/237/100/130"
                      style={{
                        maxHeight: "300px",
                        objectFit: "cover",
                        borderRadius: "1rem",
                      }}
                      className="mb-3"
                    />
                    <Card.Text>Sisu</Card.Text>
      
                    <div className="d-flex gap-3 mt-4">
                      <Button
                        variant="outline-primary"
                      >
                        <i className="bi bi-hand-thumbs-up"></i> 0
                      </Button>
                      <Button
                        variant="outline-secondary"
                      >
                        <i className="bi bi-hand-thumbs-down"></i> 0
                      </Button>
                      <Button variant="outline-dark">
                        <i className="bi bi-send"></i>
                      </Button>
                      <Button
                        variant="outline-success"

                      >
                        <i className="bi bi-bookmark"></i>Salvesta
                      </Button>
                    </div>
                  </Card>
      </div>
    </div>

    <div className="col-md-6 col-lg-4">
      <div className="card h-100 p-3">
      <Card className="h-100 comment-section">
                    <Card.Body>
                      <Card.Title>Kommentaarid</Card.Title>
      

                        <div
                          className="comment-box mb-3 p-2 bg-light rounded"
                        >
                          <strong>Kasutajanimi:</strong> kommentaari sisu
                          <div className="comment-actions mt-2 d-flex gap-3">
                            <Button variant="link" className="p-0 text-muted">
                              <i className="bi bi-hand-thumbs-up"></i>
                            </Button>
                            <Button variant="link" className="p-0 text-muted">
                              <i className="bi bi-hand-thumbs-down"></i>
                            </Button>
                            <Button variant="link" className="p-0 text-muted">
                              <i className="bi bi-chat-left-text"></i>
                            </Button>
                          </div>
                        </div>

      
                      <Form className="comment-form mt-4">
                        <Form.Group className="mb-3" controlId="commentInput">
                          <Form.Control
                            type="text"
                            placeholder="Lisa kommentaar..."
                          />
                        </Form.Group>
                        <Button type="submit">Saada</Button>
                      </Form>
                    </Card.Body>
                  </Card>
      </div>
    </div>
  </div>
</section>

      {/* 6. Paigutus */}
      <section className="mb-5">
        <h2 className="h4 border-bottom pb-2 mb-3">6. Paigutus</h2>
        <p>Kasutame React Bootstrapi paigutusi, peamiselt: Card, Form, Row, Col</p>
      </section>
    </div>
  );
}

export default StyleGuide;