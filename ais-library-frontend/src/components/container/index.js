import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import image1 from './images/7.jpg';
import imageResponsive from './images/8.jpg';
import { Title } from '../typography';

import './index.css';

const LimitContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  box-sizing: border-box;
`;

const LimitCbackground = styled(LimitContainer)`
  box-sizing: border-box;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 780px) {
    animation: none;
    background-image: url(${imageResponsive});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    padding: 10px;
  }
`;

const Contenedor = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-transform: uppercase;
`;

const ContenedorItemsCenter = styled(Contenedor)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerWrap = styled.div`
  height: 100%;
`;
const WrapHeader = styled.div`
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid #c8c8c8;
`;

const WrapBodyStyled = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  @media only screen and (max-width: 780px) {
    width: 100%;
    columns: 0;
    column-gap: 0;
    display: contents;
  }
`;
const OperationsForm = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  @media only screen and (max-width: 780px) {
    justify-content: flex-end;
  }
`;
export const Operations = ({ children }) => (
  <OperationsForm>{children}</OperationsForm>
);
export const WrapBody = ({ children }) => (
  <WrapBodyStyled>{children}</WrapBodyStyled>
);

export const WrapHead = ({ title, size }) => (
  <WrapHeader>
    <Title type="capitalize" size={size} text={title} />
  </WrapHeader>
);
WrapHead.defaultProps = {
  size: '26px',
};

export const Wrap = ({ children }) => {
  const [exit, setExit] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    setExit(true);
    return () => setExit(false);
  }, []);
  return (
    <TransitionGroup>
      {exit && (
        <CSSTransition
          in={exit}
          timeout={300}
          classNames="containerwrap"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            <ContainerWrap className="containerwrap">{children}</ContainerWrap>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export const LimitC = ({ children }) => (
  <LimitContainer>{children}</LimitContainer>
);
LimitC.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LimitBackground = ({ children }) => (
  <LimitCbackground>{children}</LimitCbackground>
);

LimitBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Container = ({ children }) => <Contenedor>{children}</Contenedor>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ContainerCenterItems = ({ children }) => (
  <ContenedorItemsCenter>{children}</ContenedorItemsCenter>
);

ContainerCenterItems.propTypes = {
  children: PropTypes.node.isRequired,
};
