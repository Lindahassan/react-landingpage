import React from 'react';
import img1 from '../../assets/Illustration 1.png';

import './Main.css';

export default function Main(){
    return ( 
    <div className='main'> 
      <div>
        <h2>Want anything to be easy with LaslesVPN.</h2>
         <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <div>
            <button className='bt2'>Get Started</button>
          </div>
      </div>
      <div>
      <img  className='ills' src={img1} alt= ""/>
      </div>
      
   </div>


     );
};