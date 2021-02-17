import bookService from '@/services/bookService.js';
export default {
    strict: true,
    state: {
        books: null,
        filterBy: null,
        selectedBook: null,
    },
    getters: {
        booksToShow(state) {
            const { books } = state;
            if (!state.filterBy) return books;
            const regex = new RegExp(state.filterBy.txt, 'i');
            const booksToShow = books.filter((book) => regex.test(book.title) || regex.test(book.categories));
            return booksToShow;
        },
        selectedBook(state) {
            return state.selectedBook
        },
        allBooks(state) {
            return state.books
        }
    },
    mutations: {
        setBooks(state, payload) {
            state.books = payload.books
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        removeBook(state, { bookId }) {
            const idx = state.books.findIndex(book => book._id === bookId)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            console.log(state, book)
            const idx = state.books.findIndex(currBook => currBook._id === book._id)
            if (idx === -1) state.books.push(book)
            else state.books.splice(idx, 1, book)
        },
        setSelectedBook(state, { book }) {
            state.selectedBook = book
        },
        sortBooks(state, { sortParams }) {
            switch (sortParams.by) {
                case 'name':
                    return sortParams.directionReversed
                        ? state.books.sort((a, b) => (a.title < b.title ? 1 : -1))
                        : state.books.sort((a, b) => (a.title < b.title ? -1 : 1))
                case 'price':
                    return sortParams.directionReversed
                        ? state.books.sort(
                            (a, b) =>
                                Number(b.listPrice.amount) - Number(a.listPrice.amount)
                        )
                        : state.books.sort(
                            (a, b) =>
                                Number(a.listPrice.amount) - Number(b.listPrice.amount)
                        )
                case 'date':
                    return sortParams.directionReversed
                        ? state.books.sort(
                            (a, b) => Number(a.publishedDate) - Number(b.publishedDate)
                        )
                        : state.books.sort(
                            (a, b) => Number(b.publishedDate) - Number(a.publishedDate)
                        )
            }
        },
        postReview(state, { reviewToPost }) {
            state.selectedBook.reviews.unshift(reviewToPost)
        }
    },
    actions: {
        async loadBooks(context) {
            const books = await bookService.query()
            context.commit({ type: 'setBooks', books })
        },
        async removeBook(context, { bookId }) {
            try {
                await bookService.remove(bookId)
                context.commit({ type: 'removeBook', bookId })
            } catch (err) {
                context.dispatch({ type: 'setMsg', msgStr: 'something went wrong' })
                console.log(err);
            }
        },
        async sortBooks({ commit }, { sortParams }) {
            commit({ type: 'sortBooks', sortParams })
        },
        async saveBook({ commit }, { book }) {
            const savedBook = await bookService.save(book)
            commit({ type: 'saveBook', book: savedBook })
        },
        async getBookById(context, { bookId }) {
            const book = await bookService.get(bookId)
            context.commit({ type: 'setSelectedBook', book })
        }
    },
}