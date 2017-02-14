import createStack from './stack'

describe('Stack', () => {
    test('can create empty stack', () => {
        var stack = createStack()

        expect(stack).toBeTruthy()
    })
})