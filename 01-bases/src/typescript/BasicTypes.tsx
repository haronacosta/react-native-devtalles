export const BasicTypes = () => {

    const name: string = "Haron";
    const age: number = 30;
    const isActive: boolean = true;

    const powers: string[] = ["react", "angular", "vue"];


  return (
    <div>
      <h2>Basic Types</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Active: {isActive ? "Yes" : "No"}</li>

        <li>Powers:
          <ul>
            {powers.map((power, index) => (
              <li key={index}>{power}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
