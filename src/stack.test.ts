import createStack from './stack'

describe('Stack', () => {
    var stack;
    beforeEach(()=>{
        stack = createStack()
    })
    test('can create stack object', () => {
        expect(stack).toBeTruthy()
    })
    test(`newly created stack should be empty`, ()=>{
        expect(stack.isEmpty()).toBeTruthy()
    })
    test(`newly created stack should have size 0`, ()=>{
        expect(stack.getSize()).toBe(0)
    })
    test(`after one push stack should not be empty`, ()=>{
        stack.push('test value')

        expect(stack.isEmpty()).toBeFalsy()
    })
    test(`after one push stack size should be 1`, ()=>{
        stack.push('test value')

        expect(stack.getSize()).toBe(1)
    })
    test(`after one push and one pop stack should be empty`, ()=>{
        stack.push('test value')
        stack.pop()

        expect(stack.isEmpty()).toBeTruthy()
    })

})