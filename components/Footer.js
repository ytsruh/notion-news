const Footer = () => (
  <footer className="bg-primary text-light pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-secondary">About</h5>
          <p>Notion News is a simple new site made using the latest technologies.</p>
          <p>We deliver news in a quick, easy & mobile friendly way :)</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-6 mb-md-0 mb-3">
          <h5 className="text-secondary">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white text-decoration-none">
                Homepage
              </a>
            </li>
            <li>
              <a href="/about" className="text-white text-decoration-none">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-white text-decoration-none">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center text-secondary py-3">
      © 2020 Copyright:{" "}
      <a href="https://www.ytsruh.com" target="_blank" className="text-white">
        ytsruh
      </a>
    </div>
  </footer>
);

export default Footer;
