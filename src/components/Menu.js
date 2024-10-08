import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedmenu,setSelectedMenu] = useState(0);
  const [isProfileDropDown,setIsProfileDropDown] = useState(false);
  
  const handleMenuClick = (index)=>{
    setSelectedMenu(index);
  }

  const handleprofileClick = ()=>{
    setIsProfileDropDown(!isProfileDropDown);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
              <p className={selectedmenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
              <p className={selectedmenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
              <p className={selectedmenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
              <p className={selectedmenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
              <p className={selectedmenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
              <p className={selectedmenu===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=>handleprofileClick1}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
