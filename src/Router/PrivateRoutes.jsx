import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAutheticated } from '../Redux/Selectors/authSelectors';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsAutheticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;
