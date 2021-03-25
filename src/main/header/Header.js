import React from 'react';
import './styles.css'
import {banner, button_background} from "../../utils/images";

const Header = () => {

  return (
    <>
      <div className={'header'} >
        <img src={banner} className="banner" alt="logo" />
        <div style={{marginTop: '-14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={'header-button'} style={{backgroundImage: `url(${button_background})`}}>Các bước thanh toán</div>
        </div>
      </div>
    </>
  );
};

export default Header;