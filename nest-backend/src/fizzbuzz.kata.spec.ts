import {fizzbuzzKata} from "./fizzbuzz.kata";

describe('FizzBuzz', () => {
    it('Should return fizzbuzz when value is divisible by both 3 and 5', () => {
        const result = fizzbuzzKata(15);
        expect(result).toBe('fizzbuzz')
    })
    it('Should return fizz when value is divisible only by 3', () => {
        const result = fizzbuzzKata(6);
        expect(result).toBe('fizz')
    })
    it('Should return empty string when value is divisible only by 5', () => {
        const result = fizzbuzzKata(25);
        expect(result).toBe('buzz')
    })
    it('Should return fizz when value is divisible neither by 3 nor 5', () => {
        const result = fizzbuzzKata(1);
        expect(result).toBe('')
    })

})