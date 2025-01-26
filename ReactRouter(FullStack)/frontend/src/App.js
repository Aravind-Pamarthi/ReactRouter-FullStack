import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Events, { loader as eventsLoader } from "../src/pages/Events";
import EventDetail, {
  loader as eventsDetailsLoader,
  action as deleteEventAction,
} from "../src/pages/EventDetail";
import NewEvent from "../src/pages/NewEvent";
import { action as manipulateActionEvent } from "./components/EventForm";
import EditEvent from "../src/pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            loader: eventsDetailsLoader,
            id: "Event-Details",
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateActionEvent,
              },
            ],
          },

          { path: "new", element: <NewEvent />, action: manipulateActionEvent },
          ,
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
