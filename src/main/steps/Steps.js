import React, {useState, useEffect} from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "./swiperStyle.css";
import "./styles.css";
import {stepDetailData, paginationData} from "../../utils/data_mock";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow]);

const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const onActiveSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // console.log('giday: ',activeIndex,controlledSwiper )
    controlledSwiper && controlledSwiper.slideTo(activeIndex);
  }, [controlledSwiper, activeIndex]);

  const Pagination = () => {
    return (
      <div className="pagination">
        {paginationData.map((item, index) => {
          return (
            <div key={index} className="pagination-item" onClick={() => onActiveSlide(index)}>
              <img className={'pagination-img'} src={item.image} alt="step_one"/>
              <div className={`pagination-point ${(index+1) === paginationData.length ? 'pagination-point-last': ''}`}>
                <div className={`pagination-number ${index === activeIndex ? 'pagination-number-active':''} `}>{item.id}</div>
              </div>
              <p className={`pagination-text ${index === activeIndex ? 'pagination-text-active':''}`}>{item.title}</p>
            </div>
          )
        })
        }
      </div>
    )
  };

  return (
    <>
    <div className={'steps'} style={{overflow: 'hidden', margin: '20px 16px'}}>
      <Pagination/>

      <Swiper
        effect={'fade'} //'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
        allowTouchMove={false}
        initialSlide={activeIndex}
        onSwiper={setControlledSwiper}
        
        // onSlideChange={(swiper) => console.log('onSlideChange',swiper)}
        // pagination={true}
      >
        <div className={'arrow'} style={{left:`calc(${activeIndex * 25}% + 8%)` }}/>
        {stepDetailData?.length > 0 && stepDetailData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={'step-detail'} style={{textAlign: 'center'}}>
                <div className={'step-detail-title'}>{item.title}</div>
                <img alt="" className={'step-detail-img'} style={{margin:`${item.margin}`}} src={item.image}/>
                {item.content && <div className={'step-detail-text'}>{item.content}</div>}
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
    </>
  );
};

export default Steps;