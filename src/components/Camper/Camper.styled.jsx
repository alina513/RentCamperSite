import styled from "styled-components";

export const Element = styled.li`
// width : 888px;
// height : 358px;
padding: 24px;
width: 840px;
height: 310px;
display: flex;
gap: 24px;
border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`

export const Photo = styled.img`
border-radius: 10px;
width: 290px;
height: 310px;
`

export const Container = styled.div`
width : 526px;
height : 310px;
`

export const WrapperPrice = styled.div`
display: flex;
justify-content: space-between;
  margin-bottom: 8px;
`
export const WrapperLocation = styled.div`
display: flex;
gap: 16px;
  margin-bottom: 24px;
`
export const WrapperButton = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 24px;
`

export const ItemIcon = styled.li`
  padding: 12px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  gap: 8px;

  color: ${(p) => p.theme.colors.black};
  background-color: ${(p) => p.theme.colors.greyWhite};
`;

export const Svg = styled.svg`
width: 20px;
height: 20px;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const Description = styled.p`
  width: 525px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const ButtonMore = styled.button`
  display: block;
  padding: 16px 40px;
  background-color: ${(p) => p.theme.colors.red};
  color: white;
  border: none;
  border-radius: 200px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #d84343;
  }
`;

export const ContainerRating = styled.div`
display: flex;
  align-items: center;
  gap: 4px;
`
export const RatingSvg = styled.svg`
  fill: ${(p) => p.theme.colors.yellow};
  width: 20px;
  height: 20px;
`;


export const Rating = styled.p`
font-size: 16px;
line-height: 1.5;
text-decoration: underline;
color: ${(p) => p.theme.colors.black};
`
export const ContainerLokation = styled.div`
display: flex;
  align-items: center;
  gap: 4px;
`;

export const Lokation = styled.p`
font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`

export const LokationSvg = styled.svg`
width: 20px;
height: 20px;
`
export const WrapperHeart = styled.div`
display: flex;
`

export const ButtonHeart = styled.button`
border: none;
background-color: white;
`