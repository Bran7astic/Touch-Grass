import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const results = await fetch("/events");
      const data = await results.json();

      setEvents(data);
    };
    getEvents();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <>
      <h3 style={{marginBottom: "100px"}}>
        Touch Grass lets you view popular events in New York City, so that your
        plans can make it out of the group chat!
      </h3>
      <div class="eventsContainer">
        {events && events.map((event) => <Card props={event} />)}
      </div>
    </>
  );
}
