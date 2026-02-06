export const fizzbuzzKata = (value: number) => {
    if (value % 3 == 0 && value % 5 == 0) return "fizzbuzz"
    if (value % 3 == 0) return "fizz"
    if (value % 5 == 0) return "buzz"
    return ""
}