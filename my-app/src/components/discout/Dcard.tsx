import { Ddata } from "./Ddata";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Dcard(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
    };
    return(
        <>
            <Slider {...settings}>
                {
                    Ddata.map((value,index)=>{
                        return(
                           <>
                             <div className="box product" key={index}>
                                <div className="img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}.00</span>
                            </div>
                           </>
                        )
                    })
                }
            </Slider>
        </>
    )
}