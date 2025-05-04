import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";

const DefaultPosts = [
  {
    id: 1,
    category: "HEAOLU",
    username: "terapeut_mare_287",
    description: "Parimad nipid stressi maandamiseks",
    likes: 14,
    time: "30min ago",
    image: "https://picsum.photos/id/237/100/130",
  },
  {
    id: 2,
    category: "FINANTS",
    username: "edukas_tudeng300",
    description: "Kuidas tudengina raha säästa?",
    likes: 25,
    time: "1hr ago",
    image: "https://picsum.photos/id/10/100/130",
  },
  {
    id: 3,
    category: "HEAOLU",
    username: "und_pole_207",
    description: "Magan nii halvasti, hea une nippe?",
    likes: 53,
    time: "2hr ago",
    image: "https://picsum.photos/id/26/100/130",
  },
  {
    id: 4,
    category: "TEHNOLOOGIA",
    username: "chatgpt_bff_1010",
    description: "Kuidas AI-d kasutades koolis mitte vahele jääda?",
    likes: 102,
    time: "2.5hr ago",
    image: "https://picsum.photos/id/23/100/130",
  },
];

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

  const allPosts = [...posts, ...DefaultPosts];

  const filtered = allPosts.filter(
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
            <PostCard key={idx} post={post} index={post.id} />
          ))}
        </Row>
      ) : (
        <p>Ühtegi postitust selles kategoorias ei leitud.</p>
      )}
    </Container>
  );
}

export default CategoryPage;
