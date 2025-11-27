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
