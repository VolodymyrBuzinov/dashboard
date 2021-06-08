import Router from './Router/Router';
import TemplateTodo from './Components/TemplateTodo/TemplateTodo';
import Spinner from './Components/Spinner/Spinner'
import getLoader from './Redux/Selectors/loaderSelector'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { hideSpinner } from '../src/Redux/Actions/loaderAction';

function App() {
  const isVisibleLoader = useSelector(getLoader)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
  }, []);
  return (
    <div className="App">
      {isVisibleLoader && <Spinner />}
      {!isVisibleLoader && <Router />}
      {/* <TemplateTodo />  */}
    </div>
  );
}

export default App;
