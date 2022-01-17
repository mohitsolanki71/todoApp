import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <div id="container">
      <Link id="navbar" to={"/"}>
        <img src="https://image.winudf.com/v2/image1/Y29tLmFwcGlnby50b2RvcHJvX2ljb25fMTU1NTI4Nzg4N18wODc/icon.png?w=&fakeurl=1"></img>
      </Link>
      <div id="title">Todos List</div>
      <div>
        <button id="navButton" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};
