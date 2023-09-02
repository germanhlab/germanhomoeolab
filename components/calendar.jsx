"use client";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'react-date-range';

// class MyComponent extends MyComponent {
//   handleSelect(date){
//     console.log(date); // native Date object
//   }
//   render(){
//     return (
//       <Calendar
//         date={new Date()}
//         onChange={this.handleSelect}
//       />
//     )
//   }
// }


 import React, { useState } from 'react'
import moment from 'moment/moment';

 

const Calander = () => {

    const [dateC, setDate] = useState();
    console.log(dateC);

    
//    const handleSelect = (date)  => {
//         console.log(date) // native Date object
//       }

  return (
          <Calendar
          color= '#3d91ff'
            date={new Date()}
            onChange={(values) => {
                // {handleSelect}
                // date = values;
            const value = moment(values).format('DD-MM-YYYY');
                setDate(value);
                
            }}
          />
  )
}

export default Calander