import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Masonry from "react-masonry-css";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";

let items = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
  { id: 5, name: "five" },
];

items = items.map(function (item) {
  return <CategoryCard key={item.id} />;
});

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div>
      <Head>
        <title>{category} News | Notion News</title>
      </Head>
      <Container fluid="md px-3">
        <h1 className="fs-2 text-capitalize text-center border-bottom border-primary pb-2 mt-4">
          {category}
        </h1>
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
