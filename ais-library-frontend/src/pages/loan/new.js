import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { Wrap, WrapBody, WrapHead } from '../../components/container';
import { Search } from '../../components/search';
import { UseContextSearchProvider } from '../../context/useContextSearch';
import { Card, CardBody, CardHead } from '../../components/card';
import { TableSearch } from '../../components/table';
import { HeaderTableTest } from '../../services/dataTable';
import { Col, Row } from '../../components/Row';
import { InputText, TitleCol } from '../../components/input';

import { SearchBook } from '../../components/search/searchBooks';
import {
  ButtonNumber,
  ButtonSubmit,
  Close,
  InputStock,
} from '../../components/button';
import useLoans from '../../hooks/useLoan';
import { Fragment } from 'react/cjs/react.production.min';

const ResultTable = styled.div`
  display: block;
`;

const LineBooks = ({ item, removeItemList, getQuantity }) => {
  const { stateLoans, search } = useLoans();

  const [stock, setStock] = useState(0);
  const [number, setNumber] = useState(1);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (item) {
      const { idBook } = item;
      search({ id: idBook });
    }
  }, [item, search]);

  useEffect(() => {
    if (stateLoans.success) {
      const { specimensEntity } = stateLoans;
      if (specimensEntity) {
        const { idSpecimens, stock } = specimensEntity;
        setStock(stock - 1);
        setId(idSpecimens);
      } else {
        Swal.fire(
          'Error!',
          'Este libro aun no tiene ejemplares. Por favor registre un ejemplar para este libro.',
          'error'
        );
      }
    }
  }, [stateLoans]);

  useEffect(() => {
    if (stateLoans.success) {
      const { specimensEntity } = stateLoans;

      if (specimensEntity) {
        const { idSpecimens } = specimensEntity;
        getQuantity({ cuantity: number, idSpecimens: idSpecimens });
      }
    }
  }, [stateLoans, number, getQuantity]);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClickPluss = () => {
    if (stock > 0) {
      setNumber(number + 1);
      setStock(stock - 1);
      getQuantity({ cuantity: number + 1, idSpecimens: id });
    }
  };

  const handleClickLess = (e) => {
    if (number > 1) {
      setNumber(number - 1);
      setStock(stock + 1);
      getQuantity({ cuantity: number - 1, idSpecimens: id });
    }
  };

  return (
    <Fragment>
      {stateLoans.specimensEntity && (
        <Card
          borderRadius="0px"
          pd="10px 45px"
          position="relative"
          borderColor="#c5dcff"
          borderTop="border"
        >
          <Row>
            <Col noCol={3}>
              <InputText title="Libro" disabled={true} value={item.name} />
            </Col>
            <Col noCol={3} textA="center">
              <TitleCol title="Cantidad" />
              <ButtonNumber
                onClickLess={handleClickLess}
                onClickPlus={handleClickPluss}
                value={number}
                onChange={handleChange}
              />
            </Col>
            <Col noCol={3}>
              <TitleCol title="Stock" />
              <InputStock value={stock} />
            </Col>
          </Row>

          <Close
            color="#c5dcff"
            onClick={() => removeItemList({ item, idSpecimens: id })}
          />
        </Card>
      )}
    </Fragment>
  );
};

const TableResult = ({ data, setOpenTable, getItemTable }) => {
  const { title } = HeaderTableTest;

  return (
    <ResultTable>
      <Card>
        <TableSearch
          header={title}
          body={data}
          openLoan={data}
          getItem={getItemTable}
          setOpen={setOpenTable}
        />
      </Card>
    </ResultTable>
  );
};
const Loan = ({ person, setOpenForm, setOpen }) => {
  const [date, setDate] = useState(new Date());
  const { save, stateLoans } = useLoans();
  const [openSearch, setOpenSearch] = useState(false);
  const [openListBooks, setOpenListBooks] = useState(false);
  const [itemsBooks, setItemsBooks] = useState([]);
  const [enable, setEnable] = useState(false);
  const [loanBookUserDtos, setLoanBookUserDto] = useState([]);
  const [loanUserDto, setLoanDto] = useState({
    idUser: person.id,
    departureDate: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    returnDate: '',
  });

  const handleChange = (e) => {
    setLoanDto({
      ...loanUserDto,
      [e.target.name]: e.target.value,
      departureDate: new Date(),
    });
  };

  const handleChangeLine = ({ cuantity, idSpecimens }) => {
    if (loanBookUserDtos.length > 0) {
      if (validateArray({ idSpecimens })) {
        loanBookUserDtos.map((item) => {
          if (item.idSpecimens === idSpecimens) {
            item.cuantity = cuantity;
          }
          return item;
        });
      } else {
        setLoanBookUserDto([...loanBookUserDtos, { cuantity, idSpecimens }]);
      }
    } else {
      setLoanBookUserDto([...loanBookUserDtos, { cuantity, idSpecimens }]);
    }
  };

  const validateArray = ({ idSpecimens }) => {
    const object = loanBookUserDtos.find(
      (item) => item.idSpecimens === idSpecimens
    );
    if (object) {
      return true;
    } else {
      return false;
    }
  };

  const tick = () => {
    setDate(new Date());
  };

  const addBookList = ({ item }) => {
    setOpenListBooks(true);
    const { idBook, name } = item;
    setItemsBooks([...itemsBooks, { idBook, name }]);
  };

  const removeItemList = ({ item, idSpecimens }) => {
    setItemsBooks((items) =>
      items.filter((book) => book.idBook !== item.idBook)
    );
    setLoanBookUserDto((items) =>
      items.filter((specimens) => specimens.idSpecimens !== idSpecimens)
    );
  };

  const handleClickSubmit = () => {
    const data = {
      loanUserDto,
      typeUser: person.type,
      loanBookUserDtos,
    };
    if (validateInputs()) save({ data });
  };

  const validateInputs = () => {
    if (loanUserDto.returnDate === '' || undefined) {
      Swal.fire('Error!', 'Ingrese una fecha valida.', 'error');
      return false;
    }
    return true;
  };

  useEffect(() => {
    const id = setTimeout(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setOpenSearch(true);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (itemsBooks.length === 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [itemsBooks]);

  return (
    <Card>
      <CardHead jc="flex-end" isOpen={setOpenForm} />
      <Wrap>
        <WrapHead title="Crear prestamo" size="22px" />
        <WrapBody>
          <Card boxShadow="0" marginB="0">
            <CardBody
              borderColor="#82ffee"
              borderTop="border"
              borderRadius="20px"
              className="fade"
              position="relative"
            >
              <Row>
                <Col noCol={3}>
                  <InputText
                    title="Usuario"
                    name="user"
                    disabled={true}
                    value={person.name}
                    onChange={handleChange}
                  />
                </Col>
                <Col noCol={3}>
                  <InputText
                    title="Hora Actual"
                    name="departureDate"
                    disabled={true}
                    value={date}
                  />
                </Col>
                <Col noCol={3}>
                  <InputText
                    title="Fecha de retorno"
                    name="returnDate"
                    type="date"
                    onChange={handleChange}
                    value={loanUserDto.returnDate}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
          {openSearch && (
            <UseContextSearchProvider>
              <SearchBook type="books" boxShadow="18%" onClick={addBookList} />
            </UseContextSearchProvider>
          )}
          {openListBooks &&
            itemsBooks &&
            itemsBooks.map((item, key) => (
              <LineBooks
                item={item}
                key={key}
                removeItemList={removeItemList}
                getQuantity={handleChangeLine}
              />
            ))}
        </WrapBody>
        <ButtonSubmit
          title="Crear nuevo prestamo"
          onClick={handleClickSubmit}
          disabled={enable}
          loading={stateLoans.loadingSave}
          success={stateLoans.success}
          error={stateLoans.error}
          message={stateLoans.message}
          open={setOpen}
        />
      </Wrap>
    </Card>
  );
};

const NewLoan = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [person, setPerson] = useState({
    id: 0,
    name: '',
    type: '',
  });
  const [dataTable, setDataTable] = useState({
    data: [],
    type: '',
  });

  const getItemSearch = ({ item, type }) => {
    setOpenForm(true);
    if (type === 'students') {
      setPerson({
        id: item.idStudent,
        name: item.name,
        type: type,
      });
    } else if (type === 'teachers') {
      setPerson({
        id: item.idTeacher,
        name: item.name,
        type: type,
      });
    }
  };

  const getDataSearchTable = ({ data, type }) => {
    setDataTable({
      ...dataTable,
      data: data,
      type: type,
    });
  };

  const getItemTable = ({ item, type }) => {
    setOpenForm(true);
    if (type === 'students') {
      setPerson({
        id: item.idStudent,
        name: item.name,
        type: type,
      });
    } else if (type === 'teachers') {
      setPerson({
        id: item.idTeacher,
        name: item.name,
        type: type,
      });
    }
  };

  return (
    <Wrap state={true}>
      <WrapHead title="Nuevo prestamo" />
      <WrapBody>
        <UseContextSearchProvider>
          <Search
            openTable={() => setOpenTable(true)}
            setData={getItemSearch}
            setDataTable={getDataSearchTable}
            closeTable={() => setOpenTable(false)}
          />
        </UseContextSearchProvider>
        {openTable && (
          <TableResult
            data={dataTable}
            setOpenTable={() => setOpenTable(false)}
            getItemTable={getItemTable}
          />
        )}
        {openForm && (
          <Loan
            person={person}
            setOpenForm={() => setOpenForm(false)}
            setOpen={() => setOpenForm(false)}
          />
        )}
      </WrapBody>
    </Wrap>
  );
};

export default NewLoan;
