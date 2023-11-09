import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { error } = useRouteError();
  console.error(error);

  return (
    <div>
      <h1 className="text-center">Oops!</h1>
      <p> Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}