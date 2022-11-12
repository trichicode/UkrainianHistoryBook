import { createContext } from 'react';

export const BookContext = createContext({ 
    isFocus: false,
    isPrevAvailable: false, 
    isNextAvailable: true, 
    setIsFocus: () => {},
    setIsPrevAvailable: () => {}, 
    setIsNextAvailable: () => {} 
});