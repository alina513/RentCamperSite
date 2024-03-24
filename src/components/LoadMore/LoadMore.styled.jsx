import styled from "styled-components";

export const Button = styled.button`
width: 145px;
height: 56px;
border-radius: 200px;
padding: 16px 32px;
border: 1px solid rgba(71, 84, 67, 0.2);
font-weight: 500;
font-size: 16px;
line-height: 125%;
color: black;
background-color: white;
margin-top: 94px;
margin-right: auto;
margin-left: auto;

&:hover, &:focus {
    border: 1px solid red;
  }
`