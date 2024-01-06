import Image from 'next/image';
import { Logo } from "@/app/core/Icons";
import './LoginSignUpInfo.scss'

export const LoginSignUpInfo = (): JSX.Element => {
    return (
        <div className="ls__info">
            <a href='/'>
                <div className='ls__info-logo'>
                    <Image
                        priority
                        src={Logo}
                        alt="Follow us on Twitter"
                    />
                    Space
                </div>
            </a>
            <div className='ls__info-desc'>
                <div>
                    I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                </div>
                <div className='ls__info-desc-author'>Hideo Kojima</div>
            </div>
        </div>
    )
}