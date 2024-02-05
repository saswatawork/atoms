
import "./Home.scss";

export const Home = (): JSX.Element => {
    return (
        <main className="home">
            <div className="home__container">
                <h1>Welcome to Space!</h1>
                <ul className="home__container-items">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/api">API</a></li>
                    <li><a href="/notebook">Notebook</a></li>
                </ul>
            </div>
        </main>
    )
}