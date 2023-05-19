import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import DetailPage from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/detail">
        <Route path=":userId" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<h1>Halamnnya gada coy</h1>} />
    </Routes>
  );
}

export default App;
