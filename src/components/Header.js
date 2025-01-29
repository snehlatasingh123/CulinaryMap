import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import food_logo from "../utils/assets/food-logo.png"
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
        <div className="nav-container">
          <Link className="food-logo" to="/" >
            <img className="food-logo" src={food_logo} alt="Food-Logo" />
          </Link>
          <div className="nav-item">
            <ul>
              <li>
                Online Status : {(onlineStatus === true) ? "✅" : "🔴"}
              </li>
              {/* <li>
                <Link to="/practice">Practice</Link>
              </li> */}
              <li>
                <Link to="/" >Browse Restaurants</Link>
              </li>
              <li>
                <Link to="/about">About This Project</Link>
              </li>
              <li>
                <Link to="/contact" >Let's Connect</Link>
              </li>
              <li>
                <Link to="/cart" >Cart</Link>
              </li>
              {/* <button className="login-button"
                onClick={() => {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}
              >{btnName}</button> */}
            </ul>
          </div>
        </div>
      
    </div>
  );
};
export default Header;