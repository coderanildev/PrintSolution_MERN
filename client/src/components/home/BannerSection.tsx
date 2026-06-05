import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function BannerSection() {

    return (

        <section className="hero">
            <Swiper  modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                className="hero__slider"
            >

                <SwiperSlide>

                    <div  className="hero__items"
                        style={{
                            backgroundImage: `url(${hero1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection </h6>

                                        <h2> Fall - Winter Collections 2030 </h2>
                                        <p> A specialist label creating luxury essentials.
                                            Ethically crafted with an unwavering commitment to exceptional quality. </p>

                                        <a href="#" className="primary-btn">Shop now<span className="arrow_right"></span></a>
                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero__items"
                        style={{
                            backgroundImage: `url(${hero2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p> A specialist label creating luxury essentials.
                                            Ethically crafted with an unwavering commitment to exceptional quality.
                                        </p>

                                        <a href="#" className="primary-btn">Shop now<span className="arrow_right"></span></a>

                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i> </a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BannerSection;