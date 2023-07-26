import React, { useEffect, useRef, useState } from "react";

export const useFetch = (endpoint: string) => {
  const [response, setResponse] = useState([]);
  const running = useRef(false);

  useEffect(() => {
    if (running.current) {
      return;
    }

    running.current = true;

    fetch("https://jsonplaceholder.typicode.com" + endpoint)
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);

        console.log("json", json);
      });
  }, [endpoint]);

  return response;
};
