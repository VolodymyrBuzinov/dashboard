import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAutheticated } from '../Redux/Auth/authSelectors';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsAutheticated);
  console.log(isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;
