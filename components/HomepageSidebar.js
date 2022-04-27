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
          <a href="/world">World</a>
        </li>
        <li>
          <a href="/business">Business</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/science">Science</a>
        </li>
      </ol>
    </div>
    <div className="p-4 mb-3 bg-secondary text-white rounded">
      <h4 className="fst-italic">Our Partners</h4>
      <ol className="list-unstyled">
        <li>
          <a className="text-white" href="https://github.com/" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a className="text-white" href="https://twitter.com/" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a className="text-white" href="https://facebook.com" target="_blank">
            Facebook
          </a>
        </li>
      </ol>
    </div>
  </div>
);

export default HomepageSidebar;
