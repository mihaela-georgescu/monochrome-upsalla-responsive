export default function Footer() {
  return (
    <>
      <div className="footer-inner container">
        <div className="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+44(0)1023456789" title="Call us">
                Call us <br></br> +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="Email customer care">
                Email customer care
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-nav">
          <h1 className="d-block d-lg-none">How can we help?</h1>

          <div className="footer-nav-main-list">
            <ul>
              <li>
                <a href="/" title="style & fit advice">
                  Style and fit{' '}
                  <span className="d-none d-lg-inline">advice</span>
                </a>
              </li>

              <li>
                <a href="/" title="Faqs">
                  Faqs
                </a>
              </li>

              <li>
                <a href="/" title="Delivery">
                  Delivery
                </a>
              </li>

              <li>
                <a href="/" title="Exchanges & Returns">
                  <span className="d-none d-lg-inline">Exchanges & </span>
                  Returns
                </a>
              </li>
            </ul>

            <div className="vr d-lg-none"></div>

            <ul>
              <li>
                <a href="/" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="/" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="/" title="Affiliates">
                  Affiliates
                </a>
              </li>

              <li>
                <a href="/" title="Advertising">
                  Advertising
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-subsq-list d-block d-lg-none">
            <ul>
              <li>
                <a href="/" title="terms & conditions">
                  terms & conditions
                </a>
              </li>

              <li>
                <a href="/" title="privacy & cookies">
                  privacy & cookies
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer-connect">
          <h1 className="d-block d-lg-none">Let`s connect</h1>
          <p className="d-block d-lg-none">
            Be the first to receive exclusive offers
          </p>

          <form className="footer-newsletter">
            <div className="email-subscription">
              <label htmlFor="subscription" className="d-none d-lg-block">
                sign up for our newsletter
              </label>
              <input
                type="email"
                name="subscription"
                id="subscription"
                placeholder="Email address"
              ></input>
            </div>

            <div className="newsletter-consent">
              <input
                type="checkbox"
                name="subscription"
                id="subscription-consent"
              />
              <label htmlFor="subscription-consent">
                I agree with{' '}
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>{' '}
                and I want to receive emails from Monochrome
              </label>
            </div>

            <button
              type="submit"
              title="submit"
              className="button button-primary"
            >
              Submit
            </button>
          </form>

          <div className="footer-social">
            <h1 className="d-block d-lg-none">We are highly likeable!</h1>

            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
