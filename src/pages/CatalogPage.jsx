import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../redux/operations';
import { CampersList } from '../components/CampersList/CampersList';
import { Filter } from '../components/Filter/Filter';
import { LoadMore } from '../components/LoadMore/LoadMore';
import { Loader } from '../components/Loader';
import { Toaster } from 'react-hot-toast';
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from '../redux/selectors';

export default function CatalogPage() {
  const [currentLimit, setCurrentLimit] = useState(4);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers(currentLimit));
  }, [dispatch, currentLimit]);
  const handleLoadMore = () => {
    setCurrentLimit(prevLimit => prevLimit + 4);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '26px',
        // width: '982px',
        padding: '40px',
      }}
    >
      <Toaster/>
      <Filter />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading && !error && <Loader />}
        {campers.length !== 0 &&(
          <>
            <CampersList />
            {currentLimit <= 12 && <LoadMore handleLoadMore={handleLoadMore} />}
          </>
        ) }
      </div>
    </div>
  );
}
