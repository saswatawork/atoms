import Link from "next/link";
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
                    <Link href="/">Shop Now </Link>
                </div>
                <div className="sale__lang">
                    English
                </div>
            </section>

            <nav className="header__menu">
                <h3>Exclusive</h3>
                <ul className="header__menu-items">
                    <li><Link href={SHOP_PATH}>Home</Link></li>
                    <li><Link href={`${SHOP_PATH}/about`}>About</Link></li>
                    <li><Link href={`${SHOP_PATH}/contact`}>Contact</Link></li>
                    <li><Link href={`${SHOP_PATH}/user/auth/sign-up`}>Sign Up</Link></li>
                </ul>

                <div className="header__menu-search">
                    <input placeholder="Search" />
                    <button>Wish list</button>
                    <button>Cart</button>
                </div>
            </nav>
        </header>
    )
}