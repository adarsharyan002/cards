import  { Component } from "react";

import { navData } from "../data/menu";
import { FaAlignJustify } from "react-icons/fa";
class Navbar extends Component {
  state = {
    clicked: false
  };
  onIconClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          TechProSchool
          {/* <i className="fab fa-react"></i> */}
        </h1>
        <div className="menu-icon" onClick={this.onIconClick}>
          
         <FaAlignJustify/>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navData.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
