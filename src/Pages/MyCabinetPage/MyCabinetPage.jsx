// import ExitButton from '../../Components/ExitButton/ExitButton';
import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import Selector from '../../Redux/Selectors/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refToken } from '../../Redux/Operations/authOperation';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';

const MyCabinetPage = () => {
  const state = useSelector(Selector.getErrorRefToken);
  const dispatch = useDispatch();
  if (state === 401) {
    dispatch(refToken());
    console.log('была ошибка 401');
  }

  return (
    <>
      <HeaderPage />
      <ButtonOpenTeamModal />
      {/*<ExitButton />*/}
      <DashboardList />
    </>
  );
};
export default MyCabinetPage;
