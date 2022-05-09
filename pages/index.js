import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Image, Button, Badge } from "react-bootstrap";
import dayjs from "dayjs";
import HomepageArticle from "../components/HomepageArticle";
import HomepageSidebar from "../components/HomepageSidebar";
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  const db = await notion.databases.query({
    database_id: "d99306a808da434f9d0d66fc65e961a8",
    filter: {
      property: "Position",
      select: {
        is_not_empty: true,
      },
    },
  });
  if (db.results.length > 0) {
    const results = db.results.map((result) => {
      return {
        id: result.id,
        created_time: result.created_time,
        image: result.cover.file.url,
        category: result.properties.Category.select.name,
        intro: result.properties.Intro.rich_text[0].plain_text,
        title: result.properties.Name.title[0].plain_text,
        position: result.properties.Position.select.name,
      };
    });
    return {
      props: { results: results }, // will be passed to the page component as props
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default function Home(props) {
  const data = {
    one: props.results.filter((item) => item.position === "Position 1")[0],
    two: props.results.filter((item) => item.position === "Position 2")[0],
    three: props.results.filter((item) => item.position === "Position 3")[0],
    four: props.results.filter((item) => item.position === "Position 4")[0],
    five: props.results.filter((item) => item.position === "Position 5")[0],
    six: props.results.filter((item) => item.position === "Position 6")[0],
  };
  return (
    <div>
      <Head>
        <title>The Latest News powered by Notion | Notion News</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <div className="my-1 p-4 p-md-5 mb-4 border border-primary rounded">
              <Row>
                <Col lg="6" className="px-0">
                  <h1 className="display-4 fst-italic">{data.one.title}</h1>
                  <p className="lead my-3 text-secondary">{data.one.intro}</p>
                  <p className="lead mb-0">
                    <Link href={"/article/" + data.one.id}>
                      <a className="fw-bold">Continue reading...</a>
                    </Link>
                  </p>
                </Col>
                <Col className="d-none d-lg-block">
                  <Image fluid src={data.one.image} className="hero-img" alt={data.one.title} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md="6">
            <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{data.two.category}</strong>
                <h3 className="mb-0">{data.two.title}</h3>
                <div className="mb-1 text-muted">{dayjs(data.two.created_time).format("D MMMM YYYY")}</div>
                <p className="card-text mb-auto text-secondary">{data.two.intro}</p>
                <Link href={"/article/" + data.two.id}>
                  <a>Continue reading...</a>
                </Link>
              </Col>
              <Col className="d-none d-lg-block">
                <Image fluid src={data.two.image} className="featured-card-img" alt={data.two.title} />
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">{data.three.category}</strong>
                <h3 className="mb-0">{data.three.title}</h3>
                <div className="mb-1 text-muted">{dayjs(data.three.created_time).format("D MMMM YYYY")}</div>
                <p className="mb-auto text-secondary">{data.three.intro}</p>
                <Link href={"/article/" + data.three.id}>
                  <a>Continue reading...</a>
                </Link>
              </Col>
              <Col className="d-none d-lg-block">
                <Image fluid src={data.three.image} className="featured-card-img" alt={data.three.title} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="px-3 pe-md-5">
            <HomepageArticle data={data.four} />
            <HomepageArticle data={data.five} />
            <HomepageArticle data={data.six} />
          </Col>
          <Col md="4">
            <HomepageSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
