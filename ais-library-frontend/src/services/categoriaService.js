import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT = `${BACKEND_API}/category/view?page=0&sizePage=15`;
const ENDPOINT_SEARCH = `${BACKEND_API}/category/search?page=0&sizePage=15`;

export const ApiListCategoria = async () => {
  return await axios.get(ENDPOINT).then((resp) => {
    return resp.data;
  });
};

export const ApiSearchCategoria = async ({ query }) => {
  return await axios.get(ENDPOINT_SEARCH + '&query=' + query).then((resp) => {
    return resp.data;
  });
};
