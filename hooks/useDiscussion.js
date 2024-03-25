import React, { useEffect, useState } from "react";
import { urlDirector } from "../helpers/urlBuilder";

const useDiscussion = (type, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return { data, loading, error };
};

export default useDiscussion;
