import './App.css';
import { createContext, useState } from 'react';
import Navbar from './components/common/navbar';

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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
