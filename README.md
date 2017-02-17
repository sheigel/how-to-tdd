# Motivation

> "How do you know that the code you've just written does what you think it does?
You could just not care and commit it without making sure. Besides not being a professional it just ensures that in 1-2h's time you'll have to stop your progress on a new functionality and get back to fixing the bugs reported. This is the easiest way to greatly lower the value of our time and of our colleagues time. It makes no sense to not verify our work. It's like digging ditches by throwing earth either in someone else's ditch or behind us in our own ditch." - A Great Man

[How to TDD](https://thinslices.atlassian.net/wiki/x/Ixd5C)

#Before we begin:

1.Clone/fork this repo
~~~
git clone git@github.com:Thinslices/how-to-tdd.git
~~~
2.Install the dependencies
~~~~
npm install
~~~~
3.Start running tests and watch for changes
~~~~
npm test
~~~~
4.Take a look at [Jest library](https://facebook.github.io/jest/docs/getting-started.html#content)

# Harry Potter :

To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases.

One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

	2 copies of the first book
	2 copies of the second book
	2 copies of the third book
	1 copy of the fourth book
	1 copy of the fifth book

	Answer: 51.60 EUR
