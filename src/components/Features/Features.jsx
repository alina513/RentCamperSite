import { selectModal } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { FormModal } from '../Form/Form';
import {
  Container,
  Title,
  WrapperBar,
  Line,
  WrapperVehicle,
  WrapperVehicleAll,
  WrapperButton,
  Svg,
  ItemIcon,
  Text
} from './Features.styled';
import sprite from '../../sprite.svg';

export const Features = () => {
  const value = useSelector(selectModal);
  return (
    <Container>
      <WrapperBar>
        <WrapperButton>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-adults'}></use>
            </Svg>
            {value.adults} adults
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-transmission'}></use>
            </Svg>
            {value.transmission}
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-AC'}></use>
            </Svg>
            AC
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-engine'}></use>
            </Svg>
            {value.engine}
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-kitchen'}></use>
            </Svg>
            Kitchen
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-beds'}></use>
            </Svg>
            {value.details.beds}beds
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-air-conditioner'}></use>
            </Svg>
            {value.details.airConditioner} airconditioner
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-cd'}></use>
            </Svg>
            {value.details.CD} CD
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-radio'}></use>
            </Svg>
            {value.details.radio} Radio
          </ItemIcon>
          <ItemIcon>
            <Svg>
              <use xlinkHref={sprite + '#icon-hob'}></use>
            </Svg>
            {value.details.hob} hob
          </ItemIcon>
        </WrapperButton>
        <WrapperVehicleAll>
          <Title>Vehicle details</Title>
          <Line></Line>
          <WrapperVehicle>
            <Text>Form</Text>
            <Text>{value.form}</Text>
          </WrapperVehicle>
          <WrapperVehicle>
            <Text>Length</Text>
            <Text>{value.length}</Text>
          </WrapperVehicle>
          <WrapperVehicle>
            <Text>Width</Text>
            <Text>{value.width}</Text>
          </WrapperVehicle>
          <WrapperVehicle>
            <Text>Height</Text>
            <Text>{value.height}</Text>
          </WrapperVehicle>
          <WrapperVehicle>
            <Text>Tank</Text>
            <Text>{value.tank}</Text>
          </WrapperVehicle>
          <WrapperVehicle>
            <Text>Consumption</Text>
            <Text>{value.consumption}</Text>
          </WrapperVehicle>
        </WrapperVehicleAll>
      </WrapperBar>
      <FormModal />
    </Container>
  );
};
