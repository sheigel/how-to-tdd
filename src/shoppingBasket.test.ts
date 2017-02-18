import calculateCost from './shoppingBasket'

describe('shopping cart', () => {
    test(`no book list costs 0`, () => {
        expect(calculateCost([])).toEqual(0)
    })
    test('book list should be an array', () => {
        expect(() => calculateCost('some value' as any)).toThrowError('Book list should be an array')
    })
    test(`1 book costs 8`, () => {
        expect(calculateCost(['Harry Potter I'])).toEqual(8)
    })
    test(`2 different books have discount of 5%`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II'])).toEqual(15.2)
    })
    test(`2 identical books do not have a discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter I'])).toEqual(16)
    })
    test(`3 identical books do not have a discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter I', 'Harry Potter I'])).toEqual(24)
    })
    test(`3 different books have a 10% discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter III'])).toEqual(21.6)
    })
})