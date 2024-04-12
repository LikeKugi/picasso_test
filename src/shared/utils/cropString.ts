export const cropString = (str: string, len:number=40) => {
  return str.length <= len ? str : `${str.slice(0, len)}...`;
}
