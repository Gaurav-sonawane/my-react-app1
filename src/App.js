import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [list, setList] = useState(["Hello world...."]);

  const tweetHere = () => {
    const newList = [...list, "hello universe"];

    setList(newList);
  };

  const deleteTweet = () => {
    list.splice(0, 1);

    const newList = [...list];
    setList(newList);
  };

  return (
    <div>
      <h1>Working with input element</h1>
      <input type="button" value="tweet to everyone" onClick={tweetHere} />
      <input type="button" value="delete first tweet" onClick={deleteTweet} />

      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
