import {isLeapYear} from "./is-leap-year";

describe('isLeapYear', () => {
    it('should return true if the year is divisible by 400', () => {
        const result = isLeapYear(400)
        expect(result).toBe(true)
    })
    it('should return false if the year is divisible by 100', () => {
        const result = isLeapYear(2100)
        expect(result).toBe(false)
    })
    it('should return true if the year is divisible by 4', () => {
        const result = isLeapYear(2004)
        expect(result).toBe(true)
    })
    it('should return false if the year is neither divisible by 4 nor by 400', () => {
        const result = isLeapYear(2005)
        expect(result).toBe(false)
    })
})