import './App.css';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from './Pages/Home';
import Tarifs from './Pages/Tarifs';
import Contact from './Pages/Contact';
import Galerie from './Pages/Galerie';
import Seul from './Pages/Seul';
import PourDeux from './Pages/PourDeux';
import Famille from './Pages/Famille';
import IlEtaitUneFois from './Pages/IlEtaitUneFois';
import MonBebe from './Pages/MonBebe';
import Street from './Pages/Street';
import Voiture from './Pages/Voiture';
import JimmortaliseLevenement from './Pages/JimmortaliseLevenement';


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Tarifs" element={<Tarifs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Galerie" element={<Galerie />} />
            <Route path="/juste-moi" element={<Seul />} />
            <Route path="/pour-deux" element={<PourDeux />} />
            <Route path="/famille" element={<Famille />} />
            <Route path="/il-était-une-fois" element={<IlEtaitUneFois />} />
            <Route path="/mon-bébé" element={<MonBebe />} />
            <Route path="/street" element={<Street />} />
            <Route path="/voiture" element={<Voiture />} />
            <Route path="/j'immortalise-l'évènement" element={<JimmortaliseLevenement />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
