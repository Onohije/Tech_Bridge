import './LeftAngledImg.css';
import PropTypes from 'prop-types';

const LeftAngledImg = ({image, posistionAdjustment}) => {
  return (
    <div className='image-container' aria-label="Angled Image Container">
      <img src={image} alt="Angled" className={`angled-image ${posistionAdjustment}`}/>
    </div>
  );
};

LeftAngledImg.propTypes = {
  image: PropTypes.string.isRequired,
  posistionAdjustment: PropTypes.string.isRequired,
};


export default LeftAngledImg;