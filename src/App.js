import { useState } from "react";
import { NavItem } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <MyFun />
    </div>
  );
}
function MyFun() {
  const [ajaxList, setAjaxList] = useState([]);
  const makeAjaxCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = await response.json();

    setAjaxList(result);
  };

  return (
    <div>
      <h1>hello react and ajax</h1>

      <input type="button" value="make ajax call" onClick={makeAjaxCall} />
      {ajaxList.map((item, index) => (
        <div className="alert alert-primary" key={index}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
