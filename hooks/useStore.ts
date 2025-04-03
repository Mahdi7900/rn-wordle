import {create} from 'zustand';

interface StoreWordle {
    isGameOver: boolean,
    setIsGameOver: (isGameOver: boolean) => void,
    guesses: string[],
    setGuesses: (guesses: string[]) => void,
    currentGuess: string,
    setCurrentGuess: (currentGuess: string) => void,
    answer: string,
    setAnswer: (string) => void,
}

const useStore = create<StoreWordle>((set) => ({
    isGameOver: false,
    guesses: Array(6).fill(null),
    currentGuess: '',
    answer: '',
    setIsGameOver: (isGameOver: boolean) => set((state) => ({...state, isGameOver})),
    setGuesses: (guesses: string[]) => set((state) => ({...state, guesses})),
    setCurrentGuess: (currentGuess: string) => set((state) => ({...state, currentGuess})),
    setAnswer: (answer: string) => set((state) => ({...state, answer})),
}));

export default useStore;