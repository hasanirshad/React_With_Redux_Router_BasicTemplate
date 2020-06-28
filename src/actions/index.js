export const increment = (n) => {
  return {
    type:'INCREMENT',
    number:n
  }
}
export const decrement = () => {
    return {
      type:'DECREMENT'
    }
  }