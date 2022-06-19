import { Fragment, useState } from 'react';

import './App.css';
import RatingModal from './components/RatingModal';
import ThankYouModal from './components/ThankYouModal';

function App() {

  const [rating, setRating] = useState(null);
  const [submitted, setSubmit] = useState(false); //pass down to submit button

  const handleRating = (num) => {
    setRating(num);
  }

  const handleSubmit = () => {
    setSubmit(true);
  }

  return (
    <Fragment>
      {!submitted && <RatingModal onHandleRating={handleRating} onHandleSubmit={handleSubmit} rating={rating} />}
      {submitted && <ThankYouModal rating={rating} />}
    </Fragment>
  );
}

export default App;
