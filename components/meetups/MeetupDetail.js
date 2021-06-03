import classes from './MeetupDetail.module.css'

function MeetupDetails(props) {
  console.log(props)
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt=""
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
    </section>
  );
}

export default MeetupDetails;
