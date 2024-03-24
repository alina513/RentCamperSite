import styled from "styled-components";

export const Container = styled.div`
display: flex;
  justify-content: space-between;
  padding-top: 40px;
`
export const WrapperBar = styled.ul`
  width: 460px;
  height: 580px;
  // padding: 24px;
`;

export const Round = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${p => p.theme.colors.inputs};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
`

export const Book = styled.p`
color: ${p => p.theme.colors.red};
`

export const WrapperBook = styled.div`
  width: 480px;
  display: flex;
  gap: 16px;
`;

export const WrapperName = styled.div`
  padding-top: 10px;
  
`;

export const Name = styled.p`
font-weight: 700;
  font-size: 18px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.grey};
  text-align: justify;
  
`