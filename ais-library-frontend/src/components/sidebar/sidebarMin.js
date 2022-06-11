import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { MenuInfo } from '../../services/dataMenuService';
import { Avatar } from '../avatar/index';
import imagePerson from './images/person.jpg';

const Sidebar = styled.div`
  z-index: 500;
  width: 60px;
  height: 100vh;
  background: #000000db;
  display: block;
  border-radius: 0px 25px 25px 0px;
  position: fixed;
  padding: 25px 0px;
  margin-left: ${(props) => (props.open ? '0' : '-300px')};
  transition: all 0.4s ease-in-out;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const TooltipBox = styled.div`
  font-size: 15px;
  display: none;
  position: absolute;
  background: #545454;
  z-index: 500;
  color: #d2d2d2;
  width: 175px;
  left: 60px;
  font-size: 15px;
  padding: 10px;
  transition: all ease 0.5s 0s;
  border-radius: 5px;
  opacity: 0;
  &::after {
    content: '';
    display: block;
    border-top: 7px solid #545454;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    bottom: calc(50% - 7px);
    left: -10px;
    transform: rotate(90deg);
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #545454;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
  &:hover ${TooltipBox} {
    display: inline-block;
    opacity: 1;
  }
  &:hover > ${() => SidebarLink} {
    color: #ef0dde;
  }
`;
const ContainerIconMenu = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #545454;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
  &:hover ${() => IconMenu} {
    color: aqua;
    cursor: pointer;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const IconMenu = styled(FiMenu)`
  color: white;
  font-size: 25px;
`;
const TooltipBoxBody = styled.div`
  width: 100%;
  font-size: 15px;
`;
const SidebarLinkNotSubM = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #e9e9e9;
  font-size: 16px;
  height: auto;
  &:hover {
    color: aqua;
  }
`;
const SidebarBody = styled.div`
  height: 450px;
`;
const SidebarFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;
const Logo = styled.div`
  width: 100%;
  height: 50px;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-bottom: 1px solid white;
`;
const SidebarLink = styled.a`
  list-style: none;
  text-decoration: none;
  color: #e9e9e9;
  font-size: 16px;
  &:hover {
    color: #ef0dde;
  }
`;

const SidebarContainer = styled.div`
  position: relative;
  height: inherit;
`;
export const SidebarMin = ({ isOpen, open }) => {
  return (
    <Sidebar open={isOpen}>
      <SidebarContainer>
        <Logo>ais</Logo>
        <ContainerIconMenu onClick={open}>
          <IconMenu />
        </ContainerIconMenu>
        <SidebarBody>
          {MenuInfo.map((item, index) => {
            return (
              <Container key={index}>
                {item.subMenu ? (
                  <>
                    <SidebarLink>{item.iconLeft}</SidebarLink>
                    {item.subMenu && (
                      <TooltipBox>
                        {item.subMenu.map((item, index) => {
                          return (
                            <TooltipBoxBody key={index}>
                              <SidebarLinkNotSubM to={item.path}>
                                {item.title}
                              </SidebarLinkNotSubM>
                            </TooltipBoxBody>
                          );
                        })}
                      </TooltipBox>
                    )}
                  </>
                ) : (
                  <SidebarLinkNotSubM to={item.path}>
                    {item.iconLeft}
                  </SidebarLinkNotSubM>
                )}
              </Container>
            );
          })}
        </SidebarBody>
        <SidebarFooter>
          <Avatar
            url={imagePerson}
            width="50px"
            height="50px"
            mt="80px"
            jc="center"
          />
        </SidebarFooter>
      </SidebarContainer>
    </Sidebar>
  );
};
