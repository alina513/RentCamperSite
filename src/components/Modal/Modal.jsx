import {
  Overlay,
  Photo,
  List,
  ModalWindow,
  Description,
  NameContainer,
  Name,
  Link,
  WrapperLocation,
  ContainerRating,
  ContainerLokation,
  Lokation,
  LokationSvg,
  RatingSvg,
  Price,
  CloseBtn,
  NavContainer,
  Line,
  LineRed,
} from './Modal.styled';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import sprite from '../../sprite.svg';

export const Modal = ({ value, closeModal, closeModalOverlay }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  });

  return (
    <Overlay onClick={closeModalOverlay}>
      <ModalWindow>
        <NameContainer>
          <Name>{value.name}</Name>
          <CloseBtn onClick={() => closeModal()}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </CloseBtn>
        </NameContainer>
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
              <use xlinkHref={sprite + '#location'}></use>
            </LokationSvg>
            <Lokation>{value.location}</Lokation>
          </ContainerLokation>
        </WrapperLocation>
        <Price>€{value.price.toFixed(2)}</Price>
        <List>
          <li>
            <Photo alt={value.name} src={value.gallery[0]} />
          </li>
          <li>
            <Photo alt={value.name} src={value.gallery[1]} />
          </li>
          <li>
            <Photo alt={value.name} src={value.gallery[1]} />
          </li>
        </List>
        <Description>{value.description}</Description>
        <NavContainer>
          <Link
            to="features"
            onClick={() => handleLinkClick('features')}
            className={activeLink === 'features' ? 'active' : ''}
          >
            Features
          </Link>
          <Link
            to="reviews"
            onClick={() => handleLinkClick('reviews')}
            className={activeLink === 'reviews' ? 'active' : ''}
          >
            Reviews
          </Link>
        </NavContainer>
        <Line />
        <LineRed
          className={
            activeLink === 'features'
              ? 'all'
              : activeLink === 'reviews'
              ? 'red'
              : ''
          }
        />
        <Outlet />
      </ModalWindow>
    </Overlay>
  );
};
