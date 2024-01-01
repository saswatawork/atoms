import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import "./Layout.scss"

export const Layout = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => {
    return (
        <main className="home">
            <Header />
            <div className="main-container">
                {children}
            </div>
            <Footer />
        </main>
    )
}