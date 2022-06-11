import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RotateSpinner } from 'react-spinners-kit';
import { BiCaretLeft, BiCaretRight, BiError } from 'react-icons/bi';

import { Card } from '../card';
import useBook from '../../hooks/useBook';
import { Img } from '../img';

const Container = styled.div`
  overflow-x: auto;
  height: 375px;
  @media only screen and (max-width: 780px) {
    overflow-x: none;
    height: 100%;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background: #f7f7f7;
    border-radius: 5px;
  }
  &&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 3px;
    &:hover {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
`;
const TableCustom = styled.table`
  width: 100%;
  border-spacing: 0 10px;
`;
const THead = styled.thead`
  text-align: left;
  padding: 15px;
  font-size: ${(props) => props.fz};
`;
const Tr = styled.tr`
  background: ${(props) => props.color};
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgb(0 0 0 / 10%);
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 5px rgb(0 0 0 / 20%);
  }
`;
const Th = styled.th`
  padding: 5px 10px;
`;
const TBody = styled.tbody`
  font-size: ${(props) => props.fz};
`;
const Tb = styled.td`
  padding: 5px 10px;
  &:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }
  &:nth-last-child(1) {
    border-radius: 0 5px 5px 0;
  }
`;
const Pagination = styled.nav`
  padding: 10px;
`;
const Page = styled.ul`
  display: flex;
  list-style: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
const PagePrevios = styled.li`
  padding: 3px;
  border: 1px solid #dadada;
  text-align: -webkit-match-parent;
  border-radius: 5px 0px 0px 5px;
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
`;
const PageNext = styled.li`
  padding: 3px;
  border: 1px solid #dadada;
  text-align: -webkit-match-parent;
  border-radius: 0px 5px 5px 0px;
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
`;
const Item = styled.li`
  padding: 3px;
  border: 1px solid #dadada;
  text-align: -webkit-match-parent;
  background: ${(props) => (props.selected ? '#dadada' : '#fff')};
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
`;
const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorIcon = styled.div`
  display: block;
`;

export const Paginations = ({ totalPage, setPage }) => {
  const [count, setCount] = useState(0);
  const [final, setFinal] = useState(false);
  const [select, setSelect] = useState(true);

  const previousPage = () => {
    if (count > 0) {
      setCount(count - 1);
      setPage({ page: count - 1 });
    }
  };
  const nextPage = () => {
    if (count < totalPage - 2) {
      setCount(count + 1);
      setPage({ page: count + 1 });
      if (count + 1 >= totalPage - 2) {
        setFinal(true);
      } else {
        setFinal(false);
      }
    }
    if (count + 1 === totalPage - 1) {
      setSelect(false);
    }
    if (count === totalPage - 1) {
      setSelect(null);
    }
  };
  return (
    <Pagination>
      <Page>
        <PagePrevios onClick={previousPage}>
          <BiCaretLeft />
        </PagePrevios>
        <Item selected={select}>{count}</Item>
        <Item selected={!select}>{final ? totalPage - 1 : '...'}</Item>
        <Item>{totalPage}</Item>
        <PageNext onClick={nextPage}>
          <BiCaretRight />
        </PageNext>
      </Page>
    </Pagination>
  );
};

export const TableBooks = ({ fontSize, onClick }) => {
  const { booksRecent, listBooksStatus } = useBook();
  const page = 0;

  useEffect(() => {
    booksRecent({ page });
  }, [booksRecent]);

  const header = ['No.', 'imagen', 'Nombre', 'Lenguaje', 'País'];
  let i = 1;
  return (
    <Card borderRadius="20px">
      <Container className="hollaa">
        {listBooksStatus.loading && (
          <CenterContainer>
            <RotateSpinner color="#686769" />
          </CenterContainer>
        )}
        {listBooksStatus.error && (
          <CenterContainer>
            <ErrorIcon>
              <BiError />
            </ErrorIcon>
            {listBooksStatus.message}
          </CenterContainer>
        )}
        {listBooksStatus.success && (
          <TableCustom>
            <THead fz={fontSize}>
              <tr>
                {header &&
                  header.map((item, index) => {
                    return <Th key={index}>{item}</Th>;
                  })}
              </tr>
            </THead>
            <TBody fz={fontSize}>
              {listBooksStatus.content &&
                listBooksStatus.content.map((item, index) => {
                  return (
                    <Tr
                      key={index}
                      color="#fff"
                      onClick={() => onClick({ item })}
                    >
                      <Tb>{i++}</Tb>
                      <Tb>
                        <Img
                          url={
                            item.image.id === 1
                              ? 'default/default.png'
                              : `books-images/${item.image.name}`
                          }
                        />
                      </Tb>
                      <Tb>{item.name}</Tb>
                      <Tb>{item.languageInfo}</Tb>
                      <Tb>{item.countryInfo}</Tb>
                    </Tr>
                  );
                })}
            </TBody>
          </TableCustom>
        )}
      </Container>
      <Paginations totalPage={listBooksStatus.pages} setPage={booksRecent} />
    </Card>
  );
};
