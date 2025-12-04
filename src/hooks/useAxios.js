import axios from "axios";
const useAxios = () => {
  const BASE_URL = "https://hrapp-xe2s.onrender.com/employees";
  const get = (url) => axios.get(url);
  const post = (url, data) => axios.post(url, data);
  const patch = (url, data) => axios.patch(url, data);
  const del = (url) => axios.delete(url);
  return { get, post, patch, del, BASE_URL };
};
export default useAxios;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useAxios = (url, method = "get") => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios[method](url);
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url, method]);

//   return { data, loading, error };
// };

// export default useAxios;
