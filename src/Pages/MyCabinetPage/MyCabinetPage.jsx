import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import { animated } from 'react-spring';
import { RouteTransition } from '../../Components/RouteTransition/RouteTransition';
import Button from '../../Components/Button/Button';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import isEdit from '../../Redux/Selectors/editTodoSelector';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import { toast} from 'react-toastify';

const MyCabinetPage = () => {
  const isVisibleLoader = useSelector(getLoader);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, [dispatch]);

  const transitions = RouteTransition();

  const edit = useSelector(isEdit);
  const isVisible = useSelector(isVisibleTemplate);
  const onClick = () => {
    if (edit) {
      //console.log('Закончить редактирование карточки');
      toast.info('Finish editing the card');
      return;
    }
    if (isVisible) {
      //console.log('Закончить создание карточки');
      toast.info('Finish card creation');
      return;
    }
    dispatch(onClickBtnCreate(true));
  };

  return (
    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <HeaderPage />
                <ButtonOpenTeamModal />
                <DashboardList />
              </animated.div>
            ),
        )
      )}
      <Button content="icon-plus" type="button" onClick={onClick} />
    </>
  );
};

export default MyCabinetPage;
