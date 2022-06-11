import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const swing = keyframes`
     0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(10deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(5deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;
const Icon = styled.div`
  color: ${({ $active }) => ($active ? '#0defdb' : 'white')};
  display: inline-flex;
  transition: transform 0.3s;
`;

const SidebarLink = styled(Link)`
  display: inline-flex;
  width: 100%;
  background: ${({ $active }) => ($active ? '#252831' : '#242424')};
  color: #e9e9e9;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
  position: relative;
  &:hover {
    background: #252831;
    border-left: 3px solid #fff;
    cursor: pointer;
  }
  &:hover ${() => SidebarLabel} {
    margin-left: 20px;
  }
  &:hover ${Icon} {
    color: #0defdb;
    animation: ${swing} 0.3s ease-in;
  }
`;
const SidebarLinkNotSub = styled.a`
  display: inline-flex;
  width: 100%;
  background: ${({ $active }) => ($active ? '#252831' : '#242424')};
  color: #e9e9e9;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
  position: relative;
  border-left: ${(props) => (props.$active ? '3px solid red' : '')};
  &:hover {
    background: #252831;
    border-left: 3px solid #fff;
    cursor: pointer;
  }
  &:hover ${() => SidebarLabel} {
    margin-left: 20px;
  }
  &:hover ${Icon} {
    color: #0defdb;
    animation: ${swing} 0.3s ease-in;
  }
`;
const SidebarLabel = styled.span`
  color: ${({ $active }) => ($active ? '#0defdb' : 'white')};
  margin-left: 15px;
  transition: transform 1.5s;
`;

const SidebarSubMenu = styled.div`
  background: #0d1325d9;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(1, 0, 0, 1);
`;
const SidebarSubNav = styled(SidebarSubMenu)`
  max-height: ${({ $active }) => ($active ? '100vh' : '0')};
`;

const DropDownLink = styled(Link)`
  height: 60px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;
  &:hover {
    background: #070a10;
    cursor: pointer;
  }
  &:hover ${Icon} {
    color: #ef0dde;
    animation: ${swing} 0.3s ease-in-out;
  }
`;
const IconOpen = styled.div`
  transform: ${({ $active }) => ($active ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
`;

const SubMenu = ({ item, isOpen }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      {item.subMenu ? (
        <SidebarLinkNotSub
          onClick={item.subMenu ? showSubNav : isOpen}
          $active={subNav}
        >
          <div>
            <Icon $active={subNav}>{item.iconLeft}</Icon>
            <SidebarLabel $active={subNav}> {item.title}</SidebarLabel>
          </div>
          <IconOpen $active={subNav}>
            {item.subMenu && subNav
              ? item.iconRight
              : item.subMenu
              ? item.iconRight
              : null}
          </IconOpen>
        </SidebarLinkNotSub>
      ) : (
        <SidebarLink
          to={item.path}
          onClick={item.subMenu ? showSubNav : isOpen}
          $active={subNav}
        >
          <div>
            <Icon $active={subNav}>{item.iconLeft}</Icon>
            <SidebarLabel $active={subNav}> {item.title}</SidebarLabel>
          </div>
          <IconOpen $active={subNav}>
            {item.subMenu && subNav
              ? item.iconRight
              : item.subMenu
              ? item.iconRight
              : null}
          </IconOpen>
        </SidebarLink>
      )}
      <SidebarSubNav $active={subNav}>
        {item.subMenu &&
          item.subMenu.map((item, index) => {
            return (
              <DropDownLink to={item.path} key={index} onClick={isOpen}>
                <Icon>{item.icon}</Icon>
                <SidebarLabel> {item.title}</SidebarLabel>
              </DropDownLink>
            );
          })}
      </SidebarSubNav>
    </>
  );
};
export default SubMenu;
