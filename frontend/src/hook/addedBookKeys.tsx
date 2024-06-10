import { useMemo } from "react";
import { useReadingListStore } from "../state/readingList";

export function useDerivedReadingBookKeys() {
  const bookCollection = useReadingListStore((state) => state.books)
  const bookKeysAdded = useMemo(() => Object.keys(bookCollection), [bookCollection]);
  return bookKeysAdded;
}