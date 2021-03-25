import React from 'react';
import './styles.css'
import Header from "./header/Header";
import Services from "./services/Services";
import Steps from "./steps/Steps";

let widthButtonFull = 85;

const MainScreen = () => {
  return (
    <>
      <div style={{paddingBottom: `${widthButtonFull}px`}}>
        <Header/>
        <Steps/>
        <Services/>
      </div>

      <div className={'button-full'}>
        <button className={'button-normal button-full-container'} onClick={()=>{console.log('click')}}>
          <div className={'button-text'}>Mở ZaloPay ngay</div>
        </button>
      </div>
    </>
  );
};

export default MainScreen;