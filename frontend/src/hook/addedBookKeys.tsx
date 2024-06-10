import { useMemo } from "react";
import { useReadingListStore } from "../state/readingList";

// useDerivedReadingBookKeys hook to get the list of book keys added from the readingList state
export function useDerivedReadingBookKeys() {
  const bookCollection = useReadingListStore((state) => state.books)
  const bookKeysAdded = useMemo(() => Object.keys(bookCollection), [bookCollection]);
  return bookKeysAdded;
}