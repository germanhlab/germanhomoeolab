'use client'
import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
function ImageSlider ({ imgs, imgIndex }) {
  
//   const imgs=[
//     {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
//     {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
//     {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
//   ]
  const [wordData,setWordData]=useState(imgs[0])
  const [val,setVal] = useState(0);
 

  useEffect(() => {

    console.log(imgIndex)
    setVal(imgIndex)
    const wordSlider=imgs[imgIndex];
    setWordData(wordSlider)
    // if (loadingF) {
    //   getProducts();
    // }
  }, []);

  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = ()=>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      {/* <button className='btns' onClick={handlePrevious}>P</button> */}
      <img src={wordData} height="300" width="500" /> 
      {/* <button className='btns' onClick={handleNext}>N</button> */}
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData==i?"clicked":""} src={data} onClick={()=>handleClick(i)} height="60" width="100" />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;