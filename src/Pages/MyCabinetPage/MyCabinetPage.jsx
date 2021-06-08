import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import Selector from '../../Redux/Selectors/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refToken } from '../../Redux/Operations/authOperation';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { useEffect } from 'react';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import Spinner from '../../Components/Spinner/Spinner';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';
import RefreshToken from '../../Components/RefreshToken/RefreshToken';

const MyCabinetPage = () => {
  RefreshToken();
  const isVisibleLoader = useSelector(getLoader);
  const state = useSelector(Selector.getErrorRefToken);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, [dispatch]);

  if (state === 401) {
    dispatch(refToken());
    console.log('была ошибка 401');
  }

  return (
    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        <>
          <HeaderPage />
          <ButtonOpenTeamModal />
          <DashboardList />
        </>
      )}
    </>
  );
};

export default MyCabinetPage;
