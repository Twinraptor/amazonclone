import React from "react";
import "./Header.css";
import logo from "./images/future.png"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  // let person;
  // if (user) {
  //   person = user.email;
  // } else {
  //   person = "Guest";
  // }
  return (
    <div className='header'>
      <Link to='/'>
        {/* <div className='future_logo'>
          <h1 className='logo_the'>the</h1>
          <h1 className='logo_future'>future</h1>
          <h1 className='logo_dot'>.</h1>
        </div> */}
        <img
          className='header_logo'
          src={logo}
          alt=''
        />
      </Link>
      <div className='header_search'>
        <input className='header_searchInput'></input>
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className='header_optionLineTwo'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Account</span>
        </div>
        <div className='header_optionBasket'>
          <Link to='/checkout'>
            <ShoppingBasketIcon className="shopping_basket_icon"></ShoppingBasketIcon>
          </Link>
          <span className='header_optionLineTwo header_basketCount'>
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
