const Person = (props) => {
  let voteText = props.age >= 18 ? "Please go vote!" : "You must be 18";

  return (
    <div>
      <p>Learn more about this person!!</p>
      <p>Name: {props.name}</p>
      <p>Hobbies:</p>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
};
