import { Button, Badge } from "react-bootstrap";
import dayjs from "dayjs";

const HomepageArticle = (props) => (
  <article className="mb-5">
    <h2 className="my-2">{props.data.title}</h2>
    <p className="my-2">{dayjs(props.data.created_time).format("D MMMM YYYY")}</p>
    <Badge pill bg="success" className="my-2 py-2 px-3">
      {props.data.category}
    </Badge>
    <p>{props.data.intro}</p>
    <Button variant="primary px-4" href={"/article/" + props.data.id}>
      Continue Reading...
    </Button>
  </article>
);

export default HomepageArticle;
