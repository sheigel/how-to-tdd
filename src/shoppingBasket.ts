const BOOK_PRICE = 8

function discount(uniqueBooksCount: number) {
    if (uniqueBooksCount === 3) {
        return 0.10
    }
    if (uniqueBooksCount === 2) {
        return  0.05
    }
    return 0
}

export default function calculateCost(bookList: Array<string>) {
    if (!(bookList instanceof Array)) {
        throw new Error("Book list should be an array")
    }

    const booksCount = bookList.length
    const uniqueBooks = bookList.filter(book =>
        bookList.indexOf(book) === bookList.lastIndexOf(book)
    )
    const uniqueBooksCount = uniqueBooks.length
    return BOOK_PRICE * booksCount * (1 - discount(uniqueBooksCount))
}