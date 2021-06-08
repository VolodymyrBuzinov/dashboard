import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import RefreshToken from '../../Components/RefreshToken/RefreshToken';

const MyCabinetPage = () => {
  RefreshToken();

  return (
    <>
      <HeaderPage />
      <DashboardList />
    </>
  );
};
export default MyCabinetPage;
