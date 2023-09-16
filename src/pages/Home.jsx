import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
