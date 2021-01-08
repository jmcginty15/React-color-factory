import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ColorList from './ColorList';
import NewColor from './NewColor';
import Color from './Color';
import useLocalStorage from './hooks';

function App() {
  const [colors, setColors, clearColors] = useLocalStorage('colors', localStorage.getItem('colors'));

  function submitColor(color) {
    const newColors = [
      color,
      ...colors
    ];
    setColors(newColors);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <NewColor submitColor={submitColor} />
          </Route>
          <Route exact path="/colors/:color">
            <Color />
          </Route>
          <Route exact path="/colors">
            <ColorList colors={colors} clear={clearColors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
