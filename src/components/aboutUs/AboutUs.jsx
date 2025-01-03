// AboutUs.jsx
import "./AboutUs.css";
import Image1 from "../../assets/images/aboutUs/image1.png";
import Image2 from "../../assets/images/aboutUs/image2.png";
import Image3 from "../../assets/images/aboutUs/image3.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="cards">
          <div className="cards__column">
            <div className="card">
              <img src={Image1} alt="Product Analyst at Paystack" />
              <p className="role">
                Product Analyst <span>@ Paystack</span>
              </p>
            </div>
            <div className="card">
              <img src={Image3} alt="Securities Trader at McKinsey" />
              <p className="role">
                Securities Trader <span>@ McKinsey</span>
              </p>
            </div>
          </div>

          <div className=" single-card">
            <div className="card">
              <img src={Image2} alt="HR Manager at Paystack" />
              <p className="role">
                HR Manager <span>@ Paystack</span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-us__text">
          <h2>How it Works</h2>
          <p>
            Getajob helps you find the right job easily. Discover opportunities
            in popular industries and top companies while showcasing your skills
            to recruiters.
          </p>
          <ul>
            <li>
              <p>
                <span className="icon">✔</span>
                <strong>Search Jobs:</strong>
              </p>
              Explore jobs in leading industries with top companies. Create
              alerts so you never miss an opportunity.
            </li>
            <li>
              <p>
                <span className="icon">✔</span>
                <strong>Create a Profile and Get Noticed:</strong>
              </p>
              Showcase your skills and experience so recruiters can find you.
              Upload your CV for quick applications.
            </li>
            <li>
              <p>
                <span className="icon">✔</span>
                <strong>Apply for Jobs:</strong>
              </p>
              Access training to enhance your skills or visit our Career Center
              for tips to build your career.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;