import React from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Card } from "react-bootstrap";

function MainPage() {
  const navigate = useNavigate();

  const posts = [
    {
      category: "HEAOLU",
      username: "terapeut_mare_287",
      description: "Parimad nipid stressi maandamiseks",
      likes: 14,
      time: "30min ago",
      image: "https://picsum.photos/id/237/100/130",
    },
    {
      category: "FINANTS",
      username: "edukas_tudeng300",
      description: "Kuidas tudengina raha säästa?",
      likes: 25,
      time: "1hr ago",
      image: "https://picsum.photos/id/10/100/130",
    },
    {
      category: "HEAOLU",
      username: "und_pole_207",
      description: "Magan nii halvasti, hea une nippe?",
      likes: 53,
      time: "2hr ago",
      image: "https://picsum.photos/id/26/100/130",
    },
    {
      category: "TEHNOLOOGIA",
      username: "chatgpt_bff_1010",
      description: "Kuidas AI-d kasutades koolis mitte vahele jääda?",
      likes: 102,
      time: "2.5hr ago",
      image: "https://picsum.photos/id/23/100/130",
    },
  ];

  return (
    <div className="main-page">
      <Container>
        <Row className="g-4">
          {posts.map((post, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className="d-flex">
              <Card
                className="post-card w-100 d-flex flex-column"
                onClick={() => navigate(`/post/${idx}`)}
                style={{ cursor: "pointer" }}
              >
                <Row className="g-0 flex-grow-1 align-items-stretch">
                  <Col xs={4} sm={4} md={5} lg={4}>
                    <Card.Img src={post.image} className="card-img h-100" />
                  </Col>
                  <Col xs={8} sm={8} md={7} lg={8}>
                    <Card.Body className="card-body h-100">
                      <Card.Title className="card-title">
                        {post.category}
                      </Card.Title>
                      <Card.Subtitle className="card-subtitle">
                        {post.username}
                      </Card.Subtitle>
                      <Card.Text className="card-text">
                        {post.description}
                      </Card.Text>
                      <div className="card-footer mt-auto">
                        <div>
                          <i className="bi bi-hand-thumbs-up"></i> {post.likes}
                        </div>
                        <div>
                          <i className="bi bi-clock"></i> {post.time}
                        </div>
                        <div>
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
