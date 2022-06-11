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
`;
const Item = styled.li`
  font-size: 13px;
  display: block;
  padding: 5px 2px;
  &:hover {
    background: #d1d1d12e;
    cursor: pointer;
  }
`;

export const SearchBook = ({
  onClick,
  textPlaceholder,
  type,
  description,
  boxShadow,
}) => {
  const { search, loading, messageError, statusError, dataSearch } =
    UseSearch();
  const { cleanData } = useContext(Context);
  const [query, setQuery] = useState('');
  const [openResult, setOpenResult] = useState(false);
  const [focus, setFocus] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (dataSearch) {
      setItems(dataSearch);
    }
  }, [dataSearch]);

  useEffect(() => {
    if (focus) {
      if (dataSearch.length !== 0) {
        setOpenResult(true);
      } else {
        setOpenResult(false);
      }
    }
    return () => {};
  }, [focus, dataSearch]);

  const handleBlur = () => {
    setTimeout(() => {
      setOpenResult(false);
    }, 100);
    setFocus(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search({ type, query });
  };
  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    search({ type, query: e.target.value });
  };

  const handleClickSetData = ({ item }) => {
    onClick({ item });
    cleanData();
  };

  return (
    <Card pd="25px" boxShadow={boxShadow}>
      <Form onSubmit={handleSubmit}>
        <InputSearch
          typeSearch="searchType"
          type="text"
          text={textPlaceholder}
          onChange={(e) => handleChangeInput(e)}
          value={query}
          person={false}
          loading={loading}
          onBlur={handleBlur}
          onFocus={() => setFocus(true)}
        />
        <Info>
          {description}{' '}
          {statusError && <MessageError>{messageError}</MessageError>}
        </Info>
        {openResult && (
          <Card position="absolute" top="40px" pd="0" zIndex="1">
            <Items color="#909090">
              {items &&
                items.map((item, key) => (
                  <Item
                    key={key}
                    onClick={() => {
                      handleClickSetData({ item });
                      setItems([]);
                    }}
                  >
                    {item.name} <strong>{item.countryInfo}</strong>
                  </Item>
                ))}
            </Items>
          </Card>
        )}
      </Form>
    </Card>
  );
};

SearchBook.defaultProps = {
  isLoading: '',
  setData: '',
  description: 'Ingresa nombre del libro o codigo ISBN',
};
