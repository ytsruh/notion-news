import { Button, Badge } from "react-bootstrap";

const HomepageArticle = () => (
  <article className="mb-5">
    <h2 className="my-2">Article Title</h2>
    <p className="my-2">December 14, 2020</p>
    <Badge pill bg="secondary" className="my-2 py-2 px-3">
      World
    </Badge>
    <p>
      This is some additional paragraph placeholder content. It has been written to fill the available space
      and show how a longer snippet of text affects the surrounding content. We&apos;ll repeat it often to
      keep the demonstration flowing, so be on the lookout for this exact same string of text.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore, corporis eligendi aspernatur non
      dignissimos, doloremque fugiat quos error aut, dicta sapiente suscipit fuga qui. Esse dolores provident
      error laborum rem animi harum ut magni dicta cumque, autem pariatur, non perspiciatis, itaque ducimus.
      Reiciendis magnam quibusdam enim, officiis dolor vel!
    </p>
    <p>
      This is some additional paragraph placeholder content. It&apos;s a slightly shorter version of the other
      highly repetitive body text used throughout.
    </p>
    <Button variant="primary px-4" href="/article/1">
      Continue Reading...
    </Button>
  </article>
);

export default HomepageArticle;
