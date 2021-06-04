import { Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoutes';
import s from './Router.module.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
  return (
    <Suspense
      fallback={
        <Loader
          className={s.waitingMessage}
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        />
      }
    >
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
          // restricted
          // redirectTo="/"
          component={VerifyPage}
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
