import logo from "../assets/img/logo.png";
import searchIcon from "../assets/img/icon/search.png";
import heartIcon from "../assets/img/icon/heart.png";
import cartIcon from "../assets/img/icon/cart.png";

function Navbar() {
    return (
        <>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <a href="/"> <img src={logo} alt="logo" /></a>
                            </div>
                        </div>


                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/shop"> Shop</a>
                                    </li>

                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="/about">  About Us</a></li>
                                            <li><a href="/shop-details">Shop Details</a></li>
                                            <li> <a href="/cart">Shopping Cart</a></li>
                                            <li><a href="/checkout"> Checkout</a></li>
                                            <li><a href="/blog-details"> Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact"> Contact</a></li>
                                </ul>

                            </nav>

                        </div>


                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <a href="#" className="search-switch">
                                    <img src={searchIcon} alt=""  />
                                </a>

                                <a href="#"><img src={heartIcon} alt=""/></a>
                                <a href="#"> <img src={cartIcon} alt=""/>
                                       <span> 0</span>
                                </a>

                                <div className="price">
                                    $0.00
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="canvas__open"> <i className="fa fa-bars"></i> </div>
                </div>
        </>
    );
}

export default Navbar;