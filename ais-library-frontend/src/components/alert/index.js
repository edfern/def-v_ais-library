import Swal from 'sweetalert2';

export const AlertSave = ({ save }) => {
  Swal.fire({
    title: '¿Desea guardar el archivo?',
    text: 'Se guardará el archivo en la base de datos.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value === true) {
      save();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelado', 'No se guardo el archivo.', 'error');
    }
  });
};

export const AlertUpdate = ({ update }) => {
  Swal.fire({
    title: '¿Desea modificar este archivo?',
    text: 'Se guardará el archivo con los nuevos datos en la base de datos.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Modificar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value === true) {
      update();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelado', 'No se guardo el archivo modificado.', 'error');
    }
  });
};

export const AlertDelete = ({ delet, data }) => {
  Swal.fire({
    title: '¿Desea eliminar el archivo permanentemente?',
    text: '¡No podrás recuperar este archivo!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value === true) {
      delet({ id: data });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelado', 'No se elimino el archivo.', 'error');
    }
  });
};

export const AlertEmptyParameter = (name) =>
  Swal.fire('Cancelado', `Se necesita el ${name}.`, 'error');
