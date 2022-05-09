import { Col, Card, Button } from "react-bootstrap";

export default function CategoryCard(props) {
  return (
    <Col className="my-3">
      <Card>
        <Card.Img variant="top" src={props.data.image} className="category-card-img" />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text className="text-secondary">{props.data.intro}</Card.Text>
          <Button className="px-3" href={"/article/" + props.data.id}>
            Continue Reading...
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
