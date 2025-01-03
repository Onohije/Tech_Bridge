import LeftAngledImg from '../leftAngledImg/LeftAngledImg';
import Search from '../search/Search';
import './Hero.css';
import Image1 from '../../assets/images/image1.png';


import Google from "../../assets/images/google-logo.svg";
import Kpmg from "../../assets/images/kpmg-logo.svg";
import Paystack from "../../assets/images/paystack-logo.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Find a <span>job</span> easily
        </h2>
        <p className="hero-description">
          With verified, up-to-date job listings directly from employer
          websites, we create a premium experience for job seekers, employers,
          and data seekers alike.
        </p>
        <div className='search'>
        <Search />
        </div>
        <div className="companies">
          <h3>Trusted by:</h3>
          <div className="companies-logos">
            <img src={Paystack} alt="Paystack Logo" />
            <img src={Google} alt="Google Logo" />
            <img src={Kpmg} alt="KPMG Logo" />
          </div>
        </div>
      </div>
      <div className="left-angled-img">
        <LeftAngledImg image={Image1} posistionAdjustment={"hero-image"}/>
      </div>
    </div>
  );
};

export default Hero;