import Link from "next/link";

const HomepageSidebar = () => (
  <div className="position-sticky" style={{ top: "2rem", marginBottom: "2rem" }}>
    <div className="p-4 mb-3 bg-primary text-white rounded">
      <h4 className="fst-italic">About</h4>
      <p className="mb-0">
        NotionNews is a responsive new website powered by NextJS & Notion. It serves absolutely no purpose
        other than seeing how well these technologies play together. So far, they seem to work.
      </p>
    </div>
    <div className="p-4">
      <h4 className="fst-italic">Categories</h4>
      <ol className="list-unstyled">
        <li>
          <Link href="/world">
            <a>World</a>
          </Link>
        </li>
        <li>
          <Link href="/business">
            <a>Business</a>
          </Link>
        </li>
        <li>
          <Link href="/sports">
            <a>Sports</a>
          </Link>
        </li>
        <li>
          <Link href="/science">
            <a>Science</a>
          </Link>
        </li>
      </ol>
    </div>
    <div className="p-4 mb-3 bg-secondary text-white rounded">
      <h4 className="fst-italic">Our Partners</h4>
      <ol className="list-unstyled">
        <li>
          <Link href="https://github.com/">
            <a target="_blank" rel="noreferrer" className="text-white">
              Github
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/">
            <a target="_blank" rel="noreferrer" className="text-white">
              Twitter
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://facebook.com">
            <a target="_blank" rel="noreferrer" className="text-white">
              Facebook
            </a>
          </Link>
        </li>
      </ol>
    </div>
  </div>
);

export default HomepageSidebar;
