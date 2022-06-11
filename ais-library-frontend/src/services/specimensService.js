import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT_SAVE = `${BACKEND_API}/specimen/save`;
const ENDPOINT_UPDATE = `${BACKEND_API}/specimen/update`;
const ENDPOINT_DELETE = `${BACKEND_API}/specimen/delete`;

export const ApiSpecimensSave = async ({ data }) => {
  const { idBook, stock } = data;
  const formData = new FormData();
  formData.append('id_book', idBook);
  formData.append('stock', stock);
  return await axios.post(ENDPOINT_SAVE, formData).then((resp) => {
    return resp.data;
  });
};

export const ApiSpecimensUpdate = async ({ data }) => {
  const { idSpecimen, idBook, stock } = data;

  const formData = new FormData();
  formData.append('id_specimen', idSpecimen);
  formData.append('id_book', idBook);
  formData.append('stock', stock);
  return await axios.put(ENDPOINT_UPDATE, formData).then((resp) => {
    return resp.data;
  });
};

export const ApiSpecimensDelete = async ({ id }) => {
  return axios
    .delete(ENDPOINT_DELETE, {
      params: {
        id,
      },
    })
    .then((resp) => {
      return resp.data;
    });
};
