import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const CardContainer = styled.div`
  border: ${(props) => props.border};
  top: ${(props) => props.top};
  position: ${(props) => props.position};
  margin-bottom: ${(props) => props.mb};
  padding: ${(props) => props.pd};
  width: ${(props) => props.width};
  background: #fff;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.br};
  box-shadow: 0px 5px 20px rgb(0 0 0 / ${(props) => props.boxShadow});
  z-index: ${(props) => props.z};
  ${(props) =>
    props.type === 'border' &&
    css`
      border-top: 4px solid ${(props) => props.bc};
      @media only screen and (max-width: 780px) {
        height: auto;
      }
      @media only screen and (min-width: 780px) {
        overflow-x: auto;
      }
    `}
`;
const CardH = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size};
  justify-content: ${(props) => props.jc};
  margin-bottom: ${(props) => props.mb};
`;
const Icon = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  &:hover {
    color: red;
  }
`;
const CardB = styled.div`
  display: block;
  padding: 10px;
  overflow: hidden;
`;
const Id = styled.div`
  width: 45px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  color: #fff;
  font-size: initial;
  position: absolute;
  right: 0;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 19%);
`;

export const CardBody = ({ children }) => <CardB>{children}</CardB>;
export const CardHead = ({
  isOpen,
  title,
  iconClose,
  jc,
  edit,
  id,
  color,
  size,
  marginB,
}) => (
  <CardH jc={jc} size={size} mb={marginB}>
    {title} {iconClose && <Icon onClick={isOpen} />}{' '}
    {edit && <Id color={color}>{id}</Id>}
  </CardH>
);

export const Card = ({
  children,
  pd,
  height,
  position,
  top,
  ref,
  zIndex,
  marginB,
  className,
  borderColor,
  borderTop,
  borderRadius,
  width,
  border,
  boxShadow,
}) => (
  <CardContainer
    pd={pd}
    height={height}
    position={position}
    top={top}
    ref={ref}
    z={zIndex}
    className={className}
    type={borderTop}
    bc={borderColor}
    br={borderRadius}
    width={width}
    border={border}
    boxShadow={boxShadow}
    mb={marginB}
  >
    {children}
  </CardContainer>
);

CardHead.defaultProps = {
  title: '',
  iconClose: true,
  jc: 'flex-end',
  edit: false,
  id: '',
  size: '25px',
  marginB: '',
};

Card.defaultProps = {
  pd: '10px',
  height: 'auto',
  position: '',
  top: '',
  zIndex: '',
  borderColor: 'white',
  borderTop: '',
  borderRadius: '5px',
  width: '100%',
  border: '',
  boxShadow: '19%',
  marginB: '20px',
};
