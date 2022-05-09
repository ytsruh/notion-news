import Link from "next/link";

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
              <Link href="/">
                <a className="text-white text-decoration-none">Homepage</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white text-decoration-none">About</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ytsruh/notion-news">
                <a target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                  Github
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center text-secondary py-3">
      © 2020 Copyright:{" "}
      <Link href="https://www.ytsruh.com">
        <a target="_blank" rel="noreferrer" className="text-white">
          ytsruh
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
