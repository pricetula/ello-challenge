import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
    searchBooks: async (parent: any, args: any, context: any) => {
      const searchTerm = args?.input?.term?.toLowerCase?.();
      await new Promise((resolve) => {
        const t = setTimeout(() => {
          clearTimeout(t);
          resolve(null);
        }, 1000)
      });
      return booksData.filter((book) => (
        book.title.toLowerCase().includes(searchTerm)
        || book.author.toLowerCase().includes(searchTerm)
      ));
    },
  },
};
