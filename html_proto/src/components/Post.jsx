import React from "react";
import { useParams } from "react-router-dom";
import "./Post.scss";
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

    const posts = [
      {
        category: "HEAOLU",
        username: "terapeut_mare_287",
        description: "Parimad nipid stressi maandamiseks",
        likes: 14,
        time: "30min ago",
        image: "https://picsum.photos/id/237/600/400",
        content: "Stress on tänapäeva elu lahutamatu osa, kuid on mitmeid tõhusaid meetodeid, mis aitavad sul seda paremini hallata. Üks lihtne ja tõhus viis on regulaarselt hingamisharjutusi teha. Hinga sügavalt sisse ja välja, keskendudes igale hingetõmbele. Samuti on oluline leida aega enda jaoks – mine loodusesse jalutama või tegele mõne lemmiktegevusega, mis sind rahustab.\n\nSamuti ära unusta tervislikku toitumist ja piisavat und, mis on stressiga toimetuleku võti. Toitumine mängib olulist rolli, sest teatud toidud, nagu täisteratooted, pähklid ja puuviljad, aitavad tasakaalustada keha stressireaktsioone. Kui sul on pidev unepuudus, siis võib stressi tase samuti tõusta, seega leia viise, kuidas tagada endale kvaliteetne uni, näiteks vältides kofeiini õhtuti."
      },
      {
        category: "FINANTS",
        username: "edukas_tudeng300",
        description: "Kuidas tudengina raha säästa?",
        likes: 25,
        time: "1hr ago",
        image: "https://picsum.photos/id/10/600/400",
        content: "Tudengielu võib olla rahaliselt kitsi, kuid siiski on võimalik igapäevaelu kulusid vähendada. Üks lihtsamaid nippe on eelarve koostamine – märgi üles kõik igakuised kulutused ja püüa neid hallata. Samuti tasub toitu ette planeerida ja kokkamine kodus on sageli odavam kui väljas söömine. Kui võimalik, kasuta tudengikartide allahindlusi ja võrdle hindasid enne suuremate ostude tegemist.\n\nKuid mul on olnud probleeme ka säästmisvõimaluste leidmisega, kuna tihti ei jätku raha isegi kõige põhiasjade jaoks. Olen proovinud erinevaid säästmisnippe, kuid need ei ole alati toiminud. Kas teil on mõni soovitus, kuidas oleks võimalik tudengina veelgi rohkem raha säästa, ilma et see liiga palju elukvaliteeti halvendaks?"
      },
      {
        category: "HEAOLU",
        username: "und_pole_207",
        description: "Magan nii halvasti, hea une nippe?",
        likes: 53,
        time: "2hr ago",
        image: "https://picsum.photos/id/26/100/130",
        content: "Mul on pidevalt probleeme magamisega – tihti ärkan öösel üles ja ei saa enam magama jääda. Olen proovinud erinevaid unehügieeni nippe, nagu ekraanide vältimine enne magamaminekut ja magamistoa temperatuuri reguleerimine, kuid see ei ole eriti aidanud. Samuti olen lugenud, et regulaarselt liikumine võiks aidata, kuid isegi pärast õhtuseid jalutuskäike on mul raske magama jääda.\n\nKas kellelgi on veel kogemusi, kuidas saaks paremini magama jääda? Mida olete proovinud ja kas see on aidanud? Jagage oma soovitusi, palun!"
      },
      {
        category: "TEHNOLOOGIA",
        username: "chatgpt_bff_1010",
        description: "Kuidas AI-d kasutades koolis mitte vahele jääda?",
        likes: 102,
        time: "2.5hr ago",
        image: "https://picsum.photos/id/23/100/130",
        content: "Ma kasutan sageli AI tööriistu, et kiiremalt ülesandeid lahendada ja teavet otsida, kuid mul on mure, et õpetajad võiksid sellele tähelepanu pöörata. Olen proovinud mitmeid AI-põhiseid tööriistu, kuid mureks on, et see võib viia selleni, et mind kahtlustatakse ülesannete kopeerimises või muus vales tegevuses.\n\nKas kellelgi on kogemusi, kuidas AI-d koolis õigesti kasutada, et mitte õpetajate tähelepanu äratada? Kuidas saaksin kasutada neid tööriistu oma õppimise täiustamiseks, jäädes samal ajal ausaks?"
      }
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
      <Container className="post-page">
        <Row>
          <Col md={8}>
            <Card className="mb-4 p-3">

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
                <Button variant="outline-primary">
                  <div>
                      <i className="bi bi-hand-thumbs-up"></i> {post.likes}
                  </div>
                </Button>
                <Button variant="outline-dark">
                  <div>
                      <i className="bi bi-send"></i>
                  </div>
                </Button>
                <Button variant="outline-dark" className="ms-auto">
                  <div>
                      <i className="bi bi-bookmark"></i>
                  </div>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 h-100">
              <h5 className="mb-3">Kommentaarid</h5>

              <div className="mb-3">
                <strong>krabi_vanaamees_34:</strong>{" "}
                Väga kasulik postitus!
              </div>

              <Form>
                <Form.Group controlId="newComment">
                  <Form.Control type="text" placeholder="Lisa kommentaar..." />
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">
                  Saada
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;