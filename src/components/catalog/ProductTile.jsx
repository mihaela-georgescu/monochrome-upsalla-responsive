export default function ProductTile({ images = {} }) {
  const { main: mainImage, alt: altImage } = images;

  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" title="Monochrome" className="product-tile-image">
          {mainImage ? (
            <picture className="main">
              <img src={mainImage} alt="Monochrome" />
            </picture>
          ) : null}

          {altImage ? (
            <picture className="alt">
              <img src={altImage} alt="Monochrome" />
            </picture>
          ) : null}
        </a>

        <a href="/" title="Favourites" className="product-tile-controls">
          <i className="fa-regular fa-heart"></i>
        </a>

        <h1 className="product-tile-name">
          <a href="/" title="Monochrome">
            Monochrome
          </a>
        </h1>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>
    </article>
  );
}
