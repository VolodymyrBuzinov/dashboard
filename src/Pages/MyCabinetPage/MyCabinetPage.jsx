import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
<<<<<<< HEAD
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';

const MyCabinetPage = () => {
<<<<<<< HEAD
  return (
    <>
      <HeaderPage />
      <ButtonOpenTeamModal />
      <DashboardList />
    </>
  );
};
=======
  RefreshToken();
  const isVisibleLoader = useSelector(getLoader);
=======
import Selector from '../../Redux/Selectors/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refToken } from '../../Redux/Operations/authOperation';

const MyCabinetPage = () => {
>>>>>>> parent of bb15132 (add spinner for all pages)
  const state = useSelector(Selector.getErrorRefToken);
  const dispatch = useDispatch();
  if (state === 401) {
    dispatch(refToken());
    console.log('была ошибка 401');
  }

  return (
    <>
<<<<<<< HEAD
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        <>
          <HeaderPage />
    <ButtonOpenTeamModal />
          <DashboardList />
        </>
      )})
}
>>>>>>> parent of d4438f0 (add fix)

=======
      <HeaderPage />
      {/*<ExitButton />*/}
      <DashboardList />
    </>
  );
};
>>>>>>> parent of bb15132 (add spinner for all pages)
export default MyCabinetPage;
