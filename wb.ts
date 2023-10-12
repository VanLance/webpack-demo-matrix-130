function replaceSpaces(astring: string):string{
  return Array.from(astring).filter( (letter: string) => letter !== ' ').join('')
}


console.log(replaceSpaces('hello matrix with spaces'))