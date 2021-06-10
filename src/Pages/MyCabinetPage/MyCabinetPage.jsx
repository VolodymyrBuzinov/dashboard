import HeaderPage from '../../Components/HeaderPage/HeaderPage';
import DashboardList from '../../Components/DashboardList/DashboardList';
import ButtonOpenTeamModal from '../../Components/TeamModal/ButtonOpenTeamModal';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import { useTransition, animated } from 'react-spring';

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

  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 1450,
  });

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
      )}{' '}
    </>
  );
};

export default MyCabinetPage;
