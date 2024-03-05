import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreview(props) {
  const { productImages } = props;
  const { title } = props;

  return (
    <section className="home-catalog-preview container">
      <header>
        <h1> {title}</h1>
      </header>

      <CatalogPreview productImages={productImages}></CatalogPreview>
    </section>
  );
}
