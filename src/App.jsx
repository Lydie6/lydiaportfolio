import { useState } from 'react';
import Navbar from './components/Navbar/index.jsx';
import Home from './components/Home/index.jsx';
import LoadingScreen from './components/LoadingScreen';
import About from './components/About/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contacts from './components/Contacts/index.jsx';
import './App.css';
import './index.css';

function App() {
  const [isloaded, setIsloaded] = useState(false);

  return (
      <>
          {/* Always show loading screen when not loaded */}
          {!isloaded && (
              <LoadingScreen onComplete={() => {
                  console.log("Setting isloaded to true");
                  setIsloaded(true);
              }} />
          )}

          {/* Main content - only fades in when loaded */}
          <div
              className={`min-h-screen bg-black transition-opacity duration-700 ${
                  isloaded ? 'opacity-100' : 'opacity-0'
              }`}
          >
              <Navbar />
              <main>
                  <Home />
                  <About />
                  <Projects />
                  <Contacts />
              </main>
          </div>
      </>
  );
}


export default App;