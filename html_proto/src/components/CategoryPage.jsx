import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";

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
        <Row className="g-4">
          {filtered.map((post, idx) => (
            <PostCard key={idx} post={post} index={idx} />
          ))}
        </Row>
      ) : (
        <p>Ühtegi postitust selles kategoorias ei leitud.</p>
      )}
    </Container>
  );
}

export default CategoryPage;
