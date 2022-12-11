import { createContext } from 'react';

interface IBookContext {
    isFocus: boolean,
    isPrevAvailable: boolean, 
    isNextAvailable: boolean, 
    currentPage: number,
    setIsFocus: (el: boolean) => void,
    setIsPrevAvailable: (el: boolean) => void, 
    setIsNextAvailable: (el: boolean) => void,
    setCurrentPage: (el: number) => void
}

export const BookContext = createContext<IBookContext>({ 
    isFocus: false,
    isPrevAvailable: false, 
    isNextAvailable: true, 
    currentPage: 0,
    setIsFocus: () => {},
    setIsPrevAvailable: () => {}, 
    setIsNextAvailable: () => {},
    setCurrentPage: () => {}
});