import MenuDone from './Components/MenuDone/MenuDome';
import Router from './Router/Router';
import TemplateTodo from './Components/TemplateTodo/TemplateTodo';

function App() {
  return (
    <div className="App">
      <MenuDone />
      <Router />
      <TemplateTodo />
    </div>
  );
}

export default App;