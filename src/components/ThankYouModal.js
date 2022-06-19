import Card from './Card';
import classes from './ThankYouModal.module.css';

import thankyou from '../images/illustration-thank-you.svg';


const ThankYouModal = (props) => {
  return (
    <Card>
      <div className={classes.thankyouModal__centered}>
        <div className={classes.thankyouModal__image}>
          <img src={thankyou} alt="illustration" />
        </div>
        <div className={classes.thankyouModal__selectedText}>You selected {props.rating} out of 5</div>
        <h1 className={classes.thankyouModal__heading}>Thank you!</h1>
        <p className={classes.thankyouModal__text}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </Card>
  )
}


export default ThankYouModal;