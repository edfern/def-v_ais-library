import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT = `${BACKEND_API}/author/search?page=0&sizePage=10&query=`;

export const ApiSearchAuthor = async ({ query }) => {
  return await axios.get(`${ENDPOINT}${query}`).then((resp) => {
    return resp.data;
  });
};
