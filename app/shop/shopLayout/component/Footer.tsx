import "./Footer.scss";

export const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <section className="exclusive">
                Exclusive
            </section>

            <section className="support">
                Support
            </section>

            <section className="account">
                Account
            </section>

            <section className="quick-link">
                Quick link
            </section>

            <section className="download-app">
                Download App
            </section>
        </footer>
    )
}