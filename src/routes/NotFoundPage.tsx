import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      Oups error :
      {isRouteErrorResponse(error)
        ? error.statusText
        : error instanceof Error
        ? error.message
        : "Error unknown"}
    </>
  );
};

export default NotFoundPage;
