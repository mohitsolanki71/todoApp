import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./login.css";

export const Login = () => {
  const [form, setForm] = useState([]);
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    let user_token = JSON.parse(localStorage.getItem("userToken"));
    if (user_token) {
      handleToken(user_token.token);
      navigate("/todo");
      console.log("User:", user_token);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("its res", res);

        if (res.token) {
          if (localStorage.getItem("userToken") === null) {
            localStorage.setItem("userToken", JSON.stringify(res));
          } else {
            localStorage.setItem("userToken", JSON.stringify(res));
          }
          navigate("/todo");
        } else {
          alert(res.error);
        }
      });
  };

  return (
    <div id="loginContainer">
      <input
        type="text"
        placeholder="Enter Email here"
        name="email"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="Enter Password here"
        name="password"
        onChange={handleChange}
      />
      <button id="loginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
