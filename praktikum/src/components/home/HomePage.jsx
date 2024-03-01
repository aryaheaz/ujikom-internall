import React from "react";
import Slider from "react-slick";
import './HomePage.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrainSelection from "../TrainSelection";




const HomePage = () => {
    const headerStyle = {
        color: "white",
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200
    };

    return (
        <div>

      
            <Slider {...sliderSettings}>
                    <div className="gambar">
                        <img src="/assets/stasiun.webp" alt="..." style={{width:'30%'}} />
                    </div>
                    <div>
                        <img src="/assets/stasiun2.jpg" alt="..."  style={{width:'30%'}} />
                    </div>
                    <div>
                        <img src="/assets/stasiun3.avif" alt="..." style={{width:'30%'}} />
                    </div>
            </Slider>
            
        </div>
    )
}

export default HomePage;