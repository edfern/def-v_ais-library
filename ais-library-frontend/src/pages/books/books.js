import React, { useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ButtonNew } from '../../components/button';
import { Card, CardBody, CardHead } from '../../components/card';
import {
  Operations,
  Wrap,
  WrapBody,
  WrapHead,
} from '../../components/container';
import { FormBook } from '../../components/form/formBooks';
import { Row } from '../../components/Row';
import { SearchBook } from '../../components/search/searchBooks';
import { TableBooks } from '../../components/table/tableBooks';
import { Title } from '../../components/typography';
import { UseContextSearchProvider } from '../../context/useContextSearch';

import '../../static/fade.css';

export const Book = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [dataSearch, setDataSearch] = useState(null);

  const tableRef = useRef(null);
  const formBook = useRef(null);

  const handleClick = ({ item }) => {
    setEdit(true);
    setDataSearch(item);
    setOpen(true);
  };

  const handleClickNew = () => {
    setOpen(true);
    setEdit(false);
  };
  return (
    <Wrap>
      <WrapHead title="Libros" />
      <WrapBody>
        <UseContextSearchProvider>
          <SearchBook
            onClick={handleClick}
            textPlaceholder="Buscar libro"
            type="books"
          />
          <WrapBody>
            <Operations>
              <ButtonNew onClick={handleClickNew}>Nuenvo +</ButtonNew>
            </Operations>
            <TransitionGroup>
              {!open && (
                <CSSTransition
                  in={true}
                  classNames="fade"
                  nodeRef={tableRef}
                  timeout={300}
                >
                  <div ref={tableRef}>
                    <Row display="block" classNames="fade">
                      <Title
                        text="Libros agregados recientemente"
                        size="20px"
                        padding="10px"
                        dp="block"
                        textA="left"
                        type="none"
                      />
                      <TableBooks fontSize="12px" onClick={handleClick} />
                    </Row>
                  </div>
                </CSSTransition>
              )}
              {open && (
                <CSSTransition
                  in={true}
                  timeout={300}
                  classNames="fade"
                  nodeRef={formBook}
                >
                  <div ref={formBook}>
                    <Card
                      borderColor="#82ffee"
                      borderTop="border"
                      borderRadius="20px"
                      className="fade"
                      position="relative"
                    >
                      <CardHead isOpen={() => setOpen(false)} />
                      <CardBody>
                        <CardHead
                          title={
                            edit
                              ? 'Información del libro ' + dataSearch.name
                              : 'Nuevo libro'
                          }
                          iconClose={false}
                          jc="space-between"
                          id={edit && dataSearch.idBook}
                          edit={edit}
                          color="#82ffee"
                        />
                        <FormBook
                          open={() => setOpen(false)}
                          edit={edit}
                          data={dataSearch}
                        />
                      </CardBody>
                    </Card>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </WrapBody>
        </UseContextSearchProvider>
      </WrapBody>
    </Wrap>
  );
};
