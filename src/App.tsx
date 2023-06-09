import './style.scss'
import { setupStore } from './store';
import { Provider } from 'react-redux'
import {Map} from '../src/components/Map/Map'
import { Burger } from './components/Burger/Burger';
import { Menu } from './components/Menu/Menu';


function App() {

  const store = setupStore()

  return (
    <Provider store={store}>
      <Map/>
      <Burger/>
      <Menu/>
    </Provider>
  );
}

export default App;
