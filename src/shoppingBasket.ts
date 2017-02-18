const BOOK_PRICE = 8

export default function calculateCost(bookList: Array<string>) {
    if (!(bookList instanceof Array)) {
        throw new Error("Book list should be an array")
    }

    const booksCount = bookList.length
    const uniqueBooks = bookList.filter(book =>
        bookList.indexOf(book) === bookList.lastIndexOf(book)
    )
    if (uniqueBooks.length === 3) {
        return BOOK_PRICE * booksCount * 0.90
    }
    if (uniqueBooks.length === 2) {
        return BOOK_PRICE * booksCount * 0.95
    }
    return BOOK_PRICE * booksCount
}