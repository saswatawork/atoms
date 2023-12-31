import Image from 'next/image';
import { SignUpForm } from './SignUpForm';
import Logo from "@/app/icons/logo.svg";
import './SignUp.scss'

export const SignUp = (): JSX.Element => {
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
                <div>
                    I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                </div>
                <div className='ls__info-desc-author'>Hideo Kojima</div>
            </div>
        </div>
        <div className="ls__form">
            <SignUpForm />
        </div>
    </section>)
}