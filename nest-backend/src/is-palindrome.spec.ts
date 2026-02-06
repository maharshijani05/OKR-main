import {isPalindrome} from "./is-palindrome";

describe('IsPalindrome', () => {
    it('should return true for empty input', () => {
        const result = isPalindrome("")
        expect(result).toBe(true)
    })
    it('should return true if  reverse of input matches itself', () => {
        const result = isPalindrome("nayan")
        expect(result).toBe(true)
    })
    it('should return false if  reverse of input does not match itself', () => {
        const result = isPalindrome("maharshi")
        expect(result).toBe(false)
    })
    it('should return true if string has extra spaces and the reversed input matches itself ', () => {
        const result = isPalindrome(" nay an")
        expect(result).toBe(true)
    })
    it('should return false if string has extra spaces and the reversed input does not match itself ', () => {
        const result = isPalindrome(" maha r shi ")
        expect(result).toBe(false)
    })
    it('should return true if string has capital letters and the reverse of lowercased input matches itself ', () => {
        const result = isPalindrome("NayAn")
        expect(result).toBe(true)
    })
    it('should return false if string has capital letters and the reverse of lowercased input does not match itself ', () => {
        const result = isPalindrome("MahaRshi")
        expect(result).toBe(false)
    })
    it('should return true if string has numbers and the reversed input matches itself ', () => {
        const result = isPalindrome("na1an")
        expect(result).toBe(true)
    })
    it('should return false if string has numbers and the reversed input does not match itself ', () => {
        const result = isPalindrome("na121yan")
        expect(result).toBe(false)
    })

})