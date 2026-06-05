import product1 from "../../assets/img/product/product-1.jpg";
import product2 from "../../assets/img/product/product-2.jpg";
import product3 from "../../assets/img/product/product-3.jpg";
import product4 from "../../assets/img/product/product-4.jpg";

function NewArrival() {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Latest Product</span>
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>

                <div className="row product__filter">

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic">
                                <img src={product1} alt="" className="img-fluid" />
                            </div>
                            <div className="product__item__text">
                                <h6>T-shirt Contrast Pocket</h6>
                                <h5>$49.66</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic">
                                <img src={product2} alt="" className="img-fluid" />
                            </div>
                            <div className="product__item__text">
                                <h6>Piqué Biker Jacket</h6>
                                <h5>$67.24</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic">
                                <img src={product3} alt="" className="img-fluid" />
                            </div>
                            <div className="product__item__text">
                                <h6>Multi-pocket Chest Bag</h6>
                                <h5>$43.48</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic">
                                <img src={product4} alt="" className="img-fluid" />
                            </div>
                            <div className="product__item__text">
                                <h6>Diagonal Textured Cap</h6>
                                <h5>$60.90</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}   

export default NewArrival;