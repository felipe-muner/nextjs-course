import classes from "./MeetupDetail.module.css";
import { useState } from "react";

function MeetupDetails(props) {
  const [style, setStyle] = useState({ color: "black" });
  
  return (
    <section
      className={classes.detail}
      onMouseEnter={(e) => {
        setStyle({ color: "blue" });
      }}
      onMouseLeave={(e) => {
        setStyle({ color: "black" });
      }}
    >
      <img src={props.image} alt="" />
      <h1 style={style}>{props.title}</h1>
      <address>{props.address}</address>
    </section>
  );
}

export default MeetupDetails;
