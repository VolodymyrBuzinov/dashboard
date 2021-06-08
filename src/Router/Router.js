import { Redirect, Switch } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getVerify } from '../Redux/Selectors/authSelectors';
import Selector from '../Redux/Selectors/todosSelectors';
import { error } from '../Redux/Selectors/authSelectors';
import { refToken, getCurrentUser } from '../Redux/Operations/authOperation';

const LoginPage = lazy(() =>
  import('../Pages/LoginPage/LoginPage' /*webpackChunkName: "LoginPage"*/),
);
const SingUpPage = lazy(() =>
  import('../Pages/SingUpPage/SingUpPage' /*webpackChunkName: "SingUpPage"*/),
);
const MyCabinetPage = lazy(() =>
  import(
    '../Pages/MyCabinetPage/MyCabinetPage' /*webpackChunkName: "MyCabinetPage"*/
  ),
);
const VerifyPage = lazy(() =>
  import(
    '../Pages/VerifyPage/VerifyPage' /*webpackChunkName: "MyCabinetPage"*/
  ),
);

function Router() {
  const dispatch = useDispatch();
  const state = useSelector(getVerify);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const stateTodo = useSelector(Selector.getErrorRefToken);
  const stateAuth = useSelector(error);
  if (stateTodo || stateAuth === 401) {
    dispatch(refToken());
    setTimeout(() => {
      dispatch(getCurrentUser());
    }, 1000);
  }

  return (
    <Suspense fallback={null}>
      <Switch>
        <PublicRoute
          exact
          path="/"
          restricted
          redirectTo="/myCabinet"
          component={LoginPage}
        />
        <PublicRoute
          path="/verifyPage"
          render={() => (state ? <Redirect exact to="/" /> : <VerifyPage />)}
        />
        <PublicRoute
          path="/singUpPage"
          restricted
          redirectTo="/myCabinet"
          component={SingUpPage}
        />
        <PrivateRoute
          path="/myCabinet"
          component={MyCabinetPage}
          redirectTo="/"
        />
        <PublicRoute path="/" restricted redirectTo="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
}

export default Router;
