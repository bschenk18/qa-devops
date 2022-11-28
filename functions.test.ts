const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array of the same length', () => {
        let myArray = [1,2,3,4,5]
        let result = shuffleArray(myArray)
    
        expect(result.length).toEqual(myArray.length)
    })

    test('should shuffle array of items', () => {
        let myArray = [1,2,3,4,5]
        let result = shuffleArray(myArray)

        expect(result.join()).not.toEqual(myArray.join())
    })
    
})