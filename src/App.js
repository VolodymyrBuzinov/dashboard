import Router from './Router/Router';
import TemplateTodo from './Components/TemplateTodo/TemplateTodo';
import Spinner from './Components/Spinner/Spinner'
import getLoader from './Redux/Selectors/loaderSelector'
import { useSelector } from 'react-redux';

function App() {
  const isVisibleLoader = useSelector(getLoader)
  return (
    <div className="App">
      {isVisibleLoader && <Spinner />}
      <Router />
      {/* <TemplateTodo />  */}
    </div>
  );
}

export default App;
