import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const getByLink = props => {
  switch (props.className) {
    case 'all':
      return '0px';
    case 'red':
      return '100px';
    default:
      return '0px';
  }
};

export const ModalWindow = styled.div`
  display: block;
  width: 982px;
  // min-height: 720px;
  max-height: 80vh;
  overflow-y: auto;
  background-color: white;
  padding: 40px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 24, 40, 0.2);
  z-index: 1200;
`;

export const Photo = styled.img`
  width: 315px;
  height: 310px;
  display: block;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 16px;
  padding: 0px;
  margin: 0px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-heigth: 125%;
  padding-top: 40px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.black};
`;
export const WrapperLocation = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContainerLokation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const RatingSvg = styled.svg`
  fill: ${p => p.theme.colors.yellow};
  width: 20px;
  height: 20px;
`;

export const Lokation = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
`;

export const LokationSvg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-heigt: 125%;
  padding-top: 0px;
  color: ${p => p.theme.colors.black};
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-heigt: 150%;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 44px;
  margin-top: 24px;
  color: ${p => p.theme.colors.grey};
  text-align: justify;
`;
export const CloseBtn = styled.button`
  //   position: absolute;
  //   top: 70px;
  //   right: 90px;
  //   width: 32px;
  //   height: 32px;
  border: none;
  background-color: transparent;
  padding-top: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NavContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const Link = styled(NavLink)`
  display: flex;
  font-weight: 700;
  font-size: 20;
  line-heigt: 150%;
  color: ${p => p.theme.colors.black};
`;

export const Line = styled.div`
  height: 1px;
  background-color: grey;
  margin-top: 10px;
`;

export const LineRed = styled.div`
  position: relative;
  height: 1px;
  background-color: red;
  margin-top: -2px;
  margin-left: ${getByLink};
  width: 85px;
`;
