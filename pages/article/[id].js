import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";
import dayjs from "dayjs";
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  const { id } = query;
  try {
    const response = await notion.pages.retrieve({ page_id: id });
    const block = await notion.blocks.children.list({
      block_id: id,
      page_size: 100,
    });
    const text = block.results.map((item) => {
      return item.paragraph.rich_text[0].plain_text;
    });
    return {
      props: {
        article: {
          id: response.id,
          created_time: response.created_time,
          image: response.cover.file.url,
          category: response.properties.Category.select.name,
          intro: response.properties.Intro.rich_text[0].plain_text,
          title: response.properties.Name.title[0].plain_text,
          text: text,
        },
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default function Article(props) {
  return (
    <div>
      <Head>
        <title>{props.article.title} | Notion News</title>
      </Head>
      <Container fluid="md px-0">
        <Row>
          <Col>
            <Image fluid src={props.article.image} className="article-hero-img" alt={props.article.title} />
          </Col>
        </Row>
        <Row>
          <Col className="my-3 text-center">
            <h1 className="article-headline fw-bold">{props.article.title}</h1>
            <p className="my-2 fs-3">{dayjs(props.article.created_time).format("D MMMM YYYY")}</p>
            <hr className="bg-primary mx-5" />
            <div className="article-body mx-5 px-5 pb-5">
              {props.article.text.map((text, id) => (
                <p key={id}>{text}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
