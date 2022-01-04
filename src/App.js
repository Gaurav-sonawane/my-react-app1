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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");

  const [userList, setUserList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const registerUser = () => {
    const user = {
      username: username,
      password: password,
      email: Email,
      Mobile: Mobile,
    };

    const newList = [user, ...userList];
    setUserList(newList);
  };

  return (
    <div>
      <h1>Working With Registration</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="enter username"
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          onChange={handlePassword}
          placeholder="enter password"
        />
      </div>
      <div>
        <input
          type="text"
          value={Email}
          onChange={handleEmail}
          placeholder="enter Email"
        />
      </div>
      <div>
        <input
          type="text"
          value={Mobile}
          onChange={handleMobile}
          placeholder="enter Mobile"
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={registerUser} />
      </div>
      <hr />

      {userList.map((item) => (
        <div>
          {item.username},{item.password},{item.email},{item.Mobile}
        </div>
      ))}
    </div>
  );
}
