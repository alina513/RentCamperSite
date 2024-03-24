import { selectModal } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Container, WrapperBar, Round, Book, WrapperBook, WrapperName, Name, Description } from './Reviews.styled';
import { FormModal } from '../Form/Form';
import { nanoid } from 'nanoid';

export const Reviews = () => {
  const value = useSelector(selectModal);
  return (
    <>
      <Container>
        <WrapperBar>
          {value.reviews.map(review => {
            return (
              <li key={nanoid()}>
                <WrapperBook>
                <Round>
                  <Book>{review.reviewer_name[0]}</Book>
                </Round>
                <WrapperName>
                <Name>{review.reviewer_name}</Name>
                <p>{review.reviewer_rating}</p>
                </WrapperName>
                </WrapperBook>
                <Description>{review.comment}</Description>
              </li>
            );
          })}
        </WrapperBar>
        <FormModal />
      </Container>
    </>
  );
};
