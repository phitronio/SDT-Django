import HeroCarousel from "../components/Carousel/HeroCarousel";
import Category from "../components/Categories/Category";
import DiscountSection from "../components/Discount/DiscountSection";
import Features from "../components/Features";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category />
      <Product />
      <DiscountSection />
    </div>
  );
};

export default Home;
