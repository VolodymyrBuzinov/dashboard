import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';

const MyCabinetPage = () => {
  return (
    <>
      <HeaderPage />
      <ButtonOpenTeamModal />
      <DashboardList />
    </>
  );
};

export default MyCabinetPage;
