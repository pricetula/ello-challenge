import { create } from 'zustand'
import { Book } from '../gql/__generated__/graphql'

interface ReadingListState {
    books: { [k: string]: Book }
    favouriteBookKeys: string[]
    addBooks: (books: Book[]) => void
    removeBook: (bookKey: string) => void
    setFavouriteBook: (bookKey: string) => void
    removeFavouriteBook: (bookKey: string) => void
}
// readingListStore used hold books added by the user and favourite books added by the user
export const useReadingListStore = create<ReadingListState>()((set) => ({
    books: {},
    favouriteBookKeys: [],
    addBooks: (books) => set(addBooks(books)),
    removeBook: (bookKey) => set(removeBook(bookKey)),
    setFavouriteBook: (bookKey) => set(setFavouriteBook(bookKey)),
    removeFavouriteBook: (bookKey) => set(removeFavouriteBook(bookKey))
}))

// addBooks function used to add books to the readingList state
function addBooks(books: Book[]): (state: ReadingListState) => ReadingListState {
    return (state) => {
        if (books.length === 0) return state
        const newBooks = books.reduce((acc, book) => {
            acc[getBookKey(book)] = book
            return acc
        }, {} as { [k: string]: Book })
        return { books: { ...state.books, ...newBooks } } as ReadingListState
    }
}
// removeBook function used to remove a book from the readingList state
function removeBook(bookKey: string): (state: ReadingListState) => ReadingListState {
    return (state) => {
        if (!bookKey || !state.books[bookKey]) return state
        const { [bookKey]: _, ...restBooks } = state.books
        const favouriteBookKeys = state.favouriteBookKeys.filter((key) => key !== bookKey)
        return { books: restBooks, favouriteBookKeys } as ReadingListState
    }
}
// setFavouriteBook function used to set a book as favourite in the readingList state
function setFavouriteBook(bookKey: string): (state: ReadingListState) => ReadingListState {
    return (state) => {
        if (!bookKey || state.favouriteBookKeys.includes(bookKey)) return state
        return {
            favouriteBookKeys: [...state.favouriteBookKeys, bookKey]
        } as ReadingListState
    }
}
// removeFavouriteBook function used to remove a book from the favourite list in the readingList state
function removeFavouriteBook(bookKey: string): (state: ReadingListState) => ReadingListState {
    return (state) => {
        if (!bookKey || !state.favouriteBookKeys.includes(bookKey)) return state
        return {
            favouriteBookKeys: state.favouriteBookKeys.filter((key) => key !== bookKey)
        } as ReadingListState
    }
}
// getBookKey helper function used to get construct a key for a book
export function getBookKey(book: Book): string {
    return `${book.title}-${book.author}-${book.coverPhotoURL}-${book.readingLevel}`
}