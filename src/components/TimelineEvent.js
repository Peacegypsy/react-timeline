import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";

const TimelineEvent = props => {
  // Component functions always return JSX
  return (
    <section>
      <h3>{props.name}</h3>
      <h3>{props.status}</h3>
      <h3>{props.timestamp}</h3>
    </section>
  );
};
TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired
};

export default TimelineEvent;
