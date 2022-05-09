import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Notion News</title>
      </Head>
      <Container>
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <h1 className="fs-2 text-capitalize text-center border-bottom border-primary pb-2 mt-4">About</h1>
            <h5 className="my-3">
              NotionNews is a responsive new website powered by NextJS & Notion. It serves absolutely no
              purpose other than seeing how well these technologies play together.
            </h5>
            <div>
              <p className="my-3">
                Whilst relatively simple to set up and maintain, Notion is not a CMS and should not be used as
                one. There are plenty of purpose built CMS that can and should be used instead of Notion.
              </p>
              <p class="my-3">
                If this project was to be implemented for anything other than a hobby, it should be scrapped
                and started again. Notion is a fantastic for taking notes, managing tasks & working in teams,
                but managing content for a website is not one of its strongest points.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
