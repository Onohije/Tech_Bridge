import Header from "./components/Header/Header";
import Rectangle from "./assets/images/Rectangle.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import RecommendedJobs from "./components/recommendedJobs/RecommendedJobs";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Reviews from "./components/reviews/Reviews";
import Companies from "./components/companies/Companies";
import StateHook from "./helpers";
import { useEffect } from "react";
import AboutUs from "./components/aboutUs/AboutUs";

const App = () => {
  const {value}=StateHook()

  
  
  useEffect(()=>console.log(value),[value])
  // console.log(number);
  
  
  return (
    <div className="app">
      <img src={Rectangle} alt="" className="rectangle-img" />
      <Header />
      <Hero />
      <RecommendedJobs />
      <AboutUs />
      <Categories />
      <Companies />
      <Reviews />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;