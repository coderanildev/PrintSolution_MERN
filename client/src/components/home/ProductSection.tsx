import { useState } from "react";

import product1 from "../../assets/img/product/product-1.jpg";
import product2 from "../../assets/img/product/product-2.jpg";
import product3 from "../../assets/img/product/product-3.jpg";
import product4 from "../../assets/img/product/product-4.jpg";

function ProductSection() {

    const [filter, setFilter] = useState("all");
    const products = [
        { id: 1, name: "Piqué Biker Jacket", price: "67.24", img: product1, type: "new-arrivals", label: "New" },
        { id: 2, name: "Piqué Biker Jacket", price: "67.24", img: product2, type: "hot-sales" },
        { id: 3, name: "Multi-pocket Chest Bag", price: "43.48", img: product3, type: "new-arrivals", label: "Sale" },
        { id: 4, name: "Diagonal Textured Cap", price: "60.90", img: product4, type: "hot-sales" }
    ];

    const filteredProducts =
        filter === "all"?products :products.filter(item => item.type === filter

            );

    return (

        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="filter__controls">
                            <li className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Best Sellers</li>
                            <li className={filter === "new-arrivals" ? "active" : ""} onClick={() => setFilter("new-arrivals")}> New Arrivals</li>
                            <li  className={filter === "hot-sales" ? "active" : ""}  onClick={() => setFilter("hot-sales")}>Hot Sales</li>
                        </ul>
                    </div>
                </div>


                <div className="row product__filter">
                    {
                        filteredProducts.map(
                            (product) => (
                                <div key={product.id}  className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic">
                                            <img src={product.img} className="img-fluid" alt="" />

                                            {
                                                product.label &&
                                                <span className="label">
                                                    {product.label}
                                                </span>
                                            }
                                        </div>

                                        <div className="product__item__text">
                                            <h6>{product.name} </h6>
                                            <a href="#" className="add-cart">+ Add To Cart
                                            </a>
                                            <h5>${product.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>

    )

}

export default ProductSection;