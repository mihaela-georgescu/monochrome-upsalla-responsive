import HomeContent from '@/components/home/HomeContent';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import BannerMain from '@/components/home/BannerMain';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import ProductTile from '@/components/catalog/ProductTile';
import CatalogControls from '@/components/catalog/CatalogControls';

const productImages1 = [
  {
    main: '/images/products/product-01a.png',
    alt: '/images/products/product-01b.png',
  },
  {
    main: '/images/products/product-02a.png',
    alt: '/images/products/product-02b.png',
  },
  {
    main: '/images/products/product-03a.png',
    alt: '/images/products/product-03b.png',
  },
  {
    main: '/images/products/product-04a.png',
    alt: '/images/products/product-04b.png',
  },
];

const productImages2 = [
  {
    main: '/images/products/product-05a.png',
    alt: '/images/products/product-05b.png',
  },
  {
    main: '/images/products/product-06a.png',
    alt: '/images/products/product-06b.png',
  },
  {
    main: '/images/products/product-07a.png',
    alt: '/images/products/product-07b.png',
  },
  {
    main: '/images/products/product-08a.png',
    alt: '/images/products/product-08b.png',
  },
];

const title1 = [`New Stuff`];
const title2 = [`Glamour Suits`];
const title3 = [`Men's`];
const title4 = [`Women's`];

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Header></Header>
      </header>

      <main className="content-main">
        <div className="banner-main d-block d-lg-none mb-4">
          <BannerMain></BannerMain>
        </div>

        <div className="layout-grid mb-4 mb-lg-5">
          <HomeCatalogPreview
            title={title1}
            productImages={productImages1}
          ></HomeCatalogPreview>
        </div>

        <div className="layout-grid mb-4 mb-lg-5">
          <HomeCatalogPreview
            title={title2}
            productImages={productImages2}
          ></HomeCatalogPreview>
        </div>

        <div className="home-content mb-4 mb-lg-5">
          <HomeContent></HomeContent>
        </div>

        <div className="layout-grid mb-4 mb-lg-5">
          <HomeCatalogPreview
            title={title3}
            productImages={productImages1}
          ></HomeCatalogPreview>

          <CatalogControls></CatalogControls>
        </div>

        <div className="layout-grid mb-4 mb-lg-5">
          <HomeCatalogPreview
            title={title4}
            productImages={productImages2}
          ></HomeCatalogPreview>

          <CatalogControls></CatalogControls>
        </div>
      </main>

      <footer className="footer py-lg-3">
        <Footer></Footer>
      </footer>
    </div>
  );
}
