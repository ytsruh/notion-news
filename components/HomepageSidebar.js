const HomepageSidebar = () => (
  <div class="position-sticky" style={{ top: "2rem", marginBottom: "2rem" }}>
    <div class="p-4 mb-3 bg-primary text-white rounded">
      <h4 class="fst-italic">About</h4>
      <p class="mb-0">
        Customize this section to tell your visitors a little bit about your publication, writers, content, or
        something else entirely. Totally up to you.
      </p>
    </div>
    <div class="p-4">
      <h4 class="fst-italic">Categories</h4>
      <ol class="list-unstyled">
        <li>
          <a href="#">World</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
      </ol>
    </div>
    <div class="p-4 mb-3 bg-secondary text-white rounded">
      <h4 class="fst-italic">Our Partners</h4>
      <ol class="list-unstyled">
        <li>
          <a className="text-white" href="#">
            GitHub
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Twitter
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Facebook
          </a>
        </li>
      </ol>
    </div>
  </div>
);

export default HomepageSidebar;
