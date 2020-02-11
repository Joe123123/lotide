# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @joe123123/lotide`

**Require it:**

`const _ = require('@joe123123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array, array)`: Asserts two arrays are equal and provides feedback in console
- `assertEqual(actual, expected)`: Asserts two values are equal and provides feedback in console
- `countLetters(string)`: Counts the number of letters in a string
- `countOnly(allItems, itemToFind)`: Counts the occurence of specified item
- `eqArrays(array1, array2)`: Compare two arrays and returns true or false
- `eqObjects(object1, object2)`: Compare two objects and returns true and false
- `findKey(objects, callback)`: Scans the object and return the first key for which the callback returns a truthy value
- `findKeyByValue(object, value)`: Scans object and looks for the key name based on the value
- `flatten(array)`: Flattens array a single level deep
- `flattenDeep(array)`: Recursively flattens array
- `head(array)`: Returns the first item of an array
- `letterPositions(string)`: Returns all the indices in the string where each character is found
- `map(array, callback)`: Performs a callback function on each element of an array
- `middle(array)`: Returns a middle item of the array
- `tail(array)`: Returns all items after the first
- `takeUntil(array, callback)`: Returns a slice of the array with elements from the beginning until the callback returns false
- `without(source, toRemove)`: Removes items from an array that toRemove includes
