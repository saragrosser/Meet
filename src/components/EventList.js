import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";

const EventList = ({ events }) => {
  // Check if there are no events and handle this case separately
  if (!events || events.length === 0) {
    return <div id="event-list-empty">No events available.</div>;
  }

  return (
    <ul id="event-list">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default EventList;
