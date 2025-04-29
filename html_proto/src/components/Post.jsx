import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [comments, setComments] = useState([
    { username: "krabi_vanaamees_34", text: "Väga kasulik postitus!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, { username: "anonüümne", text: newComment }]);
    setNewComment("");
  };

  const posts = [
    {
      category: "HEAOLU",
      username: "terapeut_mare_287",
      description: "Parimad nipid stressi maandamiseks",
      likes: 14,
      time: "30min ago",
      image: "https://picsum.photos/id/237/600/400",
      content:
        "Stress on tänapäeva elu lahutamatu osa, kuid on mitmeid tõhusaid meetodeid, mis aitavad sul seda paremini hallata. Üks lihtne ja tõhus viis on regulaarselt hingamisharjutusi teha. Hinga sügavalt sisse ja välja, keskendudes igale hingetõmbele. Samuti on oluline leida aega enda jaoks – mine loodusesse jalutama või tegele mõne lemmiktegevusega, mis sind rahustab.\n\nSamuti ära unusta tervislikku toitumist ja piisavat und, mis on stressiga toimetuleku võti. Toitumine mängib olulist rolli, sest teatud toidud, nagu täisteratooted, pähklid ja puuviljad, aitavad tasakaalustada keha stressireaktsioone. Kui sul on pidev unepuudus, siis võib stressi tase samuti tõusta, seega leia viise, kuidas tagada endale kvaliteetne uni, näiteks vältides kofeiini õhtuti.",
    },
    {
      category: "FINANTS",
      username: "edukas_tudeng300",
      description: "Kuidas tudengina raha säästa?",
      likes: 25,
      time: "1hr ago",
      image: "https://picsum.photos/id/10/600/400",
      content:
        "Tudengielu võib olla rahaliselt kitsi, kuid siiski on võimalik igapäevaelu kulusid vähendada. Üks lihtsamaid nippe on eelarve koostamine – märgi üles kõik igakuised kulutused ja püüa neid hallata. Samuti tasub toitu ette planeerida ja kokkamine kodus on sageli odavam kui väljas söömine. Kui võimalik, kasuta tudengikartide allahindlusi ja võrdle hindasid enne suuremate ostude tegemist.\n\nKuid mul on olnud probleeme ka säästmisvõimaluste leidmisega, kuna tihti ei jätku raha isegi kõige põhiasjade jaoks. Olen proovinud erinevaid säästmisnippe, kuid need ei ole alati toiminud. Kas teil on mõni soovitus, kuidas oleks võimalik tudengina veelgi rohkem raha säästa, ilma et see liiga palju elukvaliteeti halvendaks?",
    },
    {
      category: "HEAOLU",
      username: "und_pole_207",
      description: "Magan nii halvasti, hea une nippe?",
      likes: 53,
      time: "2hr ago",
      image: "https://picsum.photos/id/26/100/130",
      content:
        "Mul on pidevalt probleeme magamisega – tihti ärkan öösel üles ja ei saa enam magama jääda. Olen proovinud erinevaid unehügieeni nippe, nagu ekraanide vältimine enne magamaminekut ja magamistoa temperatuuri reguleerimine, kuid see ei ole eriti aidanud. Samuti olen lugenud, et regulaarselt liikumine võiks aidata, kuid isegi pärast õhtuseid jalutuskäike on mul raske magama jääda.\n\nKas kellelgi on veel kogemusi, kuidas saaks paremini magama jääda? Mida olete proovinud ja kas see on aidanud? Jagage oma soovitusi, palun!",
    },
    {
      category: "TEHNOLOOGIA",
      username: "chatgpt_bff_1010",
      description: "Kuidas AI-d kasutades koolis mitte vahele jääda?",
      likes: 102,
      time: "2.5hr ago",
      image: "https://picsum.photos/id/23/100/130",
      content:
        "Ma kasutan sageli AI tööriistu, et kiiremalt ülesandeid lahendada ja teavet otsida, kuid mul on mure, et õpetajad võiksid sellele tähelepanu pöörata. Olen proovinud mitmeid AI-põhiseid tööriistu, kuid mureks on, et see võib viia selleni, et mind kahtlustatakse ülesannete kopeerimises või muus vales tegevuses.\n\nKas kellelgi on kogemusi, kuidas AI-d koolis õigesti kasutada, et mitte õpetajate tähelepanu äratada? Kuidas saaksin kasutada neid tööriistu oma õppimise täiustamiseks, jäädes samal ajal ausaks?",
    },
  ];

  const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const allPosts = [...savedPosts, ...posts];
  const post = allPosts[id];
  const [likes, setLikes] = useState(post?.likes || 0);
  const [bookmarked, setBookmarked] = useState(false);

  if (!post) {
    return (
      <Container>
        <h2>Postitust ei leitud</h2>
      </Container>
    );
  }

  return (
    <div>
      <Container className="post-page">
        <Row>
          <Col md={8}>
            <Card className="mb-4 p-3 post">
              <h4 className="mb-2">{post.description}</h4>
              <p className="text-primary mb-3">{post.category}</p>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <strong>{post.username}</strong>
                  <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {post.time}
                  </div>
                </div>
              </div>
              <Card.Img
                variant="top"
                src={post.image}
                style={{
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
                className="mb-3"
              />
              <Card.Text>{post.content}</Card.Text>

              <div className="d-flex gap-3 mt-4">
                <Button
                  variant="outline-primary"
                  onClick={() => setLikes(likes + 1)}
                >
                  <i className="bi bi-hand-thumbs-up"></i> {likes}
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => setLikes(likes > 0 ? likes - 1 : 0)}
                >
                  <i className="bi bi-hand-thumbs-down"></i> Dislike
                </Button>
                <Button variant="outline-dark">
                  <i className="bi bi-send"></i>
                </Button>
                <Button
                  variant={bookmarked ? "success" : "outline-success"}
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <i className="bi bi-bookmark"></i>{" "}
                  {bookmarked ? "Bookmarked" : "Bookmark"}
                </Button>
              </div>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 comment-section">
              <Card.Body>
                <Card.Title>Kommentaarid</Card.Title>

                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="comment-box mb-3 p-2 bg-light rounded"
                  >
                    <strong>{comment.username}:</strong> {comment.text}
                    <div className="comment-actions mt-2 d-flex gap-3">
                      <Button variant="link" className="p-0 text-muted">
                        <i className="bi bi-hand-thumbs-up"></i>
                      </Button>
                      <Button variant="link" className="p-0 text-muted">
                        <i className="bi bi-hand-thumbs-down"></i>
                      </Button>
                      <Button variant="link" className="p-0 text-muted">
                        <i className="bi bi-chat-left-text"></i>
                      </Button>
                    </div>
                  </div>
                ))}

                <Form className="comment-form mt-4" onSubmit={handleAddComment}>
                  <Form.Group className="mb-3" controlId="commentInput">
                    <Form.Control
                      type="text"
                      placeholder="Lisa kommentaar..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </Form.Group>
                  <Button type="submit">Saada</Button>
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
