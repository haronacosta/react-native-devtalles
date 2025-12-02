export const BasicFunctions = () => {

    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    }

  return (
    <div>
      <h2>Basic Functions</h2>
      <p>Result of adding 2 and 3: {addTwoNumbers(2, 3)}</p>
    </div>
  )
}
