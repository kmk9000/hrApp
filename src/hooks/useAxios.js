import axios from "axios";
const useAxios = () => {
  const get = (url) => axios.get(url);
  const post = (url, data) => axios.post(url, data);
  const patch = (url, data) => axios.patch(url, data);
  const del = (url) => axios.delete(url);
  return { get, post, patch, del };
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
