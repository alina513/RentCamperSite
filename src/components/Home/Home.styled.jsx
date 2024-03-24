import styled from 'styled-components';
import bg from '../../../src/img/bg.jpg';

export const Container = styled.div`
  padding: 30px 100px 30px 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 100px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  height: 100vh;
`;

export const Title = styled.h1`
  text-align: justify;
  color: white;
  background-color: rgba(105, 105, 105, 0.5);
`;
