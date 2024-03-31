import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { consultdata } from "../constants/index";

const Consult = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="w-3/4 m-auto">
     <div className="mt-20">
       <Slider {...settings}>
        {consultdata.map((d)=>(
          <div className="h-45 bg-white h-[450px] text-black rounded-xl h">
            <div className="h-45 p-2 bg-black flex justify-center "> 
            <img src={d.img} alt="" className="h-44 w-44 rounded-full "/>
            </div>
            <div className="h-15 flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font semibold justify-center">{d.name}</p>
              <p className="text-cent">{d.speciality}</p>
              <p className="text-center">{d.Contact}</p>
            </div>
          </div>

        ))}
       </Slider>
     </div>
    </div>
  );
}




export default Consult