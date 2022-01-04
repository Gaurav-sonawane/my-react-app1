export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
//====================Learning Interpolation============//
//CAREFUL:: when working with object
function MyComponent() {
  const id1 = 100;
  const background = "bg-info";
  return (
    <div>
      <h1>Interpolation {id1}</h1>
      <h1>Interpolatiin {id1 + 100}</h1>

      <h1 id="1"> interpolation {id1}</h1>
      <h1 id={id1} className={background}>
        {" "}
        Interpolation{" "}
      </h1>
    </div>
  );
}
