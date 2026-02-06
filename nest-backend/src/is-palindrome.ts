export const isPalindrome = (inputString: string) => {
    const convertedString = inputString.replaceAll(" ", "").toLowerCase()
    console.log(convertedString)
    const reversedInputString = [...convertedString].reverse().join('');
    console.log(reversedInputString)
    return convertedString === reversedInputString;
}