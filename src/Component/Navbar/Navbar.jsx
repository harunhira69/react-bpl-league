import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/dollar.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
                 <div class="navbar max-w-[1200px] mx-auto">
  <div class="flex-1">
    
      <img src={navImg} alt=""></img>
  
  </div>
  <div class="flex items-center gap-2">
  <span>{availableBalance}</span>
  <span>Coin</span>
  <img src={coin}></img>
  </div>
</div>
        </div>
    );
};

export default Navbar;