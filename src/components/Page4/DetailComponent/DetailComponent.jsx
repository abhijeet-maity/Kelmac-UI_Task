import React from 'react';
import "./DetailComponent.css";

const DetailComponent = (props) => {
    const {logo, title, title2, para} = props;
  return (
    <div className='Page4-cards'>
        <div className='page4-card-header'>
            <img src={logo} alt="" />
            <div>
                <h3>{title}</h3>
                <h3>{title2}</h3>
            </div>
        </div>
        <p>{para}</p>
    </div>
  )
}

export default DetailComponent