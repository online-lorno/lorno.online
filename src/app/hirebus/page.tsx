const returnEven = (nums: number[]): number[] => {
  return nums.filter((num) => num % 2 == 0)
}

interface CountString {
  [key: string]: number
}

const returnStringCount = (text: string): CountString => {
  const result: CountString = {}
  const textArr = text.split('')
  textArr.forEach((c: string) => {
    if (result[c]) {
      result[c] = result[c] + 1
    } else {
      result[c] = 1
    }
  })
  return result
}

export default function Hirebus() {
  const numbers = [1, 2, 3, 4]
  const evenNumbers = returnEven(numbers)
  const sampleString = returnStringCount('aaabbcccc')

  return (
    <ul>
      {evenNumbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
      {JSON.stringify(sampleString)}
    </ul>
  )
}
