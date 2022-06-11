import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Context, {
  UseContextSearchProvider,
} from '../../context/useContextSearch';

import UseStudent from '../../hooks/useStudent';
import { ButtonDelete, ButtonSubmit, ButtonUpdate } from '../button';
import { InputText } from '../input';
import { Col, Row } from '../Row';

const FormStudents = styled.form`
  padding: 20px;
`;
const WrapButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 780px) {
    display: block;
  }
`;

export const FormStudent = ({ edit, data, open }) => {
  const { save, update, delet, state } = UseStudent();
  const { cleanData } = useContext(Context);

  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [gmail, setGmail] = useState('');
  const [id, setId] = useState(null);

  const dataForm = {
    id: id,
    name: name,
    surName: surName,
    gmail: gmail,
  };

  useEffect(() => {
    if (edit) {
      const { name, surname, email, idStudent } = data;
      setName(name);
      setSurName(surname);
      setGmail(email);
      setId(idStudent);
    } else {
      setName('');
      setSurName('');
      setGmail('');
      setId(null);
    }
  }, [edit, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Desea guardar el archivo?',
      text: 'Se guardará el archivo en la base de datos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value === true) {
        save({ dataForm });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'No se guardo el archivo.', 'error');
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    Swal.fire({
      title: '¿Desea modificar este archivo?',
      text: 'Se guardará el archivo con los nuevos datos en la base de datos.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Modificar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value === true) {
        update({ dataForm });
        cleanData();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'No se guardo el archivo modificado.', 'error');
      }
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const idForm = {
      id: id,
    };

    Swal.fire({
      title: '¿Desea eliminar el archivo permanentemente?',
      text: '¡No podrás recuperar este archivo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value === true) {
        delet({ idForm });
        cleanData();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'No se elimino el archivo.', 'error');
      }
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <UseContextSearchProvider>
      <FormStudents onSubmit={handleSubmitForm}>
        <Row>
          <Col>
            <InputText
              title="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Col>
          <Col>
            <InputText
              title="Apellidos"
              onChange={(e) => setSurName(e.target.value)}
              value={surName}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputText
              type="email"
              title="Correo"
              onChange={(e) => setGmail(e.target.value)}
              value={gmail}
            />
          </Col>
        </Row>
        <WrapButton>
          {!edit && (
            <ButtonSubmit
              title="Guardar"
              loading={state.loading}
              success={state.success}
              error={state.error}
              message={state.message}
              open={open}
              onClick={(e) => handleSubmit(e)}
            />
          )}
          {edit && (
            <ButtonUpdate
              title="Modificar"
              loading={state.loadingUpdate}
              success={state.success}
              error={state.error}
              message={state.message}
              open={open}
              onClick={(e) => handleUpdate(e)}
            />
          )}
          {edit && (
            <ButtonDelete
              title="Eliminar"
              loading={state.loadingDelete}
              success={state.success}
              error={state.error}
              message={state.message}
              open={open}
              onClick={(e) => handleDelete(e)}
            />
          )}
        </WrapButton>
      </FormStudents>
    </UseContextSearchProvider>
  );
};
