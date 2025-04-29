import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import PostCard from "./PostCard";

import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MainPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    let combinedPosts = [...DefaultPosts];

    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      combinedPosts = [...parsedPosts, ...combinedPosts];
    }

    setPosts(combinedPosts);
  }, []);

  return (
    <div className="main-page">
      <Container>
        <Row className="g-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} post={post} index={idx} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
