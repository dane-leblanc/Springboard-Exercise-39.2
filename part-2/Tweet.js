const Tweet = (props) => (
  <div>
    <p>Author: {props.name}</p>
    <p>{props.message}</p>
    <p>- {props.date}</p>
  </div>
);
