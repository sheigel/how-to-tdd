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
    test(`3 books: 2 different get a 5% discount, 1 gets no discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter II'])).toEqual(23.2)
    })
    test(`3 different books have a 10% discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter III'])).toEqual(21.6)
    })
    test(`4 different books have a 20% discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter III', 'Harry Potter IV'])).toEqual(25.6)
    })
    test(`4 books: 2 different get 5% discount, 2 duplicate get no discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter I', 'Harry Potter II'])).toEqual(31.2)
    })
    test(`4 books: 3 different get 10% discount, 1 duplicate gets no discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter III', 'Harry Potter II'])).toEqual(29.6)
    })
    test(`5 different books get 25% discount`, () => {
        expect(calculateCost(['Harry Potter I', 'Harry Potter II', 'Harry Potter III', 'Harry Potter IV', 'Harry Potter V'])).toEqual(30)
    })
    test(`complete basket discount`, () => {
        expect(calculateCost([
            'Harry Potter I','Harry Potter I',
            'Harry Potter II', 'Harry Potter II',
            'Harry Potter III', 'Harry Potter III',
            'Harry Potter IV',
            'Harry Potter V'])).toEqual(51.6)
    })
})