import { Link } from "react-router-dom";

function Header(props) {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid ",
    padding: "8px",
    width: "90%",
    margin: "auto",

  };

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  );
}

export default Header;