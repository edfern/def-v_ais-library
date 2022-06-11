import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT_GET_ID = `${BACKEND_API}/search`;
const ENDPOINT_SAVE = `${BACKEND_API}/loans/save`;
export const ApiSpecimensById = async ({ id }) => {
  return await axios
    .get(`${ENDPOINT_GET_ID}?query=${id}&filter=specimens`)
    .then((resp) => {
      return resp.data;
    });
};

export const ApiLoanSave = async ({ data }) => {
  return await axios.post(ENDPOINT_SAVE, data).then((resp) => {
    return resp.data;
  });
};
