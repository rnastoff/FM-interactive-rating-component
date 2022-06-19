import Card from './Card';
import Star from './Star';
import RatingButton from './RatingButton';

import classes from './RatingModal.module.css';

const Rating = (props) => {
  const ratingButtonsList = () => {
    return [1, 2, 3, 4, 5].map((n) => {
      return <RatingButton num={n} onHandleRating={props.onHandleRating} key={n} />
    });
  }

  const handleClick = () => {
    if (props.rating) props.onHandleSubmit();
  }


  return (
    <Card>
      <Star />
      <h1 className={classes.ratingModal__heading}>How did we do?</h1>
      <p className={classes.ratingModal__text}>Please let us know how we did with your support
        request. All Feedback is appreciated to help us
        improve our offering!
      </p>
      <div className={classes.ratingModal__buttons}>
        {ratingButtonsList()}
      </div>
      <button onClick={handleClick} className={classes.ratingModal__submitButton}>SUBMIT</button>
    </Card>
  )
}

export default Rating;