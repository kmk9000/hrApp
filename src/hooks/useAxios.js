import axios from "axios";
const useAxios = () => {
  const BASE_URL = "https://hrapp-xe2s.onrender.com/employees";
  const get = (url = BASE_URL) => axios.get(url);
  const post = (url = BASE_URL, data) => axios.post(url, data);
  const patch = (url = BASE_URL, data) => axios.patch(url, data);
  const del = (url = BASE_URL) => axios.delete(url);
  return { get, post, patch, del, BASE_URL };
};
export default useAxios;

// juha example: using _ to avoid naming conflicts and make it explicit that these are hooks //
// import axios from 'axios';
// const useAxios = axios.create({
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// const _get = (url, config = {}) => {
//     return useAxios.get(url, config);
// }

// const _post = (url, data, config = {}) => {
//     return useAxios.post(url, data, config);
// }

// const _patch = (url, data, config = {}) => {
//     return useAxios.patch(url, data, config);
// }

// export { _get, _post, _patch };
