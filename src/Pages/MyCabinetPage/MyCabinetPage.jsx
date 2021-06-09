import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
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
  const state = useSelector(Selector.getErrorRefToken);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, []);

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
      )})
}
>>>>>>> parent of d4438f0 (add fix)

export default MyCabinetPage;
