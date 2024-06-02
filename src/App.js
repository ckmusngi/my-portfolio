import './App.css';
import { createContext, useState } from 'react';
import Navbar from './components/common/navbar';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Footer from './components/common/footer';
import About from './components/pages/about';
import Home from './components/pages/home';
import Services from './components/pages/services';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
