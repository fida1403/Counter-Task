import { Provider } from 'react-redux';
import './App.css';
import Home from './Components/Home/Home';
import { store } from './Components/Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
    
  );
}

export default App;
