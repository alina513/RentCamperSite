import styled from 'styled-components';
import bg from '../../../src/img/bg.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  height: 100vh;
`;

export const Title = styled.h1`
  color: white;
`;
