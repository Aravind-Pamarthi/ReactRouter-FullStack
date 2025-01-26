import { json } from "react-router";
import EventsList from "../components/EventsList";

export default function Events() {
  return (
    <>
      <EventsList />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events..." });
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData.events;
  }
}
