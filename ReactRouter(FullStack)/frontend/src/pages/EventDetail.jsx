import { json, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";
export default function EventDetail() {
  const data = useRouteLoaderData("Event-Details");
  console.log(data.event);
  return <EventItem event={data.event} />;
}

export async function loader({ req, params }) {
  console.log(params.eventId);
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch event details" });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    }
  );
  if (!response.ok) {
    throw json({ message: "Could not delete event" });
  } else {
    return redirect("/events");
  }
}
