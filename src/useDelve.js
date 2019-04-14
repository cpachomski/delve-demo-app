import { useState, useEffect } from "react";
import delve from "@pachomski/delve";

async function doDelve({ endpoint, setError, setLoading, setSchema }) {
  setLoading(true);
  const schema = await delve(endpoint);
  if (!schema) {
    setError(`Unable to fetch schema :(`);
  }
  setSchema(schema);
}

export function useDelve(initialEndpoint) {
  const [endpoint, setEndpoint] = useState(initialEndpoint);
  const [schema, setSchema] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    doDelve({ endpoint, setError, setLoading, setSchema }).then(
      setTimeout(() => setLoading(false), 500)
    );
  }, [endpoint]);

  return {
    error,
    loading,
    schema,
    setEndpoint
  };
}
