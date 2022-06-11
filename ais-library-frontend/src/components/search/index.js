import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Card } from '../card';
import { InputSearch } from '../input';

import UseSearch from '../../hooks/useSearch';
import Context from '../../context/useContextSearch';

const Info = styled.small`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const MessageError = styled.span`
  font-size: 10px;
  color: red;
`;

const Form = styled.form`
  position: relative;
`;

const Items = styled.ul`
  padding: 10px;
  color: ${(props) => props.color};
  list-style: none;
`;
const Item = styled.li`
  font-size: 13px;
  display: ${(props) => props.d};
  padding: 5px 2px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: ${(props) => props.ta};
  &:hover {
    background: #d1d1d12e;
    cursor: pointer;
  }
`;
export const Ul = ({ color, children }) => (
  <Items color={color}>{children}</Items>
);
export const Li = ({ text, textAlign, children, display, onClick }) => (
  <Item ta={textAlign} d={display} onClick={onClick}>
    {text || children}
  </Item>
);

export const Search = ({ setData, openTable, setDataTable, closeTable }) => {
  const { search, loading, messageError, statusError, dataSearch, statusResp } =
    UseSearch();
  const [type, setType] = useState('students');
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const [openResult, setOpenResult] = useState(false);

  const { cleanData } = useContext(Context);

  useEffect(() => {
    if (focus) {
      if (dataSearch.length !== 0) {
        setOpenResult(true);
      } else {
        setOpenResult(false);
      }
    }
  }, [dataSearch, focus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    search({ type, query });
    setOpenResult(false);
    setFocus(false);
    setDataTable({ data: dataSearch, type: type });
    openTable();
  };
  const handleChangeInput = (e) => {
    setOpenResult(true);
    setFocus(true);
    setQuery(e.target.value);
    search({ type, query: e.target.value });
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOpenResult(false);
    }, 100);
    setFocus(false);
  };

  const handleClickSetData = ({ item }) => {
    if (statusResp === 200) {
      setData({ item, type: type });
      closeTable();
    }
  };

  const handlerChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <Card pd="25px">
      <Form onSubmit={handleSubmit}>
        <InputSearch
          typeSearch="search"
          type="text"
          text="Buscar"
          onChange={(e) => handleChangeInput(e)}
          value={query}
          onChangeSelect={handlerChangeType}
          valueSelect={type}
          onBlur={() => handleBlur()}
          onFocus={() => setFocus(true)}
          loading={loading}
          person={true}
          onClean={cleanData}
        />

        <Info>
          Ingresa nombre o apellidos de la persona.{' '}
          {statusError && <MessageError>{messageError}</MessageError>}
        </Info>
        {openResult && (
          <Card position="absolute" top="40px" pd="0" zIndex="1">
            <Items color="#909090">
              {dataSearch &&
                dataSearch.map((item, key) => (
                  <Item key={key} onClick={() => handleClickSetData({ item })}>
                    {item.name} {item.surname}
                  </Item>
                ))}
            </Items>
          </Card>
        )}
      </Form>
    </Card>
  );
};

export const SearchType = ({ onClick, textPlaceholder, type, description }) => {
  const { search, loading, messageError, statusError, dataSearch, statusResp } =
    UseSearch();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);

  const [openResult, setOpenResult] = useState(false);

  useEffect(() => {
    if (focus) {
      console.log(dataSearch);
      if (dataSearch.length !== 0) {
        setOpenResult(true);
      } else {
        setOpenResult(false);
      }
    }
  }, [dataSearch, focus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    search({ type, query });
  };
  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    search({ type, query: e.target.value });
  };
  const handleBlur = () => {
    setTimeout(() => {
      setOpenResult(false);
    }, 100);
    setFocus(false);
  };

  const handleClickSetData = ({ item }) => {
    if (statusResp === 200) {
      onClick({ item });
    }
  };
  return (
    <Card pd="25px">
      <Form onSubmit={handleSubmit}>
        <InputSearch
          typeSearch="searchType"
          type="text"
          text={textPlaceholder}
          onChange={(e) => handleChangeInput(e)}
          value={query}
          person={false}
          loading={loading}
          onBlur={() => handleBlur()}
          onFocus={() => setFocus(true)}
        />
        <Info>
          {description}{' '}
          {statusError && <MessageError>{messageError}</MessageError>}
        </Info>
        {openResult && (
          <Card position="absolute" top="40px" pd="0" zIndex="1">
            <Items color="#909090">
              {dataSearch &&
                dataSearch.map((item, key) => (
                  <Item key={key} onClick={() => handleClickSetData({ item })}>
                    {item.name} {item.surname}
                  </Item>
                ))}
            </Items>
          </Card>
        )}
      </Form>
    </Card>
  );
};

SearchType.defaultProps = {
  isLoading: '',
  setData: '',
  description: 'Ingresa nombre o apellidos de la persona.',
};

Search.defaultProps = {
  isLoading: '',
  setData: '',
};
