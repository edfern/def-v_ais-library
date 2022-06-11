import axios from 'axios';
import { BACKEND_API } from '../config/service';

const ENDPOINT = `${BACKEND_API}/student/save`;
const ENDPOINT_PUT = `${BACKEND_API}/student/edit`;
const ENDPOINT_DELETE = `${BACKEND_API}/student/`;

export const ApiStudentSave = async ({ dataForm }) => {
  const { name, surName, gmail } = dataForm;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('surName', surName);
  formData.append('email', gmail);

  return await axios.post(ENDPOINT, formData).then((resp) => {
    return resp.data;
  });
};

export const ApiStudentUpdate = async ({ dataForm }) => {
  const { id, name, surName, gmail } = dataForm;

  const formData = new FormData();
  formData.append('id', id);
  formData.append('name', name);
  formData.append('surName', surName);
  formData.append('email', gmail);

  return await axios.put(ENDPOINT_PUT, formData).then((resp) => {
    return resp.data;
  });
};

export const ApiStudentDelete = async ({ idForm }) => {
  const { id } = idForm;

  const formData = new FormData();
  formData.append('id', id);

  return await axios.delete(ENDPOINT_DELETE + id).then((resp) => {
    return resp.data;
  });
};
