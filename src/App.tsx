import './style.scss'
import { setupStore } from './store';
import { Provider } from 'react-redux'
import {Map} from '../src/components/Map/Map'


function App() {

  const store = setupStore()

  return (
    <Provider store={store}>
      <Map/>
    </Provider>
  );
}

export default App;
