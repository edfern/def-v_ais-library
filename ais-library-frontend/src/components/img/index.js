import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;
  border-radius: 20px;
`;

const ImageView = styled.img`
  width: 100%;
  height: auto;
`;

export const Img = ({ url }) => {
  return <Image src={'../../../' + url} />;
};

export const ImgView = ({ url }) => {
  return <ImageView src={'../../../' + url} />;
};
