import './App.css';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from './Pages/Home';
import Galerie from './Pages/Galerie';
import NavbarMobile from './Component/NavbarMobile';
import Tarifs from './Pages/Tarifs';
import Contact from './Pages/Contact';
import Mariage from './Pages/Mariage';
import Grossesse from './Pages/Grossesse';
import Bebe from './Pages/Bebe';
import Famille from './Pages/Famille';
import Bapteme from './Pages/Bapteme';
import Couple from './Pages/Couple';
import FormAfterPage from './Pages/FormAfter';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Galerie" element={<Galerie />} />
            <Route path="/NavbarMobile" element={<NavbarMobile />} />
            <Route path="/Tarifs" element={<Tarifs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Mariage" element={<Mariage />} />
            <Route path="/Grossesse" element={<Grossesse />} />
            <Route path="/Bebe" element={<Bebe />} />
            <Route path="/Famille" element={<Famille />} />
            <Route path="/Bapteme" element={<Bapteme />} />
            <Route path="/Couple" element={<Couple />} />
            <Route path="/FormAfterPage" element={<FormAfterPage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
