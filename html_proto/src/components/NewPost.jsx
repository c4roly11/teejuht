import React from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import "./NewPost.scss";

const NewPost = () => {
  return (
    <div className="new-post-page">
      <div className="back-arrow">&#8592;</div>

      <h2 className="page-title">Uus postitus</h2>

      <Card className="post-card">
        <Card.Body>
          <Form>
            <Form.Group controlId="postTitle" className="mb-3">
              <Form.Control type="text" placeholder="Pealkiri" />
            </Form.Group>

            <Button variant="primary" className="mb-3">
              Lisa kategooria
            </Button>

            {/* Toolbar */}
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
              <Form.Control as="textarea" rows={6} placeholder="Sisu" />
            </Form.Group>

            <div className="button-group">
              <Button variant="primary" type="submit">
                Postita
              </Button>
              <Button variant="secondary" type="button" className="ms-2">
                Salvesta mustand
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewPost;
