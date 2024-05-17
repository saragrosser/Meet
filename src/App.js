import React, { useEffect, useState } from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";

function App() {
  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, noe));
      setAllLocations(extractLocations(allEvents));
    } catch (err) {
      setError("Failed to fetch events. Please try again later.");
      setEvents([]);
      setAllLocations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentCity, noe]);

  return (
    <div className="App">
      {error && <div className="alert alert-error">{error}</div>}
      {loading ? (
        <div>Loading events...</div>
      ) : (
        <>
          <CitySearch
            allLocations={allLocations}
            setCurrentCity={setCurrentCity}
          />
          <NumberOfEvents setNoe={setNoe} />
          <EventList events={events} />
        </>
      )}
    </div>
  );
}

export default App;
