import Image from 'next/image';
import { SignUp } from '@/app/SignUp'
import Logo from "@/app/icons/logo.svg";
import './LoginSignUp.scss'

export const LoginSignUp = (): JSX.Element => {
    return (<section className="ls">
        <div className="ls__info">
            <div className='ls__info-logo'>
                <Image
                    priority
                    src={Logo}
                    alt="Follow us on Twitter"
                />
                Space
            </div>
            <div className='ls__info-desc'>
                <p>
                    I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                </p>
                <div className='ls__info-desc-author'>Hideo Kojima</div>
            </div>

        </div>
        <div className="ls__form">
            <SignUp />
        </div>
    </section>)
}