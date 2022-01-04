import { useState } from "react";
export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const id1 = 100;
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [cardCss, setCardcss] = useState();

  const PrimaryTheme = () => setCardcss("bg-primary text-light fs-3 p-4 mb-1");
  const DarkTheme = () => setCardcss("bg-dark text-light fs-3 p-4 mb-1");
  const DangerTheme = () => setCardcss("bg-danger text-light fs-3 p-4 mb-1");

  return (
    <div>
      <input
        className="btn btn-primary btn-sm"
        type="button"
        value="Primary Theme"
        onClick={PrimaryTheme}
      />
      <input
        className="btn btn-dark btn-sm"
        type="button"
        value="Dark Theme"
        onClick={DarkTheme}
      />
      <input
        className="btn btn-danger btn-sm"
        type="button"
        value="Danger Theme"
        onClick={DangerTheme}
      />

      {list.map(() => (
        <div className={cardCss}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsa.
        </div>
      ))}
    </div>
  );
}
