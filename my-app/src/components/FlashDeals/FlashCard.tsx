import heartRegular from '../../common/assets/icons/heart-regular.svg'
import starRegular from '../../common/assets/icons/star-regular.svg'
import plusSolid from '../../common/assets/icons/plus-solid.svg'
import plusWhiteSolid from '../../common/assets/icons/plus-white-solid.svg'
// import starSolid from '../../common/assets/icons/star-solid.svg'
// import heartSolid from '../../common/assets/icons/heart-solid.svg'
import ArrowRight from '../../common/assets/icons/arrow-right-solid.svg'
import ArrowLeft from '../../common/assets/icons/arrow-left-solid.svg'
import { useUser } from '../../hook/user'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'

function NextArrow(props: any){
    const {onClick} = props;
    return(
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <img alt='' src={ArrowLeft} />
            </button>
        </div>
    )
}

function PrevArrow(props: any){
    const {onClick} = props;
    return(
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <img alt='' src={ArrowRight} />
            </button>
        </div>
    )
}

export function FlashCard(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    const {productItems} = useUser();
    const {addToCard} = useUser();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow/>
    };
    
    return(
        <>
            <Slider {...settings}>
            {
                productItems.map((productItem) => {
                    return(
                        <div className="box" key={productItem.id}>
                            <div className="product mtop">
                                <div className="img">
                                    <span className="discount">{productItem.discount}% Off</span>
                                    <img src={productItem.cover} alt=''/>
                                    <div className="product-like">
                                        <label>{count}</label> <br />
                                        <img src={heartRegular} alt={productItem.name} onClick={increment}/>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{productItem.name}</h3>
                                    <div className="rate f_flex">
                                        <img alt='' src={starRegular} />
                                        <img alt='' src={starRegular} />
                                        <img alt='' src={starRegular} />
                                        <img alt='' src={starRegular} />
                                        <img alt='' src={starRegular} />
                                    </div>
                                    <div className="price">
                                        <h4>${productItem.price}.00</h4>
                                        <button onClick={() => addToCard(productItem)}>
                                            <img id='plus-pink' alt='' src={plusSolid} />
                                            <img id='plus-white' alt='' src={plusWhiteSolid} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </Slider>
        </>
    )
}