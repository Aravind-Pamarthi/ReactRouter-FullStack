import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";
export default function EventEvent() {
  const data = useRouteLoaderData("Event-Details");
  return <EventForm event={data.event} method="PATCH" />;
}
