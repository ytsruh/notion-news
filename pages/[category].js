import Head from "next/head";
import React from "react";
import Masonry from "react-masonry-css";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  const { category } = query;
  const categoryQuery = category[0].toUpperCase() + category.substring(1);
  const db = await notion.databases.query({
    database_id: "d99306a808da434f9d0d66fc65e961a8",
    filter: {
      property: "Category",
      select: {
        equals: categoryQuery,
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
      };
    });
    return {
      props: { results: results, category: categoryQuery }, // will be passed to the page component as props
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default function Category(props) {
  const items = props.results.map((item) => {
    return <CategoryCard key={item.id} data={item} />;
  });
  return (
    <div>
      <Head>
        <title>{props.category} News | Notion News</title>
      </Head>
      <Container fluid="md px-3">
        <h1 className="fs-2 text-center border-bottom border-primary pb-2 mt-4">{props.category}</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {items}
        </Masonry>
      </Container>
    </div>
  );
}
