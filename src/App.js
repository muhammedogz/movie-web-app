import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';

import './App.css';

const App = () => {
  return (
    <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Route path="/about" component={Content} /> */}
        <Footer />
    </Router>
  );
}

export default App;
