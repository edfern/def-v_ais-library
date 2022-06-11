import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

import { Avatar } from '../avatar/index';
import { Main } from '../main/index';
import imagePerson from './images/person.jpg';
import SubMenu from './subNav';
import { MenuInfo } from '../../services/dataMenuService';
import { SidebarMin } from '../sidebar/sidebarMin';
import './index.css';

import HomeApp from '../../pages/home';
import Students from '../../pages/students/index';
import HomeLoan from '../../pages/loan';
import { Nav } from '../nav';
import Teachers from '../../pages/teachers';
import Books from '../../pages/books';

const IconStyled = styled(FiMenu)``;

const ButtonWrap = styled.div`
  position: fixed;
  top: 65px;
  width: 40px;
  height: 30px;
  background: #232833;
  border-radius: 0px 30px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 19px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: #fff;
  }
  &:hover ${IconStyled} {
    color: #232833;
  }
  @media only screen and (min-width: 500px) {
    display: none;
  }

  ${(props) =>
    props.open
      ? css`
          left: 0;
        `
      : css`
          left: -40px;
        `}
`;

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const refModal = useRef();

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClick = (e) => {
    if (refModal.current === e.target) {
      setOpen(false);
    }
  };
  return (
    <>
      <Nav />
      <ButtonWrap onClick={() => setOpen(true)} open={!open}>
        <IconStyled />
      </ButtonWrap>
      <SidebarMin isOpen={!open} open={() => setOpen(!open)} />
      <div
        className={open ? 'background' : ''}
        ref={refModal}
        onClick={handleClick}
      >
        <nav className={open ? 'container' : 'container  close'}>
          <div className="wrap">
            <div className="wrap-header">
              <div className="header-body">
                <span>Dashboard</span>
                <span onClick={() => setOpen(!open)}>
                  <AiOutlineClose />
                </span>
              </div>
              <Avatar
                url={imagePerson}
                width="75px"
                height="75px"
                mt="30px"
                jc="space-evenly"
              >
                <small>Developer Jr</small>
                <small>Administrador</small>
              </Avatar>
            </div>
            <div className="wrap-body">
              {MenuInfo.map((item, index) => {
                return (
                  <SubMenu
                    item={item}
                    key={index}
                    isOpen={() => setOpen(!open)}
                  />
                );
              })}
            </div>
            <div className="wrap-footer">
              <small>Antigua international school</small>
            </div>
          </div>
        </nav>
      </div>
      <Main onClick={() => setOpen(!open)}>
        <Routes>
          <Route index path="/" element={<HomeApp />} />
          <Route path="loan/*" element={<HomeLoan />} />
          <Route path="books/*" element={<Books />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Main>
    </>
  );
};
