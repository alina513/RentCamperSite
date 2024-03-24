import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const WrapperBar = styled.div`
  width: 420px;
  height: 580px;
  // padding: 24px;
`;
export const WrapperButton = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 44px;
`;

export const ItemIcon = styled.li`
  padding: 12px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  gap: 8px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.greyWhite};
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const WrapperVehicle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const WrapperVehicleAll = styled.div`
  width: 420px;
`;
export const Line = styled.div`
  width: 420px;
  height: 1px;
  background-color: ${p => p.theme.colors.grey};
  margin-top: 44px;
  margin-bottom: 44px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-heigt: 1.2;
  padding-top: 0px;
  margin-top: 0px;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-heigt: 1.5;
  padding-top: 0px;
  margin-top: 0px;
`;
