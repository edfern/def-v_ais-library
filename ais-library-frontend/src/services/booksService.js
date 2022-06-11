import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT_SAVE = `${BACKEND_API}/book/save`;
const ENDPOINT_UPDATE = `${BACKEND_API}/book/update`;
const ENDPOINT_DELETE = `${BACKEND_API}/book/delete`;
const ENDPOINT_IMG_SAVE = `${BACKEND_API}/image/save`;
const ENDPOINT_IMG_UPDATE = `${BACKEND_API}/image/update`;

export const ApiBookListRecient = async ({ page }) => {
  return await axios
    .get(`${BACKEND_API}/book/view?page=` + page + '&sizePage=10')
    .then((resp) => {
      return resp.data;
    });
};

export const ApiBookSave = async ({ data }) => {
  const {
    name,
    idAuthor,
    idCategory,
    country_info,
    language_info,
    isbn,
    isbn2,
    book_status,
    image,
  } = data;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('idAuthor', idAuthor);
  formData.append('idCategory', idCategory);
  formData.append('country_info', country_info);
  formData.append('language_info', language_info);
  formData.append('isbn', isbn);
  formData.append('isbn2', isbn2);
  formData.append('book_status', book_status);
  formData.append('imagen', image);

  return await axios.post(ENDPOINT_SAVE, data).then((resp) => {
    return resp.data;
  });
};

export const ApiBookUpdate = async ({ data }) => {
  const {
    id,
    name,
    idAuthor,
    idCategory,
    country_info,
    language_info,
    isbn,
    isbn2,
    book_status,
    image,
    url,
  } = data;

  const formData = new FormData();

  formData.append('id', id);
  formData.append('name', name);
  formData.append('idAuthor', idAuthor);
  formData.append('idCategory', idCategory);
  formData.append('country_info', country_info);
  formData.append('language_info', language_info);
  formData.append('isbn', isbn);
  formData.append('isbn2', isbn2);
  formData.append('book_status', book_status);

  if (url) {
    formData.append('url', url);
  }

  if (image) {
    formData.append('imagen', image);
  }

  return await axios.put(ENDPOINT_UPDATE, data).then((resp) => {
    return resp.data;
  });
};

export const ApiBookDelete = async ({ id }) => {
  return await axios.delete(`${ENDPOINT_DELETE}/${id}`).then((resp) => {
    return resp.data;
  });
};

export const ApiImageBookSave = async (image) => {
  const formData = new FormData();
  formData.append('image', image);
  return await axios
    .post(`${ENDPOINT_IMG_SAVE}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((resp) => {
      return resp.data;
    });
};

export const ApiImageBookUpdate = async (id, image) => {
  const formData = new FormData();
  formData.append('image', image);
  return await axios
    .put(`${ENDPOINT_IMG_UPDATE}/${id}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((resp) => {
      return resp.data;
    });
};
