import axios from 'axios';
import { BACKEND_API } from '../config/service';

export const RestApiSearch = async ({ type, query }) => {
  const ENDPOINT = `${BACKEND_API}/search?filter=${type}&query=${query}&page=0&sizePage=10`;

  return await axios.get(ENDPOINT).then((resp) => {
    return resp.data;
  });
};
