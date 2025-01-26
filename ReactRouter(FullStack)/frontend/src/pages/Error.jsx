import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let title = "Error occurred";
  console.log(error.data.message);
  if (error.status === 404) {
    title = "Ooops page not found...";
  }
  return (
    <>
      <PageContent title={title}>
        {" "}
        <p>{error.data.message}</p>
      </PageContent>
    </>
  );
}
