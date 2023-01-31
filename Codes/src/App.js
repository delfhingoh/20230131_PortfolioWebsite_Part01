import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { NavigationLinks } from './Data';

function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation navLink={ NavigationLinks }/>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
