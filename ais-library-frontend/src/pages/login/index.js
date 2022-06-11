import React, { useEffect, useState, Fragment } from 'react';
import UserUser from '../../hooks/useUser';
import { StageSpinner } from 'react-spinners-kit';

import {
  LimitBackground,
  ContainerCenterItems,
} from '../../components/container/index';
import {
  WrapLogin,
  Form,
  InputContentLeft,
  InputContentRight,
  Label,
  Input,
  ContentBtn,
  Button,
} from './customPage';
import { Title } from '../../components/typography/index';
import { SEO } from '../../components/seo/index';
import { Message } from '../../components/error/index';

const LoginApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputEmail, setInputEmail] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);

  const {
    login,
    isLogged,
    isLoadingLogin,
    hasLoadingError,
    message,
    typeMessage,
  } = UserUser();

  useEffect(() => {
    if (isLogged) window.location = 'dashboard';
  }, [isLogged]);

  let handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  let inputEmpty = (e) => {
    if (e.target.type === 'email') {
      if (e.target.value.trim() !== '') {
        setInputEmail(true);

        setEmail(e.target.value);
      } else {
        setInputEmail(false);
        setEmail('');
      }
    }
    if (e.target.type === 'password') {
      if (e.target.value.trim() !== '') {
        setInputPassword(true);

        setPassword(e.target.value);
      } else {
        setInputPassword(false);
        setPassword('');
      }
    }
  };
  return (
    <Fragment>
      <SEO title="AIS | Login" />
      <div className="banner-demo">
        <div className="banner-demo__container">
          <h1>DEMO</h1>
          <span>Credential: demo@gmail.com pass: HqlK!#12</span>
          <span style={{ fontSize: 'small' }}>
            By{' '}
            <a href="https://www.def-v.com" target="_blank" rel="noreferrer">
              www.def-v.com
            </a>
          </span>
        </div>
      </div>
      <LimitBackground>
        <ContainerCenterItems>
          <WrapLogin>
            <Form onSubmit={handleSubmit}>
              <Title
                color="white"
                size="30px"
                type="uppercase"
                padding="0 0 43px 0"
                display="block"
              >
                Ingrese cuenta
              </Title>
              <InputContentLeft>
                <Input
                  hasVal={inputEmail}
                  type="email"
                  onChange={(e) => inputEmpty(e)}
                  value={email}
                />
                <Label text="correo electrónico" />
              </InputContentLeft>
              <InputContentRight>
                <Input
                  hasVal={inputPassword}
                  type="password"
                  onChange={(e) => inputEmpty(e)}
                  value={password}
                />
                <Label text="contraseña" />
              </InputContentRight>
              {hasLoadingError ? (
                <Message type={typeMessage}>{message}</Message>
              ) : (
                ''
              )}
              <ContentBtn>
                <Button
                  text={
                    isLoadingLogin ? (
                      <StageSpinner size={40} color="#fff" />
                    ) : (
                      'ingresar'
                    )
                  }
                />
              </ContentBtn>
            </Form>
          </WrapLogin>
        </ContainerCenterItems>
      </LimitBackground>
    </Fragment>
  );
};

export default LoginApp;
