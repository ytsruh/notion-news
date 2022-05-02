import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Article() {
  return (
    <div>
      <Head>
        <title>Article Headline | Notion News</title>
      </Head>
      <Container fluid="md px-0">
        <Row>
          <Col>
            <Image fluid src="https://via.placeholder.com/300" className="article-hero-img" alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="my-3 text-center">
            <h1 className="article-headline fw-bold">Article Headline</h1>
            <p className="my-2 fs-3">December 14, 2020</p>
            <hr className="bg-primary mx-5" />
            <div className="article-body mx-5 pb-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sed adipisci quaerat eveniet at
                facilis minima earum quibusdam deserunt ratione aut impedit explicabo nihil molestias omnis
                vel distinctio inventore, beatae ab laborum non voluptates expedita. Ipsam quisquam assumenda
                debitis labore, sequi facilis eos numquam autem consequatur eveniet. Quod, est hic repudiandae
                quia eligendi, magnam eveniet nemo quis id tempore aspernatur provident sed autem deleniti, ad
                ab error ipsam perspiciatis! Cum enim, natus quod nobis non, corporis commodi similique
                architecto obcaecati deleniti dicta laboriosam et at illum molestias dolores? Iusto ad placeat
                expedita magni cupiditate, suscipit eveniet delectus accusantium rem! Obcaecati voluptate
                consectetur vero amet dolor incidunt, earum fugit eum nemo voluptatibus, ipsum distinctio
                natus, reiciendis quasi cumque laborum exercitationem facilis! Fugit amet temporibus sequi
                facilis.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sed adipisci quaerat eveniet at
                facilis minima earum quibusdam deserunt ratione aut impedit explicabo nihil molestias omnis
                vel distinctio inventore, beatae ab laborum non voluptates expedita. Ipsam quisquam assumenda
                debitis labore, sequi facilis eos numquam autem consequatur eveniet. Quod, est hic repudiandae
                quia eligendi, magnam eveniet nemo quis id tempore aspernatur provident sed autem deleniti, ad
                ab error ipsam perspiciatis! Cum enim, natus quod nobis non, corporis commodi similique
                architecto obcaecati deleniti dicta laboriosam et at illum molestias dolores? Iusto ad placeat
                expedita magni cupiditate, suscipit eveniet delectus accusantium rem! Obcaecati voluptate
                consectetur vero amet dolor incidunt, earum fugit eum nemo voluptatibus, ipsum distinctio
                natus, reiciendis quasi cumque laborum exercitationem facilis! Fugit amet temporibus sequi
                facilis.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sed adipisci quaerat eveniet at
                facilis minima earum quibusdam deserunt ratione aut impedit explicabo nihil molestias omnis
                vel distinctio inventore, beatae ab laborum non voluptates expedita. Ipsam quisquam assumenda
                debitis labore, sequi facilis eos numquam autem consequatur eveniet. Quod, est hic repudiandae
                quia eligendi, magnam eveniet nemo quis id tempore aspernatur provident sed autem deleniti, ad
                ab error ipsam perspiciatis! Cum enim, natus quod nobis non, corporis commodi similique
                architecto obcaecati deleniti dicta laboriosam et at illum molestias dolores? Iusto ad placeat
                expedita magni cupiditate, suscipit eveniet delectus accusantium rem! Obcaecati voluptate
                consectetur vero amet dolor incidunt, earum fugit eum nemo voluptatibus, ipsum distinctio
                natus, reiciendis quasi cumque laborum exercitationem facilis! Fugit amet temporibus sequi
                facilis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
