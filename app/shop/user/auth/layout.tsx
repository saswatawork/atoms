import Image from 'next/image'
import { Shop } from "@/app/core/Icons"
import "./user.scss"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="ls">
            <div className="ls__info">
                <Image
                    priority
                    src={Shop}
                    alt="Shop"
                    layout='responsive'

                />
            </div>
            <section className="ls__form">
                {children}
            </section>
        </section>
    )
}