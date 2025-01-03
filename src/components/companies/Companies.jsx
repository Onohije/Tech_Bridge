import "./Companies.css";

import ArrowRight from "../../assets/images/arrowRight.svg";
import CompanyIcon from "./CompanyIcon";

import Uber from "../../assets/images/companiesLogo/uber.svg";
import Google from "../../assets/images/companiesLogo/google.svg";
import Flutter from "../../assets/images/companiesLogo/flutter.svg";
import Zapier from "../../assets/images/companiesLogo/zapier.svg";
import Accenture from "../../assets/images/companiesLogo/accunture.svg";
import NineMobile from "../../assets/images/companiesLogo/NineMobile.svg";
import Airtel from "../../assets/images/companiesLogo/airtel.svg";
import McKinsey from "../../assets/images/companiesLogo/mcKinsy.svg";

const Companies = () => {
  return (
    <div className="companies">
      <div className="companies__info">
        <h1 className="companies__heading">
          Over 1000+ jobs from top companies in our network
        </h1>
        <p className="companies__description">
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p className="companies__description">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>

        <a href="#" className="companies__learn-more">
          Learn More <img src={ArrowRight} alt="Arrow Right" width={20} />
        </a>
      </div>

      <div className="companies__logos">
        <div className="companies__logos-row">
          <CompanyIcon icon={Uber} />
          <div style={{ margin: "0 -40px" }}>
            <CompanyIcon icon={Google} />
          </div>
          <CompanyIcon icon={Flutter} />
        </div>
        <div className="companies__logos-row">
          <CompanyIcon icon={Zapier} />
          <div style={{ margin: "0 -20px" }}>
            <CompanyIcon icon={Accenture} />
          </div>
        </div>
        <div className="companies__logos-row">
          <CompanyIcon icon={NineMobile} />
          <CompanyIcon icon={Airtel} />
          <div style={{ margin: "0 -20px" }}>
          <CompanyIcon icon={McKinsey} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;