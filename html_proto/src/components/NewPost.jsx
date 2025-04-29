import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./NewPost.scss";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      username: "anonüümne",
      description: title,
      likes: 0,
      time: "just nüüd",
      image: "https://picsum.photos/100/130",
    };

    // Get existing posts from localStorage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add new post
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Clear the form
    setTitle("");
    setContent("");

    alert("Post salvestatud!");
  };

  return (
    <div className="new-post-page">
      <h2 className="page-title">Uus postitus</h2>

      <Card className="post-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postTitle" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Pealkiri"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="postCategory" className="mb-3">
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
                onClick={() => {
                  localStorage.setItem(
                    "draft",
                    JSON.stringify({ title, content })
                  );
                  alert("Mustand salvestatud!");
                }}
              >
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
