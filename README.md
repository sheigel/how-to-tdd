# Motivation

> "How do you know that the code you've just written does what you think it does?
You could just not care and commit it without making sure. Besides not being a professional it just ensures that in 1-2h's time you'll have to stop your progress on a new functionality and get back to fixing the bugs reported. This is the easiest way to greatly lower the value of our time and of our colleagues time. It makes no sense to not verify our work. It's like digging ditches by throwing earth either in someone else's ditch or behind us in our own ditch." - A Great Man

[How to TDD](https://thinslices.atlassian.net/wiki/x/Ixd5C)

# A stack works like a stack of plates.

* The first items into the stack are the last items to be taken off.
* If you have a limit to how many plates will fit on your shelf, you can’t fill it too high.
* You can’t remove from a stack if it’s empty.

Tests

1. Can create Stack object
2. Newly created stacks should be empty
3. After one push, stack size should be 1
4. After one push and one pop, stack should be empty
5. When pushed passed limit, stack overflows
6. When popped passed empty, stack underflows
7. When two values are pushed then one is popped, size is 1
8. When 1 is pushed 1 is popped
9. When 1 and 2 are pushed 2 and 1 are popped
10. When creating stack with negative size, should throw because of illegal capacity
11. When creating stack with 0 capacity, any push should overflow
12. When 1 is pushed, 1 is on top
13. When stack is empty, top throws empty
14. With zero capacity stack, top throws empty
15. Given stack with 1, 2 pushed, find 1 and 2
16. Given a stack with no 2, find 2 returns null
