import React from 'react';
import './styles.css'
import {logo_pci} from "../../utils/images";
import {serviceData} from "../../utils/data_mock";

const Services = () => {

  return (
    <>
      <div className={'services-title'}> Ưu điểm dịch vụ</div>
      <div className={'services'}>
        { serviceData.map((service, index)=>{
            return (
              <div key={index} className={'service-item'}>
                <img alt="" src={service.image} width={70} height={70}/>
                <div className={'service-item-title'}>{service.title}</div>
              </div>
            )
          })
        }
      </div>

      <div className={'footer'}>
        <img alt="" src={logo_pci} width={42} height={24} style={{marginRight:'10px'}}/>
        <span>Toàn bộ thông tin của bạn được bảo vệ theo tiêu chuẩn bảo mật quốc tế PCI DSS.</span>
      </div>
    </>
  );
};

export default Services;