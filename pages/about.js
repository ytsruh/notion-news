import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Notion News</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1 className="fs-2 text-capitalize text-center border-bottom border-primary pb-2 mt-4">About</h1>
            <h5 className="mb-0">
              NotionNews is a responsive new website powered by NextJS & Notion. It serves absolutely no
              purpose other than seeing how well these technologies play together. So far, they seem to work.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
