import searchIcon from "../assets/img/icon/search.png";
import heartIcon from "../assets/img/icon/heart.png";
import cartIcon from "../assets/img/icon/cart.png";

function Header() {
    return (
        <>

            {/* Preloader */}

            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}

            {/* Offcanvas Menu */}

            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <a href="#">Sign in</a>
                        <a href="#">FAQs</a>
                    </div>
                    <div className="offcanvas__top__hover">
                        <span>
                            Usd <i className="arrow_carrot-down"></i>
                        </span>
                        <ul>
                            <li>USD</li>
                            <li>EUR</li>
                            <li>USD</li>
                        </ul>

                    </div>

                </div>

                <div className="offcanvas__nav__option">
                    <a href="#" className="search-switch"><img src={searchIcon} alt="" /></a>
                    <a href="#"><img src={heartIcon} alt="" /></a>
                    <a href="#"> <img src={cartIcon} alt="" /> <span>0</span></a>
                    <div className="price"> $0.00</div>
                </div>

                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p> Free shipping, 30-day return or refund guarantee.</p>
                </div>

            </div>
            {/* Header */}

            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <a href="#">Sign in</a>
                                        <a href="#">FAQs</a>
                                    </div>
                                    <div className="header__top__hover">
                                        <span> Usd<i className="arrow_carrot-down"></i></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;