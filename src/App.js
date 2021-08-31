import './index.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
