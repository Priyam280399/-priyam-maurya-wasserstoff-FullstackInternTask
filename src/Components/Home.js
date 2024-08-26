import React from 'react';
import ChooseStateComponents from './ChooseState';
import WeekInfoCardComponents from './WeekinfoCard';
import HumidityComponents from './Humidity';
import LeftComponents from './Left';

const HomeComponents =()=>{

    return(
        <>
           <div className='homeWrap'>
           <div className='weatherSection'>
                <LeftComponents />
           <div className='rightside'>
              < ChooseStateComponents/>
               < WeekInfoCardComponents /> <br />
                < HumidityComponents />
           </div>

           </div>
           </div>
        </>
    );
}

export default HomeComponents;