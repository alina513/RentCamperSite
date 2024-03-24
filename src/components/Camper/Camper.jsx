import { Element } from './Camper.styled';
import { Photo } from './Camper.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import {
  ButtonHeart,
  WrapperHeart,
  Container,
  Title,
  ContainerLokation,
  Lokation,
  LokationSvg,
  ContainerRating,
  RatingSvg,
  Price,
  WrapperButton,
  ButtonMore,
  Description,
  WrapperPrice,
  Svg,
  WrapperLocation,
  ItemIcon,
} from './Camper.styled';
import { useDispatch } from 'react-redux';
import { setModalState } from '../../redux/modalSlice';
import sprite from '../../sprite.svg';
import { useEffect } from 'react';

export const Camper = ({ value }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const isFav = ()=>{
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    const itemIndex = storedItems.findIndex(item => item._id === value._id);
    if (itemIndex!== -1) {
      setIsFavorite(true);
    }
    return
  }
  useEffect(() => {
    isFav()
  },[])

  const openModal = () => {
    setIsModalOpen(true);
    dispatch(setModalState(value));
  };

  const closeModal = event => {
    setIsModalOpen(false);
  };

  const closeModalOverlay = event => {
    if (event.currentTarget === event.target) {
      setIsModalOpen(false);
    }
    return;
  };

  const toggleItemInLocalStorage = () => {
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    if (storedItems.length === 0) {
        storedItems.push(value);
        setIsFavorite(true);
    } else {
        const itemIndex = storedItems.findIndex(item => item._id === value._id);
        
        if (itemIndex === -1) {
            storedItems.push(value);
            setIsFavorite(true);
        } else {
            storedItems.splice(itemIndex, 1);
            setIsFavorite(false);
        }
    }
    
    localStorage.setItem('storedItems', JSON.stringify(storedItems));
};
  
  // const handleButtonClick = () => {
  //   toggleItemInLocalStorage('item-to-toggle');
  // };

  return (
    <Element>
      <Photo alt={value.name} src={value.gallery[0]} />
      <Container>
        <WrapperPrice>
          <Title>{value.name}</Title>
          <WrapperHeart>
          <Price>€{value.price.toFixed(2)}</Price>
          <ButtonHeart onClick={toggleItemInLocalStorage}><Svg>
              <use xlinkHref={sprite + (isFavorite ?'#icon-Property-1pressed' :'#icon-heart')}></use>
            </Svg></ButtonHeart>
          </WrapperHeart>
        </WrapperPrice>
        <WrapperLocation>
          <ContainerRating>
            <RatingSvg>
              <use xlinkHref={sprite + '#icon-star'}></use>
            </RatingSvg>
            <p>
              {value.rating}({value.reviews.length} Rewiews)
            </p>
          </ContainerRating>
          <ContainerLokation>
          <LokationSvg>
      <use xlinkHref={sprite + "#location"}></use>
    </LokationSvg>
          <Lokation>{value.location}</Lokation>
          </ContainerLokation>
        </WrapperLocation>
        <Description>{value.description.slice(0, 66)}...</Description>
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
              <use xlinkHref={sprite + '#icon-AC'}></use>
            </Svg>
            AC
          </ItemIcon>
        </WrapperButton>
        <ButtonMore onClick={openModal}>Show more</ButtonMore>
      </Container>
      {isModalOpen && (
        <Modal
          value={value}
          closeModal={closeModal}
          closeModalOverlay={closeModalOverlay}
        />
      )}
    </Element>
  );
};
