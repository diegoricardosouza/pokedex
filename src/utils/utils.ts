export const FirstLetterUppercase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)

export const AddZeros = (number: number) => {
  let newNumber = ''

  if (number < 10) {
    newNumber = `00${number}`
  }

  if (number >= 10 && number < 100) {
    newNumber = `0${number}`
  }

  return newNumber
}
