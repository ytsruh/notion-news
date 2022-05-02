import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Image, Button, Badge } from "react-bootstrap";
import HomepageArticle from "../components/HomepageArticle";
import HomepageSidebar from "../components/HomepageSidebar";

export default function Home() {
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
                  <h1 className="display-4 fst-italic">Title of a longer featured news article</h1>
                  <p className="lead my-3">
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently
                    about what’s most interesting in this post’s contents.
                  </p>
                  <p className="lead mb-0">
                    <Link href="/article/1">
                      <a className="fw-bold">Continue reading...</a>
                    </Link>
                  </p>
                </Col>
                <Col className="d-none d-lg-block">
                  <Image fluid src="https://via.placeholder.com/300" className="hero-img" alt="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md="6">
            <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <Link href="/article/1">
                  <a>Continue reading...</a>
                </Link>
              </Col>
              <Col className="d-none d-lg-block">
                <Image fluid src="https://via.placeholder.com/300" className="featured-card-img" alt="" />
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <Link href="/article/1">
                  <a>Continue reading...</a>
                </Link>
              </Col>
              <Col className="d-none d-lg-block">
                <Image fluid src="https://via.placeholder.com/300" className="featured-card-img" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="px-3 pe-md-5">
            <HomepageArticle />
            <HomepageArticle />
            <HomepageArticle />
          </Col>
          <Col md="4">
            <HomepageSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
