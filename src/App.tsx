import { useState } from 'react';
import './App.scss';

import VerticalSwiper from './components/home/VerticalSwiper';
import Settings from "./components/settings/Settings";
import { BookContext } from './context/bookContext';

const App = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

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
            <VerticalSwiper />
            <Settings />
          </div>
    </BookContext.Provider>
  );
};

export default App;
