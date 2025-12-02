interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address
}

interface Address {
    street: string;
    city: string;
    country: string;
}


export const ObjectLiterals = () => {
  const person: Person = {
    age: 28,
    firstName: "Haron",
    lastName: "Acosta",
    address: {
      street: "123 Main St",
      city: "Metropolis",
      country: "Freedonia",
    },
  };

  return (
    <div>
      <h2>Object Literals</h2>

      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{person.firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{person.lastName}</td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>{person.address.street}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{person.address.city}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{person.address.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
