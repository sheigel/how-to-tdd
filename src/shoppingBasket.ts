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

export function booksOrganizedInSeries(bookList: Array<string>) {
    const series = []

    function getBookSeries(book) {
        for (let sIdx = 0; sIdx < series.length; sIdx++) {
            if (!series[sIdx][book]) {
                return series[sIdx]
            }
        }
        const currentSeries = {}
        series.push(currentSeries);
        return currentSeries;
    }

    for (let bIdx = 0; bIdx < bookList.length; bIdx++) {
        const book = bookList[bIdx];
        getBookSeries(book)[book] = book;
    }
    return series;
}

export default function calculateCost(bookList: Array<string>) {
    if (!(bookList instanceof Array)) {
        throw new Error("Book list should be an array")
    }

    const booksCount = bookList.length
    const uniqueBooksCount = booksOrganizedInSeries(bookList).length
    return booksOrganizedInSeries(bookList)
        .map(series => Object.keys(series).length)
        .map(booksInSeries => booksInSeries * (1 - BOOK_DISCOUNTS[booksInSeries]) * BOOK_PRICE)
        .reduce((acc, price) => acc + price, 0)
    if (booksCount === uniqueBooksCount) {
        return BOOK_PRICE * booksCount * (1 - discount(uniqueBooksCount))
    }
    return BOOK_PRICE * uniqueBooksCount * (1 - discount(uniqueBooksCount)) +
        (booksCount - uniqueBooksCount) * BOOK_PRICE
}