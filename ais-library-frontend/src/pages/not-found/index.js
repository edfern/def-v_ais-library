import { Fragment } from 'react';
import img from '../../assets/image/not-found.png';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-width: 750px;
  height: auto;
  border-radius: 20px;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
`;

const Wrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const NotFound = () => (
  <Fragment>
    <Container>
      <Wrap>
        <Image src={img} alt="" />
        <h3>Antigua International School</h3>
      </Wrap>
    </Container>
  </Fragment>
);
