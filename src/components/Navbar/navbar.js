import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img> 
      <p>COMNICA</p>
    </nav>
  );
};

export default Navbar;
