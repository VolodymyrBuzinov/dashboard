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
    if (edit || isVisible) {
      console.log('Закончить создание карточки');
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
