import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import './Login.css';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (

    <div className="container" style={{
      height: "100vh",
      width: "100vw",
      background: 'linear-gradient(#141e30, #243b55)'

    }}>
      <div className="login-box">
        <h2>Login</h2>
        <form autoComplete="off">
          <div className="user-box">
            <input type="text" name required autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <a onClick={handleClick}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>
    </div>






    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <input
    //     style={{ padding: 10, marginBottom: 20 }}
    //     type="text"
    //     placeholder="username"
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     style={{ padding: 10, marginBottom: 20 }}
    //     type="password"
    //     placeholder="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleClick} style={{ padding: 10, width:100 }}>
    //     Login
    //   </button>
    // </div>
  );
};

export default Login;
