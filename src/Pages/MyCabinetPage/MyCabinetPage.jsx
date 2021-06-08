import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';
import RefreshToken from '../../Components/RefreshToken/RefreshToken';

const MyCabinetPage = () => {
  RefreshToken();

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
