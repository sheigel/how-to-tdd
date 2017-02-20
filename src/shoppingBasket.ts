const BOOK_PRICE = 8
const BOOK_DISCOUNTS = {
    0: 0,
    1: 0,
    2: 0.05,
    3: 0.10,
    4: 0.20,
    5: 0.25
}
function discountedPrice(uniqueBooksCount: number) {
    return (1 - BOOK_DISCOUNTS[uniqueBooksCount]) * BOOK_PRICE
}
function extractNextBookSeries(books: Array<string>): any {
    return books.reduce((acc, b) =>
            acc.series.includes(b) ?
                {series: acc.series, remainingBooks: [...acc.remainingBooks, b]} :
                {series: [...acc.series, b], remainingBooks: acc.remainingBooks}

        , {series: [], remainingBooks: []})
}

export function extractAllBookSeries(books: Array<string>) {
    if (books.length === 0)
        return []
    const {series, remainingBooks} = extractNextBookSeries(books)
    return [series, ...extractAllBookSeries(remainingBooks)]
}

export default function calculateCost(bookList: Array<string>) {
    return extractAllBookSeries(bookList)
        .map(series => series.length)
        .map(booksInSeriesCount => booksInSeriesCount * discountedPrice(booksInSeriesCount))
        .reduce((acc, price) => acc + price, 0)
}