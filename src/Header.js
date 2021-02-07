import React from "react";
import "./header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvide";
import { auth } from "./firebase";
function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication=()=>{
     if(user)
     {
       auth.signOut();
     }
  }
 
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}> 
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' :user.email.split('@',1) }</span>
            <span className="header_optionLineTwo">{user?'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Order</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
            
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
