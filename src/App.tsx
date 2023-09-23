import {useEffect, useState} from 'react';
import './App.scss';

import './fonts/e-Ukraine-Regular.otf';

import VerticalSwiper from './components/home/VerticalSwiper';
import Settings from "./components/settings/Settings";
import { BookContext } from './context/bookContext';

const App = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      setIsMobile( window.innerWidth <= 1300 );
  }, []);

  return (
    <BookContext.Provider
      value={{
        isFocus,
        isPrevAvailable,
        isNextAvailable,
        currentPage,
        setCurrentPage,
        setIsFocus,
        setIsPrevAvailable,
        setIsNextAvailable,
      }}>
          <div className="App">
              {
                  !isMobile ? (
                      <>
                          <VerticalSwiper />
                          <Settings />
                      </>
                  ) : (
                      <div className="container">
                          <h1 style={{fontSize: '2em', width: '80%'}}> Sorry, unavailable for your device ( </h1>
                      </div>
                  )
              }
          </div>
    </BookContext.Provider>
  );
};

export default App;
