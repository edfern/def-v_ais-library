import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT_SAVE = `${BACKEND_API}/teacher/save`;
const ENDPOINT_PUT = `${BACKEND_API}/teacher/update`;
const ENDPOINT_DELETE = `${BACKEND_API}/teacher/delete`;

export const ApiTeacherSave = async ({ dataForm }) => {
  const { name, surname, email } = dataForm;

  const data = new FormData();
  data.append('name', name);
  data.append('surname', surname);
  data.append('email', email);

  return await axios.post(ENDPOINT_SAVE, data).then((resp) => {
    return resp.data;
  });
};

export const ApiTeacherUpdate = async ({ dataForm }) => {
  const { id, name, surname, email } = dataForm;
  const data = new FormData();
  data.append('id', id);
  data.append('name', name);
  data.append('surname', surname);
  data.append('email', email);

  return await axios.put(ENDPOINT_PUT, data).then((resp) => {
    return resp.data;
  });
};

export const ApiTeacherDelete = async ({ id }) => {
  const formData = new FormData();
  formData.append('id', id);
  return await axios
    .delete(ENDPOINT_DELETE, { params: { id: id } })
    .then((resp) => {
      return resp.data;
    });
};
