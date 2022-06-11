import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Fragment } from 'react/cjs/react.production.min';
import { RotateSpinner } from 'react-spinners-kit';
import {
  ButtonDelete,
  ButtonNumber,
  ButtonSubmit,
  ButtonUpdate,
  WrapSpinner,
} from '../../components/button';
import { Card, CardBody, CardHead } from '../../components/card';
import { Wrap, WrapBody, WrapHead } from '../../components/container';
import { InputText, TitleCol } from '../../components/input';
import { Col, Row } from '../../components/Row';
import { SearchBook } from '../../components/search/searchBooks';
import useLoans from '../../hooks/useLoan';
import useSpecimen from '../../hooks/useSpecimen';
import { UseContextSearchProvider } from '../../context/useContextSearch';

export const Specimens = () => {
  const { save, update, stateSpecimen, clean } = useSpecimen();
  const { stateLoans, search } = useLoans();
  const [showCard, setShowCard] = useState(false);
  const [outOfStock, setOutStock] = useState(false);
  const [stock, setStock] = useState(1);
  const [book, setBook] = useState('');
  const [idSpecimen, setIdSpecimen] = useState(0);
  const [id, setId] = useState(0);
  const refCard = useRef(null);

  useEffect(() => {
    const { specimensEntity } = stateLoans;
    if (specimensEntity) {
      setStock(specimensEntity.stock);
      setOutStock(false);
      setIdSpecimen(specimensEntity.idSpecimens);
    } else {
      setStock(0);
      setOutStock(true);
    }
  }, [stateLoans]);

  const handleClickPlus = () => {
    setStock(stock + 1);
  };

  const handleClickLess = (e) => {
    if (stock > 1) {
      setStock(stock - 1);
    }
  };

  const handleClick = ({ item }) => {
    const { idBook, name } = item;
    setBook(name);
    setId(idBook);
    setShowCard(true);
    getStock(idBook);
  };

  const getStock = (id) => {
    search({ id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      idBook: id,
      stock: stock,
    };
    save({ data });
  };

  const handleUpdate = () => {
    update({
      data: {
        idSpecimen,
        idBook: id,
        stock,
      },
    });
  };

  const isClose = () => {
    setShowCard(false);
    clean();
  };

  const handlerShow = () => {
    setShowCard(!showCard);
  };

  return (
    <Wrap>
      <WrapHead title="Ejemplares" />
      <WrapBody>
        <UseContextSearchProvider>
          <SearchBook
            onClick={handleClick}
            textPlaceholder="Buscar libro"
            type="books"
          />

          <CSSTransition
            in={showCard}
            classNames="fade"
            timeout={300}
            unmountOnExit
            nodeRef={refCard}
          >
            <div ref={refCard}>
              <Card
                borderColor="#ff8282"
                borderTop="border"
                borderRadius="20px"
                className="fade"
                position="relative"
              >
                <CardHead isOpen={handlerShow} />
                <CardBody>
                  <CardHead
                    title="Nuevo ejemplar"
                    iconClose={false}
                    jc="space-between"
                    color="#ff8282"
                    marginB={'25px'}
                  />
                  <Row>
                    <Col noCol={3} textA="center">
                      <InputText title="Libro" disabled={true} value={book} />
                    </Col>
                    <Col noCol={3} textA="center">
                      <TitleCol title="Stock" />
                      {stateLoans.loading ? (
                        <WrapSpinner>
                          <RotateSpinner />
                        </WrapSpinner>
                      ) : (
                        <Fragment>
                          <ButtonNumber
                            onClickLess={handleClickLess}
                            onClickPlus={handleClickPlus}
                            value={stock}
                            disabled={stateLoans.error}
                          />
                          {outOfStock && !stateLoans.error && (
                            <span style={{ color: 'red', fontSize: '11px' }}>
                              Este libro aun no tiene stock, agregale uno.
                            </span>
                          )}
                          {stateLoans.error && (
                            <span style={{ color: 'red', fontSize: '11px' }}>
                              {stateLoans.message}
                            </span>
                          )}
                        </Fragment>
                      )}
                    </Col>
                    <Col noCol={3} textA="center">
                      <TitleCol title="Opciones" />
                      {outOfStock && (
                        <ButtonSubmit
                          title="Agregar"
                          onClick={handleSubmit}
                          loading={stateSpecimen.loadingSave}
                          success={stateSpecimen.success}
                          error={stateSpecimen.error}
                          message={stateSpecimen.message}
                          open={isClose}
                        />
                      )}
                      {!outOfStock && (
                        <ButtonUpdate
                          title="Actualizar"
                          onClick={handleUpdate}
                          loading={stateSpecimen.loadingUpdate}
                          success={stateSpecimen.success}
                          error={stateSpecimen.error}
                          message={stateSpecimen.message}
                          open={() => setShowCard(false)}
                          disabled={stateLoans.error}
                        />
                      )}
                      <ButtonDelete
                        title="Cancelar"
                        onClick={isClose}
                        open={handlerShow}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </CSSTransition>
        </UseContextSearchProvider>
      </WrapBody>
    </Wrap>
  );
};
