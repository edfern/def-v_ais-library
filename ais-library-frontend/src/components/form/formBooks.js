import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  ButtonDelete,
  ButtonOperation,
  ButtonSubmit,
  ButtonUpdate,
} from '../button';
import {
  InputText,
  InputCategoria,
  InputAutor,
  InputFile,
  SwitchBox,
} from '../input';
import { Col, Row } from '../Row';
import {
  AlertDelete,
  AlertEmptyParameter,
  AlertSave,
  AlertUpdate,
} from '../alert';
import useBook from '../../hooks/useBook';
import { Card, CardHead } from '../card';
import { ImgView } from '../img';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../static/fade.css';

const FormBooks = styled.form`
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

export const FormBook = ({ edit, data, open }) => {
  const { stateBooks, save, delet, saveImage, updateImage } = useBook();
  const [openImg, setOpenImg] = useState(false);
  const [img, setImg] = useState(null);
  const imageRef = useRef(null);
  const inputFileRef = useRef(null);
  const inputEditFileRef = useRef(null);

  const [dataInput, setDataInput] = useState({
    id: 0,
    name: '',
    countryInfo: '',
    languageInfo: '',
    isbn: '',
    isbn2: '',
    author: {},
    category: {},
    bookStatus: 0,
    url: '',
    image: null,
  });

  useEffect(() => {
    if (edit) {
      setOpenImg(true);
      setDataInput(data);
    }
  }, [edit, data]);

  useEffect(() => {
    if (!edit) {
      setOpenImg(false);
      setDataInput({
        id: '',
        name: '',
        countryInfo: '',
        languageInfo: '',
        author: {},
        category: {},
        isbn: '',
        isbn2: '',
        bookStatus: 0,
        url: null,
        image: {
          id: 1,
        },
      });
    }
  }, [edit]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };

  const getRestricted = ({ book_status }) => {
    setDataInput({
      ...dataInput,
      bookStatus: book_status,
    });
  };
  const handleChangeFile = (e) => {
    const image = e.target.files[0];
    setImg(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete dataInput.id;
    if (validateInputs(dataInput)) {
      AlertSave({ save: handlerSave });
    }
  };

  const handlerSave = () => {
    if (img) {
      saveImage(img, dataInput);
    } else {
      save({ data: dataInput });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (dataInput.image) {
      delete dataInput.url;
    } else {
      delete dataInput.image;
    }
    if (validateInputs(dataInput))
      AlertUpdate({
        update: () => {
          updateImage(img, dataInput);
        },
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    AlertDelete({ delet, data: dataInput.idBook });
  };

  const validateInputs = (data) => {
    if (data.name === '' || undefined) {
      AlertEmptyParameter('Nombre');
      return false;
    }
    if (Object.keys(data.author).length === 0) {
      AlertEmptyParameter('Autor');
      return false;
    }
    AlertEmptyParameter('Categoría');
    if (Object.keys(data.category).length === 0) {
      return false;
    }
    if (data.countryInfo === '' || undefined) {
      AlertEmptyParameter('País');
      return false;
    }
    return true;
  };

  const handlerAuthor = () => {
    setDataInput({ ...dataInput, author: {} });
  };

  const handlerCategory = () => {
    setDataInput({ ...dataInput, category: {} });
  };

  const handleOpenInputFile = () => {
    setOpenImg(true);
    setImg(null);
  };

  return (
    <FormBooks onSubmit={handleSubmit}>
      <Row>
        <Col noCol={3}>
          <InputText
            title="Nombre"
            onChange={(e) => handleChangeInput(e)}
            name="name"
            value={dataInput.name}
          />
        </Col>
        <Col noCol={3}>
          <InputText
            title="País"
            onChange={(e) => handleChangeInput(e)}
            description="Máximo 2-3 caracteres, ejemplo: Estados Unidos = US."
            name="countryInfo"
            value={dataInput.countryInfo}
          />
        </Col>
        <Col noCol={3}>
          <InputText
            title="Idioma"
            onChange={(e) => handleChangeInput(e)}
            description="Máximo 2-3 caracteres, ejemplo: Inglés = Eng."
            name="languageInfo"
            value={dataInput.languageInfo}
          />
        </Col>
      </Row>
      <Row alignItems="center">
        <Col>
          <InputAutor
            getAuthor={(item) => setDataInput({ ...dataInput, author: item })}
            value={dataInput.author}
            edit={edit}
            isValid={Object.keys(dataInput.author).length === 0 ? false : true}
            onChange={handlerAuthor}
          />
        </Col>
      </Row>
      <Row>
        <Col noCol={3}>
          <InputCategoria
            title="Categoría"
            getCategory={(item) =>
              setDataInput({ ...dataInput, category: item })
            }
            value={dataInput.category}
            edit={edit}
            isValid={
              Object.keys(dataInput.category).length === 0 ? false : true
            }
            onChange={handlerCategory}
          />
        </Col>
        <Col noCol={3}>
          <InputText
            title="ISBN"
            onChange={(e) => handleChangeInput(e)}
            name="isbn"
            value={dataInput.isbn}
          />
        </Col>
        <Col noCol={3}>
          <InputText
            title="ISBN 2"
            name="isbn2"
            onChange={(e) => handleChangeInput(e)}
            value={dataInput.isbn2}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TransitionGroup>
            {openImg && edit && (
              <CSSTransition
                in={true}
                classNames="fade"
                timeout={300}
                nodeRef={imageRef}
              >
                <div ref={imageRef}>
                  <Row
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    classNames="fade"
                  >
                    <Card
                      width="70%"
                      pd="0"
                      borderRadius="0"
                      border="5px solid #bbbbbb99"
                      position="relative"
                    >
                      <ImgView
                        url={
                          dataInput.image.id === 1
                            ? `default/default.png`
                            : `books-images/${dataInput.image.name}`
                        }
                      />
                      <ButtonOperation
                        title="Modificar imagen"
                        width="100%"
                        height="100%"
                        top="0"
                        position="absolute"
                        color="transparent"
                        colorHover="#484848a1"
                        onClick={() => setOpenImg(false)}
                        type="button"
                      />
                    </Card>
                  </Row>
                </div>
              </CSSTransition>
            )}
            {!openImg && edit && (
              <CSSTransition
                in={true}
                classNames="fade"
                timeout={300}
                nodeRef={inputFileRef}
              >
                <div ref={inputFileRef}>
                  <Card className="fade">
                    <CardHead isOpen={handleOpenInputFile} />
                    <InputFile onChange={handleChangeFile} />
                  </Card>
                </div>
              </CSSTransition>
            )}
            {!edit && (
              <CSSTransition
                in={true}
                classNames="fade"
                timeout={300}
                nodeRef={inputEditFileRef}
              >
                <div ref={inputEditFileRef}>
                  <InputFile classNames="fade" onChange={handleChangeFile} />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Col>
        <Col>
          <SwitchBox
            getStatus={getRestricted}
            status={dataInput.bookStatus}
            edit={edit}
          />
        </Col>
      </Row>
      <WrapButton>
        {!edit && (
          <ButtonSubmit
            title="Guardar"
            loading={stateBooks.loadingSave}
            success={stateBooks.success}
            error={stateBooks.error}
            message={stateBooks.message}
            open={open}
            onClick={(e) => handleSubmit(e)}
          />
        )}
        {edit && (
          <ButtonUpdate
            title="Modificar"
            loading={stateBooks.loadignUpdate}
            success={stateBooks.success}
            error={stateBooks.error}
            message={stateBooks.message}
            open={open}
            onClick={(e) => handleUpdate(e)}
          />
        )}
        {edit && (
          <ButtonDelete
            title="Eliminar"
            loading={stateBooks.loadingDelete}
            success={stateBooks.success}
            error={stateBooks.error}
            message={stateBooks.message}
            open={open}
            onClick={(e) => handleDelete(e)}
          />
        )}
      </WrapButton>
    </FormBooks>
  );
};
