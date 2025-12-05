import { useState, useCallback } from "react";
import apiClient from "./apiClient";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Function to execute any API request (GET, POST, PATCH, DELETE).
   * @param {string} endpoint - The relative endpoint (e.g., '/users/1').
   * @param {string} method - The HTTP method ('get', 'post', 'patch', 'delete').
   * @param {object} [data=null] - The body data for POST or PATCH requests.
   */
  const execute = useCallback(async (endpoint, method, data = null) => {
    setIsLoading(true);
    setError(null);

    try {
      let response;
      const url = endpoint;

      switch (method.toLowerCase()) {
        case "post":
          response = await apiClient.post(url, data);
          break;
        case "patch":
          response = await apiClient.patch(url, data);
          break;
        case "delete":
          response = await apiClient.delete(url);
          break;
        case "get":
        default:
          response = await apiClient.get(url);
          break;
      }

      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, execute };
};

export default useApi;
