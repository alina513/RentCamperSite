import styled from "styled-components";
import {
    Field as FormikField,
  } from 'formik';

const getByLast = props => {
  switch (props.$variant) {
    case 'all':
    return "20px";
    case "last":
      return "78px";
      default:
        return '20px';
  }
}

const getByLastpad = props => {
  switch (props.$variant) {
    case 'all':
    return "18px";
    case "last":
      return "60px";
      default:
        return '18px';
  }
}

const getByLastmar = props => {
  switch (props.$variant) {
    case 'all':
    return "14px";
    case "last":
      return "24px";
      default:
        return '14px';
  }
}

export const Container = styled.div`
width: 420px;
height: 570px;
border: 1px solid ${(p) => p.theme.colors.grey};
border-radius: 10px;
padding: 24px;
`
export const Title = styled.h2`
font-weight: 700;
font-size: 20px;
line-heigt: 1.2;
padding-top: 0px;
margin-top: 0px;
margin-bottom: 8px;
`

export const Text = styled.p`
font-size: 16px;
line-heigt: 1.5;
margin-top: 0px;
margin-bottom: 24px;
color: ${(p)=>p.theme.colors.grey};
`

export const Field = styled(FormikField)`
  background-color: ${(p)=>p.theme.colors.inputs};
  color: ${(p) => p.theme.colors.grey};
  outline: none;
  font-size: 16px;
  line-height: 125%;
  border: none;
  border-radius: 10px;
  padding-top: 18px;
  padding-left: 18px;
  padding-bottom: ${getByLastpad};
  width: 400px;
  height: ${getByLast};
  margin-bottom: ${getByLastmar};
`;

export const Message = styled.span`
  font-size: 14px;
  color: red;
  display: flex;
`;

export const Button = styled.button`
  outline: none;
  padding: 16px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  border: none;
  border-radius: 200px;
  width: 160px;
  height: 56px;
  color: #ffffff;
  background-color: ${(p) => p.theme.colors.red};

  transition: background-color ${(p) => p.theme.transition};

  &:hover, :focus {
    background-color: red;
  }
`;

export const DateWrapper = styled.div`
position: relative;
width: 400px;
`

export const Svg = styled.svg`
position: absolute;
width: 20px;
height: 20px;
top: 25%;
  right: 14px;
`