import React, { useEffect, useState } from "react";
import { urlDirector } from "../helpers/urlBuilder";

const useDiscussion = (type, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestResponse, setRequestResponse] = useState([]);

  useEffect(() => {
    if (type?.length > 0) {
      let url;

      let director = new urlDirector(type, options);

      director.buildUrl();
      url = director.getURL();

      if (url?.length > 0) {
        let body;
        if (options.body) {
          body = options.body;
        }

        setLoading(true);

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? body : null,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data?.Items) {
              setData(data.Items);
              setLoading(false);
            }
          })
          .catch((e) => {
            setError(e);
            setLoading(false);
          });
      }
    }
  }, []);

  const addDiscussion = async (type, options) => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    if (type?.length > 0) {
      let url;

      let director = new urlDirector(type, options);

      director.buildUrl();
      url = director.getURL();

      if (url?.length > 0) {
        let body = {};
        if (options.body) {
          body = options.body;
        }

        setLoading(true);

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          if (!response.ok) {
            console.log(response);
          }

          const data = await response.json();

          if (data) {
            const response = {
              statusCode: 200,
              message: "Your discussion was posted successfully!",
            };
            setLoading(false);
            setRequestResponse(response);
          }
        } catch (error) {
          // Handle the error
          console.error("Error:", error.message);

          const response = {
            statusCode: 400,
            message: "Error occurred! Please try again.",
          };
          setLoading(false);
          setRequestResponse(response);
        }
      }
    }
  };

  return { data, loading, error, addDiscussion, requestResponse };
};

export default useDiscussion;
