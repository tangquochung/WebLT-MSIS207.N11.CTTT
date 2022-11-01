import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/instagramLogo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
                <a href="/">
                    <img className="logo" src={logo} alt="Instagram Logo"/>
                </a>
                <div className="search">
                    <input className="searchText" type="text" placeholder="Search" />
                </div>
                <Menu/>
            </div>
    </div>
  );
}

export default Navigation;
