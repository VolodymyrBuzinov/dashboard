// import ExitButton from '../../Components/ExitButton/ExitButton';
import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import Selector from '../../Redux/Todos/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refToken } from '../../Redux/Operations/authOperation';
import { error } from '../../Redux/Selectors/authSelectors';

const MyCabinetPage = () => {
  const state = useSelector(Selector.getErrorRefToken);
  const stateAuth = useSelector(error);
  const dispatch = useDispatch();
  if (state || stateAuth === 401) {
    dispatch(refToken());
    console.log('была ошибка 401');
  }

  return (
    <>
      <HeaderPage />
      {/*<ExitButton />*/}
      <DashboardList />
    </>
  );
};
export default MyCabinetPage;
