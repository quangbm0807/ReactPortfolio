import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, Experience, Works, Skills, Slider } from './components';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0">
          <Navbar />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <Skills />
          <Slider />
          <Experience />
          <Works />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;