import { SHOP_PATH } from "../../config";
import "./Header.scss";

export const Header = (): JSX.Element => {
    return (
        <header className="header">
            <section className="sale">
                <div className="sale__desc">
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <a href="/">Shop Now </a>
                </div>
                <div className="sale__lang">
                    English
                </div>
            </section>

            <nav className="header__menu">
                <h2>
                    Exclusive
                </h2>
                <ul className="header__menu-items">
                    <li><a href={SHOP_PATH}>Home</a></li>
                    <li><a href={`${SHOP_PATH}/about`}>About</a></li>
                    <li><a href={`${SHOP_PATH}/contact`}>Contact</a></li>
                    <li><a href={`${SHOP_PATH}/sign-up`}>Sign Up</a></li>
                </ul>

                <div className="header__menu-search">ß
                    <input placeholder="Search" />ß
                    <button>Wish list</button>
                    <button>Cart</button>
                </div>
            </nav>
        </header>
    )
}