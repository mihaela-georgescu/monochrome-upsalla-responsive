export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-secondary-inner container pt-lg-5">
          <div className="header-brand d-block d-lg-none">
            <p>MONOCHROME</p>
          </div>

          <div className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube social-icon"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook social-icon"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter social-icon"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram social-icon"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44(0)1023456789" title="Call us">
                  Call us +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <ul className="d-flex gap-4 flex-lg-row">
              <li className="header-secondary-search d-none d-lg-block">
                <form>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                  ></input>

                  <button type="submit" name="search" title="search">
                    <i className="fa-solid fa-magnifying-glass control-icon"></i>
                  </button>
                </form>
              </li>

              <li className="header-account">
                <button type="button" title="Account">
                  <i className="fa-solid fa-user control-icon"></i>
                </button>
              </li>

              <li className="header-wishlist">
                <button type="button" title="Wishlist">
                  <i className="fa-regular fa-heart control-icon"></i>
                </button>
              </li>

              <li className="header-cart">
                <button type="button" title="Cart">
                  <i className="fa-solid fa-cart-shopping control-icon"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="header-primary mb-lg-5">
        <nav className="header-menu container">
          <ul className="primary-controls d-flex flex-row justify-content between d-lg-none">
            <li>
              <button type="button" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li className="header-primary-search">
              <form>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search"
                ></input>

                <button type="submit" name="search" title="search">
                  <i className="fa-solid fa-magnifying-glass control-icon"></i>
                </button>
              </form>
            </li>
          </ul>

          <ul className="d-none d-lg-flex ">
            <li>
              <a href="/" title="New Arrivals">
                New Arrivals
              </a>
            </li>

            <li>
              <a href="/" title="Brands">
                Brands
              </a>
            </li>

            <li>
              <a href="/" title="Men's">
                Men{"'"}s
              </a>
            </li>

            <li>
              <a href="/" title="Women's">
                Women{"'"}s
              </a>
            </li>

            <li>
              <a href="/" title="Accessories">
                Accessories
              </a>
            </li>

            <li>
              <a href="/" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
