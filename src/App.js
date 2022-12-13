import './App.css';
import { MainProvider } from './providers/main';
import Home from "./pages/home"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <MainProvider>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
        </Switch>        
      </div>      
    </MainProvider>
  );
};

export default App;
