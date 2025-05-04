import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PostCard.scss";

function PostCard({ post, index }) {
  const navigate = useNavigate();

  return (
    <Col xs={12} sm={6} md={4} className="d-flex">
      <Card
        className="post-card w-100 d-flex flex-column"
        onClick={() => navigate(`/post/${index}`)}
        style={{ cursor: "pointer" }}
      >
        <Row className="g-0 flex-grow-1 align-items-stretch">
          <Col xs={4} sm={4} md={5} lg={4}>
            <Card.Img src={post.image} className="card-img h-100" />
          </Col>
          <Col xs={8} sm={8} md={7} lg={8}>
            <Card.Body className="card-body h-100">
              <Card.Title className="card-title">{post.category}</Card.Title>
              <Card.Subtitle className="card-subtitle">
                {post.username}
              </Card.Subtitle>
              <Card.Text className="card-text">{post.description}</Card.Text>
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
  );
}

export default PostCard;
