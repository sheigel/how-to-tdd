const BOOK_PRICE = 8
const BOOK_DISCOUNTS={
    0:0,
    1:0,
    2:0.05,
    3:0.10,
    4:0.20,
    5:0.25
}
function discount(uniqueBooksCount: number) {
    return BOOK_DISCOUNTS[uniqueBooksCount]
}


export default function calculateCost(bookList: Array<string>) {
    if (!(bookList instanceof Array)) {
        throw new Error("Book list should be an array")
    }

    const booksCount = bookList.length
    const uniqueBooks = Object.keys(bookList.reduce((acc, el)=>{
        acc[el] = null
        return acc
    }, {}))
    const uniqueBooksCount = uniqueBooks.length
    if (booksCount === uniqueBooksCount) {
        return BOOK_PRICE * booksCount * (1 - discount(uniqueBooksCount))
    }
    return BOOK_PRICE * uniqueBooksCount * (1 - discount(uniqueBooksCount)) +
        (booksCount - uniqueBooksCount) * BOOK_PRICE
}