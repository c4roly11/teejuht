import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function MainPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // You can remove this array once you rely only on localStorage
    const defaultPosts = [
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
    ];

    // Merge or use only savedPosts
    setPosts([...savedPosts, ...defaultPosts]);
  }, []);

  return (
    <div className="main-page">
      <Container>
        <Row className="g-4">
          {posts.map((post, idx) => (
            <Col key={idx} xs={12} sm={6} md={4}>
              <Card
                className="post-card"
                onClick={() => navigate(`/post/${idx}`)}
                style={{ cursor: "pointer" }}
              >
                <Row className="g-0">
                  <Col xs={4} md={4}>
                    <Card.Img
                      src={post.image || "https://picsum.photos/100/130"} // fallback
                      className="card-img"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        {post.category || "Kategooria puudub"}
                      </Card.Title>
                      <Card.Subtitle className="card-subtitle">
                        {post.username || "Anonüümne"}
                      </Card.Subtitle>
                      <Card.Text className="card-text">
                        {post.description || post.title}
                      </Card.Text>
                      <div className="card-footer">
                        <div>
                          <i className="bi bi-hand-thumbs-up"></i>{" "}
                          {post.likes || 0}
                        </div>
                        <div>
                          <i className="bi bi-clock"></i>{" "}
                          {post.time || "Just nüüd"}
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
