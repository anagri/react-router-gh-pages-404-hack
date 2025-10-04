import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import OAuthCallback from './pages/OAuthCallback';
import './App.css';

function App() {
  return (
    <Router basename="/react-router-gh-pages-404-hack">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/oauth/callback" element={<OAuthCallback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
