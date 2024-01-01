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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/SignUp">Sign Up</a></li>
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