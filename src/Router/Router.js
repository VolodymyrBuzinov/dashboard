import { Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoutes';


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

function Router() {
  return (
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            restricted
            redirectTo="/myCabinet"
            component={LoginPage}
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
          <PublicRoute
            path="/"
            restricted
            redirectTo="/"
            component={LoginPage}
          />
        </Switch>
      </Suspense>
  );
}

export default Router;
