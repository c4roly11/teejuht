import React from "react";
import { useParams } from "react-router-dom";
import "./Post.scss";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Post() {
  const { id } = useParams();

  const posts = [
    {
      category: "HEAOLU",
      username: "terapeut_mare_287",
      description: "Parimad nipid stressi maandamiseks",
      likes: 14,
      time: "30min ago",
      image: "https://picsum.photos/id/237/600/400",
      content:
        "Siin on mõned praktilised nõuanded, mis aitavad sul stressiga paremini toime tulla: Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      category: "FINANTS",
      username: "edukas_tudeng300",
      description: "Kuidas tudengina raha säästa?",
      likes: 25,
      time: "1hr ago",
      image: "https://picsum.photos/id/10/600/400",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      category: "HEAOLU",
      username: "und_pole_207",
      description: "Magan nii halvasti, hea une nippe?",
      likes: 53,
      time: "2hr ago",
      image: "https://picsum.photos/id/26/100/130",
      content: "Joujoujou",
    },
    {
      category: "TEHNOLOOGIA",
      username: "chatgpt_bff_1010",
      description: "Kuidas AI-d kasutades koolis mitte vahele jääda?",
      likes: 102,
      time: "2.5hr ago",
      image: "https://picsum.photos/id/23/100/130",
      content: "joujouwassup",
    },
  ];

  const post = posts[id];

  if (!post) {
    return (
      <Container>
        <h2>Postitust ei leitud</h2>
      </Container>
    );
  }

  return (
    <div>
      <Container className="post-page mt-4">
        <Row className="g-4">
          <Col xs={12} md={8}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={post.image}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{post.description}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.category} - {post.username} - {post.time}
                </Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Kommentaarid</Card.Title>

                {/* Näidis kommentaarid */}
                <div className="mb-3">
                  <strong>krabi_vanaamees_34:</strong> Väga kasulik postitus!
                </div>

                {/* Lisa uus kommentaar */}
                <Form>
                  <Form.Group className="mb-3" controlId="commentInput">
                    <Form.Control
                      type="text"
                      placeholder="Lisa kommentaar..."
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Saada
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
