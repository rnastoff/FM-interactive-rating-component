import classes from './RatingButton.module.css'; //this is being used

const RatingButton = (props) => {

	const handleClick = () => {
		props.onHandleRating(props.num);
	}

	return (
		<input onClick={handleClick} type="radio" label={props.num} name="ratingButtons" />
	)
}

export default RatingButton;