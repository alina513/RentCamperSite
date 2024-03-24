import { selectModal } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import sprite from "../../sprite.svg";
import {
  Container,
  WrapperBar,
  Round,
  Book,
  WrapperBook,
  WrapperName,
  Name,
  Description,
  Item,
  Svg,
  Stars
} from './Reviews.styled';
import { FormModal } from '../Form/Form';
import { nanoid } from 'nanoid';

export const Reviews = () => {


  const YellowStar = (
    <Svg>
      <use xlinkHref={sprite + '#icon-star'}></use>
    </Svg>
  );
  
  const GreyStar = (
    <Svg>
      <use xlinkHref={sprite + '#icon-star-grey'}></use>
    </Svg>
  );

  const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starIcon = i < rating ? 'icon-star' : 'icon-star-grey';
      stars.push(
        <Svg key={i}>
          <use xlinkHref={`${sprite}#${starIcon}`}></use>
        </Svg>
      );
    }
    return <Stars>{stars}</Stars>;
  };

  const value = useSelector(selectModal);
  return (
    <>
      <Container>
        <WrapperBar>
          {value.reviews.map(review => {
            return (
              <Item key={nanoid()}>
                <WrapperBook>
                  <Round>
                    <Book>{review.reviewer_name[0]}</Book>
                  </Round>
                  <WrapperName>
                    <Name>{review.reviewer_name}</Name>
                    <Rating rating={review.reviewer_rating} />
                  </WrapperName>
                </WrapperBook>
                <Description>{review.comment}</Description>
              </Item>
            );
          })}
        </WrapperBar>
        <FormModal />
      </Container>
    </>
  );
};
