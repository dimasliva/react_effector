import './App.css';
import { Route, Routes } from 'react-router-dom';
import Filmpage from './pages/Filmpage';
import Filmspage from './pages/Filmspage';
import AddFilm from './pages/AddFilm';

function App() {

  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Filmspage />} />
        <Route path="/film/:id" element={<Filmpage />} />
        <Route path="/create" element={<AddFilm />} />
      </Routes>
    </div>
  );
}

export default App;
