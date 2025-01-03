import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner" role="region" aria-labelledby="banner-heading">
        <div>
          <h1 id="banner-heading">Get a Job you actually like</h1>
          <p>Create an account and start applying</p>
          <button aria-label="Get started with job applications">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;