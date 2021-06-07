// import ExitButton from '../../Components/ExitButton/ExitButton';

import HeaderPage from '../../Components/HeaderPage/HeaderPage';

import DashboardList from '../../Components/DashboardList/DashboardList';
import Selector from '../../Redux/Todos/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { refToken } from '../../Redux/Operations/authOperation';

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
      {/*<ExitButton />*/}
      <DashboardList />
    </>
  );
};
export default MyCabinetPage;
