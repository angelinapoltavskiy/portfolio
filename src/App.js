import './index.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter, Route } from "react-router-dom";
import ProjectsPage from './ProjectsPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        </header>
        <Home />
      <Footer />

    </div>
  );
}

export default App;
