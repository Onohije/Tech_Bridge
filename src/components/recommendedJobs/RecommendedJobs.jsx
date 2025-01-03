import "./RecommendedJobs.css";
import { jobListings } from "../../Data/data"
import { useRef } from "react";
import LocationIcon from "../../assets/images/locationIcon.svg";

import ArrowLeft from "../../assets/images/arrowLeft.svg";
import ArrowRight from "../../assets/images/arrowRight.svg";

const RecommendedJobs = () => {
  const carouselRef = useRef(null);
  const handleScrollRight = () => {
    carouselRef.current.scrollLeft += 400;
  };



  const handleScrollLeft = () => {
    carouselRef.current.scrollLeft -= 400;
  };
  return (
    <div className="recommended-jobs">
      <h2>Recommended Jobs</h2>

      <div>
        <div ref={carouselRef} className="jobListing-carousel">
          {jobListings.map((jobListing, index) => (
            <div key={index} className="jobListing-card">
              <div className="job-details">
                <div className="job-type">
                  <p>{jobListing.isFullTime ? "Full Time" : "Part Time"}</p>
                </div>

                <div className="job-title">
                  <img src={jobListing.companyIcon} alt="" />
                  <p>{jobListing.jobTitle}</p>
                </div>
              </div>
              <div className="company-details">
                <p>{jobListing.companyName}</p>
                <div>
                  <div className="location">
                  <img src={LocationIcon} alt="" />
                  <p>{jobListing.location}</p>
                  </div>
                  
                  <button>Apply now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <img src={ArrowLeft} alt="" onClick={handleScrollLeft}  width="50"/> {/* Scroll left */}
          <img src={ArrowRight} alt="" onClick={handleScrollRight} width={"50"} />{" "}
          {/* Scroll right */}
        </div>
      </div>
    </div>
  );
};

export default RecommendedJobs;
