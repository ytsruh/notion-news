import { Col, Card, Button } from "react-bootstrap";

export default function CategoryCard() {
  return (
    <Col className="my-3">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/300" className="category-card-img" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </Card.Text>
          <Button className="px-3" href="/article/1">
            Continue Reading...
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
