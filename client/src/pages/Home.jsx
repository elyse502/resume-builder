import Banner from "../components/home/Banner";
import CallToAction from "../components/home/callToAction";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
    </div>
  );
};

export default Home;
