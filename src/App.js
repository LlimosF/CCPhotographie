import './App.css';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from './Pages/Home';
import Tarifs from './Pages/Tarifs';
import Contact from './Pages/Contact';


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Tarifs" element={<Tarifs />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
