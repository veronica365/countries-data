import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
