import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import { refToken } from '../../Redux/Operations/authOperation';
import Selector from '../../Redux/Selectors/todosSelectors';

const MyCabinetPage = () => {
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
      )}{' '}
    </>
  );
};

export default MyCabinetPage;
