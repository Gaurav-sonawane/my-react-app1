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
  let username = "Gaurav";
  let email = "gaurav@gmail.com";
  let list = ["delhi", "Mumbai", "Nashik"];
  let obj = { id: 1, name: "rahul" };
  return (
    <div>
      <h1>Learning Interpolation</h1>
      <h1>
        {username} {email}
      </h1>
      <h1>{list}</h1>
      <h1>
        {obj.id} {obj.name}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in placeat
        esse reprehenderit sequi officia sunt eius perspiciatis suscipit sint!
      </p>
    </div>
  );
}
