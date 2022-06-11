import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-switch';

import { BsSearch } from 'react-icons/bs';
import { ClapSpinner, RotateSpinner } from 'react-spinners-kit';

import { Li, Ul } from '../search';
import '../../static/fade2.css';
import useAuthor from '../../hooks/useAuthor';
import useCategory from '../../hooks/useCategory';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 780px) {
    ${(props) =>
      props.typeSearch === 'search' &&
      css`
        display: block;
        text-align: -webkit-center;
        text-align-last: center;
        position: relative;
      `}
    ${(props) =>
      props.typeSearch === 'searchStuden' &&
      css`
        display: flex;
      `}
  }
`;
const InputCustom = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0px 20px 0px 20px;
  outline: none;
  background: #d1d1d12e;
  border: 0.5px solid #e9e6e6;
  @media only screen and (max-width: 780px) {
    border-radius: 5px 0px 0px 5px;
  }
`;
const Select = styled.select`
  font-size: 16px;
  color: white;
  background-color: #232833;
  height: 40px;
  border-radius: 5px 0px 0px 5px;
  outline: none;
  width: 150px;
  padding: 0px 20px 0px 20px;
  cursor: pointer;
  position: relative;
  @media only screen and (max-width: 780px) {
    width: 100%;
    border-radius: 5px;
  }
`;
const Option = styled.option``;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: none;
  background: #232833;
  color: #4f5b66;
  font-size: 10pt;
  border-radius: 0px 5px 5px 0px;
  transition: all 0.3s ease;
  &:hover {
    background: #f7f7f7;
    cursor: pointer;
  }
  @media only screen and (max-width: 780px) {
    height: 40px;
    ${(props) =>
      props.typeSearch === 'search' &&
      css`
        border-radius: 5px;
      `}
    ${(props) =>
      props.typeSearch === 'searchType' &&
      css`
        border-radius: 0px 5px 5px 0px;
      `}
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #555;
  text-transform: capitalize;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  outline: none;
  margin: 0;
  border: none;
  width: 100%;
  font-family: inherit;
  line-height: 50px;
  background: ${(props) => props.color};
  box-shadow: ${(props) => props.bs};
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  transition: all 0.4s ease;
`;
const WrapInput = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const InfoTooltip = styled.span`
  visibility: hidden;
  font-size: 10px;
  width: 95px;
  background-color: #000000a6;
  color: #fff;
  text-align: center;
  border-radius: 25px;
  padding: 5px 0;
  position: absolute;
  z-index: 2;
  top: -30px;
`;
const Result = styled.div`
  overflow: auto;
  height: 100px;
  background: #fafafa;
  position: absolute;
  width: 100%;
  transition: all 200ms;
  z-index: 2;
`;
const ErrorMessage = styled.small`
  font-size: 10px;
  color: red;
`;
const InputDescription = styled.small`
  display: block;
  font-size: 10px;
`;

export const TooltipInfo = ({ title }) => {
  return <InfoTooltip>{title}</InfoTooltip>;
};
export const InputText = ({
  title,
  type,
  onChange,
  value,
  description,
  name,
  disabled,
  required,
}) => {
  return (
    <WrapInput>
      <Label>{title}</Label>
      <Input
        type={type}
        required={required}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      />
      <InputDescription>{description}</InputDescription>
    </WrapInput>
  );
};

export const TitleCol = ({ title }) => <Label>{title}</Label>;

export const InputCategoria = ({
  title,
  getCategory,
  value,
  edit,
  isValid,
  onChange,
  required,
}) => {
  const { searchCategory, stateSearch } = useCategory();
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
    searchCategory({ query: e.target.value });
    onChange();
  };

  const handeBlur = () => {
    setTimeout(() => {
      setOpen(false);
    }, 100);
    setFocus(false);
  };

  const getData = ({ item }) => {
    const { category } = item;
    setCategory(category);
    getCategory(item);
  };

  useEffect(() => {
    if (edit && Object.keys(value).length > 0) {
      setCategory(value.category);
    }
  }, [edit, value]);

  useEffect(() => {
    if (focus) {
      if (stateSearch.data !== null && !stateSearch.error) {
        setOpen(true);
      } else if (stateSearch.error) {
        setOpen(false);
      } else {
        setOpen(false);
      }
    }
    return () => stateSearch.data === null;
  }, [focus, stateSearch]);

  return (
    <WrapInput>
      <Label>{title} *</Label>
      <Input
        title="Busca una categoría y luego elígela. "
        type="text"
        required={required}
        onChange={(e) => handleChange(e)}
        onFocus={() => setFocus(true)}
        onBlur={handeBlur}
        value={category}
        placeholder="Buscar una categoría"
      />

      {stateSearch.error && <ErrorMessage>{stateSearch.message}</ErrorMessage>}

      {!isValid && (
        <ErrorMessage>Seleccione una categoria por favor.</ErrorMessage>
      )}

      {open && (
        <Result>
          <Ul color="#909090">
            {stateSearch.data &&
              stateSearch.data.map((item, key) => (
                <Li key={key} onClick={() => getData({ item })}>
                  {item.category}
                </Li>
              ))}
          </Ul>
        </Result>
      )}

      {stateSearch.loading && (
        <Result>
          <Ul>
            <Li display="flex" textAlign="center">
              <ClapSpinner size={20} />
            </Li>
          </Ul>
        </Result>
      )}
    </WrapInput>
  );
};

InputText.defaultProps = {
  title: '',
  type: 'text',
  required: true,
};

export const InputSearch = ({
  typeSearch,
  type,
  text,
  br,
  onChange,
  value,
  valueSelect,
  onChangeSelect,
  person,
  loading,
  onFocus,
  onBlur,
  onClean,
}) => {
  const handlerChange = (e) => {
    onChangeSelect(e);
    onClean();
  };
  return (
    <Wrap typeSearch={typeSearch}>
      {person && (
        <Select value={valueSelect} onChange={handlerChange}>
          <Option value="students" defaultValue>
            Estudiantes
          </Option>
          <Option value="teachers">Maestros</Option>
        </Select>
      )}
      <InputCustom
        type={type}
        placeholder={text}
        required
        br={br}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Button typeSearch={typeSearch}>
        {loading ? <RotateSpinner size={25} /> : <BsSearch />}
      </Button>
    </Wrap>
  );
};

export const InputAutor = ({ getAuthor, value, edit, isValid, onChange }) => {
  const { searchAuthor, stateAuthor } = useAuthor();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const [openResult, setOpenResult] = useState(false);

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
    searchAuthor({ query: e.target.value });
    onChange();
  };

  useEffect(() => {
    if (focus) {
      if (stateAuthor.data !== null && !stateAuthor.error) {
        setOpenResult(true);
      } else if (stateAuthor.error) {
        setOpenResult(false);
      } else {
        setOpenResult(false);
      }
    }
  }, [stateAuthor, focus]);

  useEffect(() => {
    if (edit && Object.keys(value).length > 0) {
      setQuery(value.name);
    }
  }, [edit, value]);

  const handleOnBlur = () => {
    setTimeout(() => {
      setOpenResult(false);
    }, 100);
    setFocus(false);
  };

  const getData = ({ item }) => {
    const { name } = item;
    setQuery(name);
    getAuthor(item);
  };

  return (
    <WrapInput>
      <Label>Autor *</Label>
      <Input
        title="Busca un autor y luego elígelo. "
        type="text"
        required
        onChange={(e) => handleChangeQuery(e)}
        onFocus={() => setFocus(true)}
        onBlur={handleOnBlur}
        value={query}
        placeholder="Busca un autor"
      />
      {stateAuthor.error && <ErrorMessage>{stateAuthor.message}</ErrorMessage>}
      {openResult && (
        <Result>
          <Ul color="#909090">
            {stateAuthor.data &&
              stateAuthor.data.map((item, key) => (
                <Li
                  display="block"
                  key={key}
                  text={item.name}
                  onClick={() => getData({ item })}
                />
              ))}
          </Ul>
        </Result>
      )}

      {stateAuthor.loading && (
        <Result>
          <Ul>
            <Li display="flex" textAlign="center">
              <ClapSpinner size={20} />
            </Li>
          </Ul>
        </Result>
      )}

      {!isValid && <ErrorMessage>Seleccione un autor por favor.</ErrorMessage>}
    </WrapInput>
  );
};

export const InputFile = ({ onChange }) => {
  return (
    <WrapInput>
      <Label>Imgen</Label>
      <Input type="file" color="#fff" bs="none" onChange={onChange} />
      <InputDescription>Ingresa una imagen. (Opcional)</InputDescription>
    </WrapInput>
  );
};

export const SwitchBox = ({ getStatus, edit, status }) => {
  const [state, setState] = useState(false);

  const handleChange = (checked) => {
    setState(checked);
    if (checked) {
      getStatus({ book_status: 1 });
    } else {
      getStatus({ book_status: 0 });
    }
  };

  useEffect(() => {
    if (edit) {
      if (status === 1) {
        setState(true);
      } else {
        setState(false);
      }
    } else {
      setState(false);
    }
  }, [edit, status]);

  return (
    <WrapInput>
      <Label>Restringido</Label>
      <Switch onChange={(checked) => handleChange(checked)} checked={state} />
      <InputDescription>
        {state
          ? 'Este libro estara restringido para los estudiantes.'
          : 'Este libro esta disponible para los estudiantes y maestros.'}
      </InputDescription>
    </WrapInput>
  );
};

Input.defaultProps = {
  color: '#fafafa',
  bs: 'inset 0 1px 3px 0 rgb(0 0 0 / 8%)',
};
InputSearch.defaultProps = {
  title: '',
  text: '',
  type: 'text',
  br: '',
  person: true,
  left: '0',
};
