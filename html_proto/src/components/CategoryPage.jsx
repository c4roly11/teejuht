import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function CategoryPage() {
  const { categoryName } = useParams();

  let posts = [];

  try {
    const stored = JSON.parse(localStorage.getItem("posts"));
    if (Array.isArray(stored)) {
      posts = stored;
    }
  } catch (e) {
    console.warn("Error parsing posts from localStorage:", e);
  }

  const filtered = posts.filter(
    (post) =>
      post &&
      post.category &&
      post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <Container className="mt-4">
      <h1 className="text-2xl fw-bold mb-4">
        Kategooria: {decodeURIComponent(categoryName)}
      </h1>
      {filtered.length > 0 ? (
        filtered.map((post, index) => (
          <Card key={index} className="mb-3 p-3">
            <Card.Title>{post.description}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {post.username} – {post.time}
            </Card.Subtitle>
            {post.image && (
              <Card.Img
                src={post.image}
                style={{ maxHeight: "200px", objectFit: "cover" }}
                className="mb-2"
              />
            )}
            <Card.Text>{post.content.slice(0, 150)}...</Card.Text>
          </Card>
        ))
      ) : (
        <p>Ühtegi postitust selles kategoorias ei leitud.</p>
      )}
    </Container>
  );
}

export default CategoryPage;
