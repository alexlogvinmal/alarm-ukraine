import { setupStore } from './store';
import { Provider } from 'react-redux'

function App() {

  const store = setupStore()

  return (
    <Provider store={store}>
      <h1>Hello</h1>
    </Provider>
  );
}

export default App;
