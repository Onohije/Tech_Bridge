import LeftAngledImg from '../leftAngledImg/LeftAngledImg';
import './Reviews.css';
import Image1 from '../../assets/images/reviewsImage.png'

import ArrowLeft from "../../assets/images/arrowLeft.svg";
import ArrowRight from "../../assets/images/arrowRight.svg";


const Reviews = () => {
  return (
    <div className='reviews'>
     
      {/* <img src="" alt="" /> */}
        <h2 className='reviews-title'>What are our customers saying</h2>
        <div className='customer'>
        <div className="button-container">
          <img src={ArrowLeft} alt=""  width="50"/> {/* Scroll left */}
          <img src={ArrowRight} alt=""  width={"50"} />{" "}
          {/* Scroll right */}
        </div>
            <div className='customers-image-container'>
            <LeftAngledImg image={Image1} posistionAdjustment={"customer-image"} />
            </div>
            <div className='reviews-content'>
              <p className='reviews-description'>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me</p>

              <div className='customer-info'>
                <h2 className='customer-name'>Irma Black</h2>
                <p className='customer-position'>HR Manager at MasterCard</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews