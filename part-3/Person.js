const lengthOfName = 6;

function Person({ age, hobbies, name }) {
  const vote = age >= 18
      ? "please go vote!"
      : "you must be 18";

  const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, lengthOfName)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{vote}</h3>
    </div>
  );
}
