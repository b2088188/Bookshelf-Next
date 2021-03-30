import { useCallback } from "react";
import { useSession } from "next-auth/client";

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`http://127.0.0.1:8000${endpoint}`, config).then(
    async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
}

function useClient() {
  const [session, isLoading] = useSession();
  return useCallback(function (endpoint, config) {
    return client(endpoint, { ...config });
  }, []);
}

export { client, useClient };
