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
function extractASeries(books: Array<string>): any {
    return books.reduce((acc, b) =>
            acc.series[b] ?
                {series: acc.series, remainingBooks: [...acc.remainingBooks, b]} :
                {series: Object.assign({}, acc.series, {[b]: b}), remainingBooks: acc.remainingBooks}

        , {series: {}, remainingBooks: []})
}

export function booksOrganizedInSeries(books: Array<string>) {
    if (books.length === 0)
        return []
    const {series, remainingBooks} = extractASeries(books)
    return [series, ...booksOrganizedInSeries(remainingBooks)]
}

export default function calculateCost(bookList: Array<string>) {
    return booksOrganizedInSeries(bookList)
        .map(series => Object.keys(series).length)
        .map(booksInSeries => booksInSeries * discountedPrice(booksInSeries))
        .reduce((acc, price) => acc + price, 0)
}