import { useEffect, useState } from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import styled, { css } from 'styled-components';
import Swal from 'sweetalert2';

const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media only screen and (max-width: 780px) {
    padding: 5px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  background: #fff;
  border: 0.5px solid #4fc775;
  width: ${(props) => props.width};
  height: 35px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
  ${(props) =>
    props.opc === 'loading' &&
    css`
      border: 0.5px solid #4fc775;
      &:hover {
        background: #4fc775;
      }
    `}
  ${(props) =>
    props.opc === 'update' &&
    css`
      border: 0.5px solid #9ddbff;
      &:hover {
        color: #fff;
        background: #9ddbff;
      }
    `}
    ${(props) =>
    props.opc === 'danger' &&
    css`
      border: 0.5px solid #ff5952;
      &:hover {
        color: #fff;
        background: #ff5952;
      }
    `}
`;
const ButtonNewForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: white;
  color: #606060;
  width: 150px;
  height: 35px;
  border: 0.1px solid skyblue;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 3%);
  transition: all 0.5s ease;
  &:hover {
    background: #232833;
    color: white;
  }
`;
const WrapIcon = styled.div`
  position: realtive;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
  width: 34px;
  height: 25px;
`;

export const WrapSpinner = styled.div`
  position: realtive;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
`;
export const ButtonNew = ({ children, onClick }) => (
  <ButtonNewForm onClick={onClick}>{children}</ButtonNewForm>
);
export const ButtonSubmit = ({
  title,
  loading,
  error,
  success,
  message,
  open,
  onClick,
  disabled,
  type,
}) => {
  const [state, setState] = useState({
    width: '175px',
    loading: false,
    type: 'loading',
    error: false,
  });
  const [icon, setIcon] = useState(title);

  useEffect(() => {
    if (loading) {
      setState({ width: '34px', loading: true, error: false });
      setIcon(
        <WrapIcon>
          <RotateSpinner />
        </WrapIcon>
      );
    }
  }, [loading]);

  useEffect(() => {
    if (success) {
      open();
      Swal.fire(`${message}`, '', 'success');
    }
  }, [success, open, message]);
  useEffect(() => {
    if (error) {
      setState({ width: '175px', loading: false, type: 'loading' });
      setIcon(title);
      Swal.fire('Network', `${message}`, 'question');
    }
  }, [error, title, message]);

  return (
    <WrapButton>
      <Button
        width={state.width}
        opc={state.type}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {icon}
      </Button>
    </WrapButton>
  );
};
ButtonSubmit.defaultProps = {
  disabled: false,
};

export const ButtonDelete = ({
  title,
  loading,
  error,
  success,
  message,
  open,
  onClick,
}) => {
  const [state, setState] = useState({
    width: '175px',
    loading: false,
    type: 'danger',
    error: false,
  });
  const [icon, setIcon] = useState(title);
  useEffect(() => {
    if (loading) {
      setState({ width: '34px', loading: true, error: false });
      setIcon(
        <WrapIcon>
          <RotateSpinner color="red" />
        </WrapIcon>
      );
    }
  }, [loading]);
  useEffect(() => {
    if (success) {
      open();
      Swal.fire(message, '', 'success');
    }
  }, [success, open, message]);
  useEffect(() => {
    if (error) {
      setState({ width: '175px', loading: false, type: 'danger' });
      setIcon(title);
      Swal.fire('Network', `${message}`, 'question');
    }
  }, [error, title, message]);
  return (
    <WrapButton>
      <Button width={state.width} opc={state.type} onClick={onClick}>
        {icon}
      </Button>
    </WrapButton>
  );
};

export const ButtonUpdate = ({
  title,
  loading,
  error,
  success,
  message,
  open,
  onClick,
  disabled,
}) => {
  const [state, setState] = useState({
    width: '175px',
    loading: false,
    type: 'update',
    error: false,
  });
  const [icon, setIcon] = useState(title);

  useEffect(() => {
    if (loading) {
      setState({ width: '34px', loading: true, error: false });
      setIcon(
        <WrapIcon>
          <RotateSpinner color="#9ddbff" />
        </WrapIcon>
      );
    }
  }, [loading]);

  useEffect(() => {
    if (success) {
      open();
      Swal.fire(message, '', 'success');
    }
  }, [success, open, message]);
  useEffect(() => {
    if (error) {
      setState({ width: '175px', loading: false, type: 'update' });
      setIcon(title);
      Swal.fire('Network', `${message}`, 'question');
    }
  }, [error, title, message]);
  return (
    <WrapButton>
      <Button
        width={state.width}
        opc={state.type}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
      </Button>
    </WrapButton>
  );
};
ButtonSubmit.defaultProps = {
  title: '',
  loading: false,
  error: false,
  success: false,
  type: 'submit',
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media only screen and (max-width: 780px) {
    position: relative;
  }
`;
const InfoToolTip = styled.span`
  visibility: hidden;
  font-size: 10px;
  width: 95px;
  background-color: #000000a6;
  color: #fff;
  text-align: center;
  border-radius: 25px;
  padding: 5px 0;
  position: absolute;
  z-index: 10;
  top: -30px;
  opacity: 0;
  transition: opacity 1s;
`;
const ButtonO = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  padding: 13px;
  border-radius: 5px;
  position: absolute;
  left: ${(props) => props.lf};
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  border: none;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.hover};
    color: #fff;
  }
  &:hover ${InfoToolTip} {
    visibility: visible;
    opacity: 1;
  }
  @media only screen and (max-width: 780px) {
    position: initial;
  }
`;

export const ButtonOperation = ({
  icon,
  color,
  left,
  title,
  onClick,
  position,
  top,
  width,
  height,
  colorHover,
  type,
}) => {
  return (
    <ButtonWrap position={position} top={top} width={width} height={height}>
      <ButtonO
        color={color}
        lf={left}
        onClick={onClick}
        width={width}
        height={height}
        hover={colorHover}
        type={type}
      >
        <InfoToolTip>{title}</InfoToolTip>
        {icon}
      </ButtonO>
    </ButtonWrap>
  );
};

const NumberWrap = styled.div``;
const NumberPlus = styled.button`
  width: 30px;
  line-height: 50px;
  margin: none;
  border-radius: 0px 10px 10px 0px;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: green;
    cursor: pointer;
    color: #fff;
  }
`;
const NumberLess = styled.button`
  width: 30px;
  line-height: 50px;
  margin: none;
  border-radius: 10px 0px 0px 10px;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: red;
    cursor: pointer;
    color: #fff;
  }
`;
const InputNumber = styled.input`
  width: 35px;
  line-height: 50px;
  text-align: center;
  margin: none;
  border: none;
  background: black;
  color: #fff;
  outline: none;
  background: #303030;
`;

export const ButtonNumber = ({
  onClickLess,
  onClickPlus,
  value,
  onChange,
  disabled,
}) => {
  return (
    <NumberWrap>
      <NumberLess onClick={onClickLess} disabled={disabled}>
        -
      </NumberLess>
      <InputNumber
        pattern="[0-9]*"
        value={value}
        type="text"
        onInput={onChange}
        disabled
        name="cantidada"
      />
      <NumberPlus onClick={onClickPlus} disabled={disabled}>
        +
      </NumberPlus>
    </NumberWrap>
  );
};

const WrapClose = styled.div`
  position: absolute;
  top: 0;
  right: 250px;
  right: 55px;
`;
const ButtonClose = styled.button`
  width: 30px;
  height: 30px;
  margin: none;
  border: none;
  background: ${(props) => props.color};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: red;
    cursor: pointer;
    color: #fff;
  }
`;
export const Close = ({ onClick, color }) => {
  return (
    <WrapClose>
      <ButtonClose onClick={onClick} color={color}>
        {' '}
        &times;
      </ButtonClose>
    </WrapClose>
  );
};

const IpuntStock = styled.input`
  outline: none;
  border: none;
  font-family: inherit;
  line-height: 50px;
  color: #666;
  box-shadow: inset 0 1px 3px 0 rgb(0 0 0 / 8%);
  width: 15%;
  text-align: center;
  border-radius: 5px;
  background: #fafafa;
`;
export const InputStock = ({ value }) => {
  return <IpuntStock value={value} disabled />;
};
