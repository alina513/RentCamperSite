
import {
  Name,
  Inside,
  Item,
  Title,
  List,
  Filters,
  Input,
  LocationWrapper,
  Label,
  LineSvg,
  Location,
  VehicleList,
  Type,
  VehicleName,
  Svg,
  Buton,
  Icon,
} from "./Filter.styled";

import sprite from "../../sprite.svg";

export const Filter = () => {
  

  return (
    <>
      <div>
        <LocationWrapper>
        <Location>
      <use xlinkHref={sprite + "#location"}></use>
    </Location>
          <Label>Location</Label>
          <Input type="text" placeholder="Kyiv, Ukraine"/>
        </LocationWrapper>

        <Filters>Filters</Filters>

        <div>
          <Title>Vehicle equipment</Title>
          <LineSvg>
      <use xlinkHref={sprite + "#icon-line"}></use>
    </LineSvg>
          <List>
            <Item>
              <Inside>
              <Icon>
      <use xlinkHref={sprite + "#icon-AC"}></use>
    </Icon>
                
                <Name>AC</Name>
              </Inside>
            </Item>
            <Item>
              <Inside>
              <Icon>
      <use xlinkHref={sprite + "#icon-transmission-2"}></use>
    </Icon>
                <Name>Automatic</Name>
              </Inside>
            </Item>
            <Item>
              <Inside>
              <Icon>
      <use xlinkHref={sprite + "#icon-kitchen-2"}></use>
    </Icon>
                <Name>Kitchen</Name>
              </Inside>
            </Item>
            <Item>
              <Inside>
              <Icon>
      <use xlinkHref={sprite + "#icon-TV"}></use>
    </Icon>
                <Name>TV</Name>
              </Inside>
            </Item>
            <Item>
              <Inside>
              <Icon>
      <use xlinkHref={sprite + "#icon-shower"}></use>
    </Icon>

                <Name>Shower/WC</Name>
              </Inside>
            </Item>
          </List>
        </div>
        <div>
          <Title>Vehicle type</Title>
          <LineSvg>
      <use xlinkHref={sprite + "#icon-line"}></use>
    </LineSvg>
          <VehicleList>
            <Type>
            <Svg>
      <use xlinkHref={sprite + "#icon-camper-3"}></use>
    </Svg>
              <VehicleName>Van</VehicleName>
            </Type>
            <Type>
            <Svg>
      <use xlinkHref={sprite + "#icon-camper-2"}></use>
    </Svg>
              <VehicleName>Fully Integrated</VehicleName>
            </Type>
            <Type>
            <Svg>
      <use xlinkHref={sprite + "#icon-camper-1"}></use>
    </Svg>
              <VehicleName>Alcove</VehicleName>
            </Type>
          </VehicleList>
        </div>
        <Buton type="submit">Search</Buton>
      </div>
    </>
  );
};