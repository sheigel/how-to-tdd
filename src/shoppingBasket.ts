const BOOK_PRICE = 8
const BOOK_DISCOUNTS = {
    0: 0,
    1: 0,
    2: 0.05,
    3: 0.10,
    4: 0.20,
    5: 0.25
}

function discount(uniqueBooksCount: number) {
    return BOOK_DISCOUNTS[uniqueBooksCount]
}

function uniqueBooks(bookList) {
    return new Set<string>(bookList)
}

export default function calculateCost(bookList: Array<string>) {
    if (!(bookList instanceof Array)) {
        throw new Error("Book list should be an array")
    }

    function uniqueBooksCount() {
        return uniqueBooks(bookList).size
    }

    function allBooksCount() {
        return bookList.length
    }

    return BOOK_PRICE * (
            uniqueBooksCount() * (1 - discount(uniqueBooksCount())) +
            (allBooksCount() - uniqueBooksCount())
        )
}