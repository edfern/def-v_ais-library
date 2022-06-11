import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT = `${BACKEND_API}/login`;

export const RestApiLogin = async ({ email, password }) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return await axios.post(ENDPOINT, formData).then((data) => {
    return data.data;
  });
};
