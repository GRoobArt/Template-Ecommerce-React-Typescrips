const useFormat = (number: number, expresion: any, valor: string) => {
  let str = number.toString().split('.')
  str[0] = str[0].replace(expresion, valor)
  return str.join('.')
}

export default useFormat
