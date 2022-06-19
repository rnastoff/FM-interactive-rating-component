// import Circle from './Circle';
import classes from './Star.module.css';

import iconStar from '../images/icon-star.svg';

const Star = () => {
  return (
    <div className={classes.ratingModal__star}>
      <img src={iconStar} alt="star" />
    </div>
  )
}

export default Star;